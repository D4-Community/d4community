import { NextResponse } from "next/server";

const LUMA_API_URL =
  "https://api2.luma.com/user/profile/events-hosting?pagination_limit=10&period=past&user_api_id=usr-zPnx2wwYuPhns3S";

export async function GET() {
  try {
    const res = await fetch(LUMA_API_URL, {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB",
        origin: "https://luma.com",
        referer: "https://luma.com/",
        "x-luma-client-type": "luma-web",
        "x-luma-client-version": "2026-04-23T01:40:48Z|35549f7d631c",
        "x-luma-document-referrer": "https://www.google.com/",
        "x-luma-timezone": "Asia/Kolkata",
        "x-luma-web-url": "https://luma.com/user/usr-zPnx2wwYuPhns3S",
        "user-agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36",
      },
      // Cache for 5 minutes on the server
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Luma API error", status: res.status },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("[luma-events] fetch error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}