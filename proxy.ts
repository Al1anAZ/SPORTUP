import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import config from "./config";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = config.PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("refreshToken")?.value;

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
