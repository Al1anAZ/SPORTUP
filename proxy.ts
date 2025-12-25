import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import config from "./config";
import { UserRole } from "./types/user";
import { decodeJwt } from "./utils/decode-jwt";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = config.PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtected) return NextResponse.next();

  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  const payload = decodeJwt(refreshToken);

  if (!payload) {
    const url = req.nextUrl.clone();
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  const isAdminRoute = config.ADMIN_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isAdminRoute && payload.role !== UserRole.ADMIN) {
    const url = req.nextUrl.clone();
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
