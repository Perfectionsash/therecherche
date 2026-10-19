import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const brochureSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  postcode: z.string().min(1, "Postcode is required"),
  interest: z.enum(["kitchen", "wardrobe", "both"]),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = brochureSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    const emailContent = `
New Brochure Request - The Recherche

Contact Details:
- Name: ${data.name}
- Email: ${data.email}
- Address: ${data.address}
- Postcode: ${data.postcode}
- Interest: ${data.interest.charAt(0).toUpperCase() + data.interest.slice(1)}

Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
    `.trim();

    console.log("New brochure request:", emailContent);

    // TODO: Send email with PDF attachment
    // await sendEmail({
    //   to: "info@therecherche.co.uk",
    //   subject: `Brochure Request: ${data.interest} - ${data.name}`,
    //   text: emailContent,
    //   attachments: [{ filename: "The-Recherche-Brochure.pdf", path: "./public/brochure.pdf" }],
    // });

    // TODO: Auto-reply to user with download link
    // await sendEmail({
    //   to: data.email,
    //   subject: "Your The Recherche Brochure",
    //   html: `...`,
    // });

    return NextResponse.json({ success: true, message: "Brochure request submitted successfully" });
  } catch (error) {
    console.error("Brochure API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}