import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authjs.session-token");
  const pathname = req.nextUrl.pathname;

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (pathname === "/app" && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
