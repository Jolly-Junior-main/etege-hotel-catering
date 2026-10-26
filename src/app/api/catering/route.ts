import { NextRequest, NextResponse } from "next/server";
import { cateringInquirySchema } from "@/lib/validation/schemas";
import { createCateringInquiry, getCateringInquiries, updateCateringInquiryStatus } from "@/lib/storage/store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = cateringInquirySchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation failed", 
          errors: validated.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const newInquiry = await createCateringInquiry({
      customerName: validated.data.customerName,
      email: validated.data.email,
      phone: validated.data.phone,
      eventType: validated.data.eventType,
      eventDate: validated.data.eventDate,
      eventLocation: validated.data.eventLocation,
      estimatedGuests: validated.data.estimatedGuests,
      packageId: validated.data.packageId,
      packageName: validated.data.packageName,
      budgetRange: validated.data.budgetRange,
      additionalNotes: validated.data.additionalNotes,
    });

    return NextResponse.json({
      success: true,
      message: "Catering quote request received successfully",
      reference: newInquiry.reference,
      inquiry: newInquiry,
    });
  } catch (error) {
    console.error("Error creating catering inquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const inquiries = await getCateringInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch catering inquiries" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, adminNotes, quotedAmount } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "Missing id or status" },
        { status: 400 }
      );
    }

    const updated = await updateCateringInquiryStatus(id, status, adminNotes, quotedAmount);
    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Catering inquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, inquiry: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update catering inquiry" },
      { status: 500 }
    );
  }
}
