import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  projectType: z.string().min(1, "Project type is required"),
  roomSize: z.string().optional(),
  style: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  postcode: z.string().min(1, "Postcode is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = enquirySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Format the email content
    const emailContent = `
New Project Enquiry - The Recherche

Project Details:
- Project Type: ${data.projectType}
- Room Size: ${data.roomSize || "Not specified"}
- Style Preference: ${data.style || "Not specified"}
- Timeline: ${data.timeline || "Not specified"}
- Budget Range: ${data.budget || "Not specified"}
- Additional Notes: ${data.message || "None"}

Contact Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Postcode: ${data.postcode}

Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
    `.trim();

    // In production, send email using Resend, SendGrid, or Nodemailer
    // For now, we'll log and return success
    console.log("New enquiry received:", emailContent);

    // TODO: Implement actual email sending
    // await sendEmail({
    //   to: "info@therecherche.co.uk",
    //   subject: `New Enquiry: ${data.projectType} - ${data.name}`,
    //   text: emailContent,
    // });

    // TODO: Optionally save to database/CRM
    // await saveToCRM(data);

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}