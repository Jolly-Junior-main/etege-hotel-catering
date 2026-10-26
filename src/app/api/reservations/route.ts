import { NextRequest, NextResponse } from "next/server";
import { reservationInquirySchema } from "@/lib/validation/schemas";
import { createReservation, getReservations, updateReservationStatus } from "@/lib/storage/store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = reservationInquirySchema.safeParse(body);

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

    const newReservation = await createReservation({
      roomId: validated.data.roomId,
      roomName: validated.data.roomName,
      customerName: validated.data.customerName,
      customerEmail: validated.data.customerEmail,
      customerPhone: validated.data.customerPhone,
      checkInDate: validated.data.checkInDate,
      checkOutDate: validated.data.checkOutDate,
      adults: validated.data.adults,
      children: validated.data.children || 0,
      specialRequests: validated.data.specialRequests || "",
    });

    return NextResponse.json({
      success: true,
      message: "Reservation inquiry received successfully",
      reference: newReservation.reference,
      reservation: newReservation,
    });
  } catch (error) {
    console.error("Error creating reservation inquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const reservations = await getReservations();
    return NextResponse.json({ success: true, reservations });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch reservations" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, adminNotes } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "Missing id or status" },
        { status: 400 }
      );
    }

    const updated = await updateReservationStatus(id, status, adminNotes);
    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Reservation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, reservation: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update reservation" },
      { status: 500 }
    );
  }
}
