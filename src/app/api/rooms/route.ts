import { NextRequest, NextResponse } from "next/server";
import { getRooms, createRoom, updateRoom, deleteRoom } from "@/lib/storage/store";

export async function GET() {
  try {
    const rooms = await getRooms();
    return NextResponse.json({ success: true, rooms });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch rooms" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newRoom = await createRoom(body);
    return NextResponse.json({ success: true, room: newRoom });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to create room" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    const updated = await updateRoom(id, updates);
    return NextResponse.json({ success: true, room: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update room" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    const deleted = await deleteRoom(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to delete room" }, { status: 500 });
  }
}
