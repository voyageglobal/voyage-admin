import { type ApiResponse, getApiUrl, isSuccess } from "@src/shared/api"
import { type Guide } from "./types"

export type FetchGuidesResponse = ApiResponse<Guide[]>

export async function fetchGuides(): Promise<FetchGuidesResponse["data"]> {
  const url = getApiUrl("/guides")

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data: FetchGuidesResponse = await res.json()

    if (!isSuccess(res, data)) {
      const error = data.errors?.[0] ?? { message: "Failed to fetch guides" }
      throw new Error(error?.message)
    }

    return data.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error("Failed to fetch guides due to an unknown error")
  }
}
