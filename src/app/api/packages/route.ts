import { NextRequest, NextResponse } from "next/server";
import { getCateringPackages, createPackage, updatePackage, deletePackage } from "@/lib/storage/store";

export async function GET() {
  try {
    const packages = await getCateringPackages();
    return NextResponse.json({ success: true, packages });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newPkg = await createPackage(body);
    return NextResponse.json({ success: true, package: newPkg });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create package" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    const updated = await updatePackage(id, updates);
    return NextResponse.json({ success: true, package: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update package" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    const deleted = await deletePackage(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete package" }, { status: 500 });
  }
}
