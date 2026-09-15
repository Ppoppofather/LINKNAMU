import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  const client = await clientPromise;
  const docs = await client
    .db()
    .collection<{ linkId: string; count: number }>("clicks")
    .find({})
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json(counts);
}
