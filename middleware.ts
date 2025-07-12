import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import CreateMiddleware from "next-intl/middleware";
import { routing } from "./i18next/routing";

const intlMiddleware = CreateMiddleware(routing);

const isProtectedRoute = createRouteMatcher(["/:lng/courses"]);

export default clerkMiddleware((auth, req) => {
  const intlRequest = intlMiddleware(req);
  if (isProtectedRoute(req)) {
    auth.protect;
  }
  return intlRequest;
});

export const config = {
  matcher: ["/(ru|uz|en|tr)/((?!api|_next|.*\\..*).*)"],
};
