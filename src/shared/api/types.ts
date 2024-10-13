export type ApiError = {
  message: string
  name: string
  stack: string
}

export type ApiResponse<TData> = {
  data: TData
  errors: ApiError[] | null
}
