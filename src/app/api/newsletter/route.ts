import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  interests: z.array(z.enum(["kitchen", "wardrobe", "joinery", "guides"])).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = newsletterSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, interests } = result.data;

    console.log("New newsletter signup:", { email, interests });

    // TODO: Add to newsletter service (Resend, Loops, ConvertKit, etc.)
    // await addToNewsletter(email, interests);

    // TODO: Send welcome email
    // await sendEmail({
    //   to: email,
    //   subject: "Welcome to The Recherche Journal",
    //   html: `...`,
    // });

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}