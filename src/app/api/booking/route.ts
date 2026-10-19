import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  postcode: z.string().min(1, "Postcode is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  projectType: z.enum(["kitchen", "wardrobe", "other", "unsure"]),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const emailContent = `
New Consultation Booking - The Recherche

Booking Details:
- Project Type: ${data.projectType.charAt(0).toUpperCase() + data.projectType.slice(1)}
- Preferred Date: ${data.preferredDate}
- Preferred Time: ${data.preferredTime}
- Additional Notes: ${data.message || "None"}

Contact Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Postcode: ${data.postcode}

Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
    `.trim();

    console.log("New booking request:", emailContent);

    // TODO: Send confirmation email to user
    // await sendEmail({
    //   to: data.email,
    //   subject: `Consultation Confirmed: ${data.preferredDate} at ${data.preferredTime}`,
    //   html: `...`,
    // });

    // TODO: Send notification to team
    // await sendEmail({
    //   to: "info@therecherche.co.uk",
    //   subject: `New Booking: ${data.projectType} - ${data.name}`,
    //   text: emailContent,
    // });

    return NextResponse.json({ success: true, message: "Booking submitted successfully" });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}