import { type MiddlewareConfig, type NextRequest } from "next/server"
import { ROUTES } from "@src/shared/routes"

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value
  const isLoginPage = request.nextUrl.pathname.startsWith(ROUTES.LOGIN)
  const isHomePage = request.nextUrl.pathname.startsWith(ROUTES.DASHBOARD)

  if (currentUser && !isHomePage) {
    return Response.redirect(new URL(ROUTES.DASHBOARD, request.url))
  }

  if (!currentUser && !isLoginPage) {
    return Response.redirect(new URL(ROUTES.LOGIN, request.url))
  }
}

export const config: MiddlewareConfig = {
  matcher: [
    // "/((?!api|_next/static|_next/image|.*\\.png$).*)"
    "/dashboard/:path*",
  ],
}
