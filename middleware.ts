import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  isAdmin?: boolean;
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const pathname = req.nextUrl.pathname;

  // Redirect unauthenticated users
  if (
    (pathname.startsWith("/profile") ||
      pathname.startsWith("/dashboard") ||
      pathname.startsWith("/admin")) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Check admin access
  if (pathname.startsWith("/admin") && token) {
    try {
      const decoded = jwtDecode<TokenPayload>(token);

      if (!decoded.isAdmin) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};