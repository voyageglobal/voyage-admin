import { getEnvironmentVariables } from "@src/config/environment"
import { type ApiResponse } from "@src/shared/api/types"

export function getApiUrl(path: string): URL {
  return new URL(path, getEnvironmentVariables().BASE_API_URL)
}

export function isSuccess(res: Response, data: ApiResponse<unknown>): boolean {
  const hasErrors = (data?.errors && data?.errors?.length > 0) || !res.ok
  return !hasErrors
}
