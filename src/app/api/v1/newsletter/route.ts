import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB || "vhumani";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("waitlist");

    // Prevent duplicate emails
    const existing = await collection.findOne({ email });
    if (existing) {
      await client.close();
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    await collection.insertOne({ email, createdAt: new Date() });
    await client.close();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}