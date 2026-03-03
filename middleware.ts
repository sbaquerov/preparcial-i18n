import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"] as const;
type Locale = (typeof locales)[number];

function detectLocale(request: NextRequest): Locale {
  const al = (request.headers.get("accept-language") || "").toLowerCase();
  return al.includes("en") ? "en" : "es";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find((l) => pathname.startsWith(`/${l}`));

  if (pathnameLocale) {
    const res = NextResponse.next();
    res.cookies.set("locale", pathnameLocale, { path: "/" });
    return res;
  }

  const cookieLocale = request.cookies.get("locale")?.value as Locale | undefined;
  const locale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : detectLocale(request);

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};