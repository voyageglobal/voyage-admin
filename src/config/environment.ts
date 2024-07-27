const BASE_URL = process.env.BASE_API_URL

export type EnvironmentVariables = {
  BASE_URL: string | undefined
}

export function getEnvironmentVariables(): EnvironmentVariables {
  return {
    BASE_URL,
  }
}
