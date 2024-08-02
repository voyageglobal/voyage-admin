import { getEnvironmentVariables } from "@src/config"

export function getApiUrl(path: string): URL {
  return new URL(path, getEnvironmentVariables().BASE_API_URL)
}
