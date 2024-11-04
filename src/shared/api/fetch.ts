import { getEnvironmentVariables } from "@src/config/environment"
import { type ApiResponse } from "@src/shared/api/types"

export function getApiUrl(path: string): URL {
  const { BASE_API_URL } = getEnvironmentVariables()
  const apiPath = "/api" + path
  const url = new URL(apiPath, BASE_API_URL)

  return url
}

export function isSuccess(res: Response, data: ApiResponse<unknown>): boolean {
  const hasErrors = (data?.errors && data?.errors?.length > 0) || !res.ok
  return !hasErrors
}
