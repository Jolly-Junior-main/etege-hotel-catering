import { NextRequest, NextResponse } from "next/server";
import { getGallery, addGalleryItem, deleteGalleryItem } from "@/lib/storage/store";

export async function GET() {
  try {
    const gallery = await getGallery();
    return NextResponse.json({ success: true, gallery });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch gallery" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const item = await addGalleryItem(body);
    return NextResponse.json({ success: true, item });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to add gallery item" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    const deleted = await deleteGalleryItem(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete gallery item" }, { status: 500 });
  }
}
