import { getApiUrl, type ApiResponse, isSuccess } from "@src/shared/api"

export type TotalStats = {
  totalUsers: number
  totalCities: number
  totalCountries: number
  totalGuides: number
}

export async function fetchTotalStats(): Promise<TotalStats> {
  try {
    const res = await fetch(getApiUrl("/stats/total"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data: ApiResponse<TotalStats> = await res.json()

    if (!isSuccess(res, data)) {
      const error = data.errors?.[0] ?? {
        message: "Failed to fetch total stats",
      }
      throw new Error(error.message)
    }

    return {
      totalCities: data.data.totalCountries,
      totalCountries: data.data.totalCountries,
      totalGuides: data.data.totalGuides,
      totalUsers: data.data.totalUsers,
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error("Failed to fetch total stats due to an unknown error")
  }
}
