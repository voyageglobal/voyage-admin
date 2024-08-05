import NextAuth, { type User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { ROUTES } from "@src/shared/routes"
import { signinService } from "@src/entities/signin"

export type ExtendedUser = User & {
  accessToken: string | null
  refreshToken: string | null
}

const SESSION_MAX_AGE = 7 * 24 * 60 * 60 // 7 days

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: SESSION_MAX_AGE,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials): Promise<ExtendedUser | null> => {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        try {
          const authData = await signinService.signin({
            username: credentials.username,
            password: credentials.password,
          })

          const user: ExtendedUser = {
            name: authData.username,
            image: "",
            email: "",
            id: authData.username,
            accessToken: authData.accessToken,
            refreshToken: authData.refreshToken,
          }

          return user
        } catch (error) {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: ROUTES.LOGIN,
  },
})

export { handler as GET, handler as POST }
