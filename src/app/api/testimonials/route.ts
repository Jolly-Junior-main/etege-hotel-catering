import { NextRequest, NextResponse } from "next/server";
import { getTestimonials, addTestimonial, updateTestimonial } from "@/lib/storage/store";

export async function GET() {
  try {
    const testimonials = await getTestimonials();
    return NextResponse.json({ success: true, testimonials });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newTestimonial = await addTestimonial(body);
    return NextResponse.json({ success: true, testimonial: newTestimonial });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to add testimonial" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    const updated = await updateTestimonial(id, updates);
    return NextResponse.json({ success: true, testimonial: updated });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update testimonial" }, { status: 500 });
  }
}
