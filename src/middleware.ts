import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("authjs.session-token");
  const pathname = req.nextUrl.pathname;

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL("/app", req.nextUrl));
  }

  if (pathname === "/app" && !token) {
    return NextResponse.redirect(new URL("/auth", req.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
