const BASE_API_URL = process.env.BASE_API_URL

export type EnvironmentVariables = {
  BASE_API_URL: string | undefined
  NEXTAUTH_URL: string | undefined
  NEXTAUTH_SECRET: string | undefined
}

export function getEnvironmentVariables(): EnvironmentVariables {
  return {
    BASE_API_URL: BASE_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  }
}
