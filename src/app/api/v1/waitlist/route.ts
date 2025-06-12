import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB || "vhumani";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, handle, newsletter, type } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      typeof email !== "string" ||
      !type
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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

    await collection.insertOne({
      firstName,
      lastName,
      email,
      handle,
      newsletter,
      type,
      createdAt: new Date(),
    });
    await client.close();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}