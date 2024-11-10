import type { ApiResponsePaginated } from "@src/shared/api"

export type GuideCategory = {
  key: string
  name: string
  imageUrl: string
}

export type GuideCity = {
  id: string
  name: string
}

export type GuideCountry = {
  id: string
  name: string
  flag: string
}

export type Guide = {
  id: string
  name: string
  text: string
  visitedDateStart: string
  visitedDateEnd: string
  categories: GuideCategory[]
  cities: GuideCity[]
  countries: GuideCountry[]
}

export type FetchGuidesResponse = ApiResponsePaginated<Guide>
export type FetchGuidesParams = {
  page?: number
  pageSize?: number
  orderBy?: string
  orderDirection?: "asc" | "desc"
  searchString?: string
}
