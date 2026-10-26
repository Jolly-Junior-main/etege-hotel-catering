import { NextRequest, NextResponse } from "next/server";
import { contactInquirySchema } from "@/lib/validation/schemas";
import { createContactInquiry, getContactInquiries } from "@/lib/storage/store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = contactInquirySchema.safeParse(body);

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

    const newContact = await createContactInquiry({
      name: validated.data.name,
      email: validated.data.email,
      phone: validated.data.phone,
      subject: validated.data.subject,
      message: validated.data.message,
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
      reference: newContact.reference,
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await getContactInquiries();
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch contact inquiries" },
      { status: 500 }
    );
  }
}
