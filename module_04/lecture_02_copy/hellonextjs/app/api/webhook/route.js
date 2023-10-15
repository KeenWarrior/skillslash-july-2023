import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Events from "./event.model";

const mongoose_uri =
  "mongodb+srv://skill:skill@cluster0.affd7pt.mongodb.net/events?retryWrites=true&w=majority";

export async function GET(request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(request) {
  console.log("request", request.headers);
  await mongoose.connect(mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const body = await request.json();
  const response = await Events.create({ event: JSON.stringify(body) });
  return NextResponse.json(response);
}
