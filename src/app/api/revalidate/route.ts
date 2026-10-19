import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Verify the secret token
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { paths } = body;

    if (!paths || !Array.isArray(paths)) {
      return NextResponse.json({ error: "Invalid paths array" }, { status: 400 });
    }

    // Revalidate the specified paths
    for (const path of paths) {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${path}`, {
        method: "HEAD",
        headers: {
          "x-vercel-revalidate": "true",
        },
      });
    }

    return NextResponse.json({ revalidated: true, paths });
  } catch (error) {
    console.error("Revalidate error:", error);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}