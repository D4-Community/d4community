// app/api/commudle-events/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://json.commudle.com/api/v2/events/public/index_by_community?when=past&community_id=455&page=1&count=9'
  );
  const data = await res.json();
  return NextResponse.json(data);
}

