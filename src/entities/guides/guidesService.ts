import {
  type ApiResponsePaginated,
  appendSearchParams,
  getApiUrl,
  isSuccess,
} from "@src/shared/api"
import { type Guide } from "./types"

export const DEFAULT_GUIDE_PAGE_SIZE = 2
export const DEFAULT_PAGE = 1
export const DEFAULT_ORDER_BY = "createdAt"
export const DEFAULT_ORDER_DIRECTION = "desc"
export const DEFAULT_SEARCH_STRING = ""

export type FetchGuidesResponse = ApiResponsePaginated<Guide>
export type FetchGuidesParams = {
  page?: number
  pageSize?: number
  orderBy?: string
  orderDirection?: "asc" | "desc"
  searchString?: string
}

export async function fetchGuides(
  params: FetchGuidesParams = {},
): Promise<FetchGuidesResponse["data"]> {
  // TODO: Implement runtime validation for params
  const {
    page = DEFAULT_PAGE,
    pageSize = DEFAULT_GUIDE_PAGE_SIZE,
    orderBy = DEFAULT_ORDER_BY,
    orderDirection = DEFAULT_ORDER_DIRECTION,
    searchString = DEFAULT_SEARCH_STRING,
  } = params ?? {}

  const url = getApiUrl("/guides")
  const fullUrl = appendSearchParams(url, {
    page: page.toString(),
    pageSize: pageSize.toString(),
    orderBy,
    orderDirection,
    searchString,
  })

  try {
    const res = await fetch(fullUrl, {
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
