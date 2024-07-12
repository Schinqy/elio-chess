import { ok } from 'assert';
import type { error } from 'console';
import { get } from 'http';
import { url } from 'inspector';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get('handle');

  if (!handle) {
    return NextResponse.json({ error: 'Lichess handle is required' }, { status: 400 });
  }

  const apiUrl = `https://lichess.org/api/user/${handle}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from Lichess' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching data from Lichess' }, { status: 500 });
  }
}
import { json } from 'stream/consumers';
