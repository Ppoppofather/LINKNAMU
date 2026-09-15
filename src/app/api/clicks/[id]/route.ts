import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const client = await clientPromise;
  const doc = await client
    .db()
    .collection<{ linkId: string; count: number }>("clicks")
    .findOneAndUpdate(
      { linkId: params.id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ count: doc?.count ?? 1 });
}
