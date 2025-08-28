import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const hostname = url.hostname;

  // Redirect www to non-www for canonical host consistency
  if (hostname.startsWith("www.")) {
    url.hostname = hostname.replace(/^www\./, "");
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|fonts|images|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};


