export type ApiError = {
  message: string
  name: string
  stack: string
}

export type ApiResponse<TData> = {
  data: TData
  errors: ApiError[] | null
}

export type PaginatedData<TData> = {
  items: TData[]
  hasMore: boolean
  total: number
  page: number
  pageSize: number
}

export type ApiResponsePaginated<TData> = ApiResponse<PaginatedData<TData>>
