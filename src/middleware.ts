// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware() {
  if (process.env.SITE_DOWN === "true") {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 - Site Under Maintenance</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
          <div style="text-align:center;">
            <h1>404 - Site Under Maintenance</h1>
          </div>
        </body>
      </html>
      `,
      {
        status: 404, // or 503 if temporary
        headers: {
          "content-type": "text/html",
        },
      }
    );
  }

  return NextResponse.next();
}