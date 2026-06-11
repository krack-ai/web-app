import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/krack-ai/web-app/releases/download/1.1/overlay-ai.exe"
  );
}