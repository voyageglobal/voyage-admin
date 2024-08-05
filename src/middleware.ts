import { type MiddlewareConfig } from "next/server"
import { withAuth } from "next-auth/middleware"

export const config: MiddlewareConfig = {
  matcher: [
    "/dashboard/:path*", // Match all paths inside /dashboard
  ],
}

export default withAuth(async function middleware() {}, {
  callbacks: {
    authorized: async ({ token }) => {
      // If token is present, the user is authorized
      const hasDecodedToken = !!token

      return hasDecodedToken
    },
  },
})
