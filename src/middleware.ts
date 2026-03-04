import { NextResponse } from "next/server";

export function middleware(request: Request) {
  if (process.env.SITE_DOWN === "true") {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  return NextResponse.next();
}