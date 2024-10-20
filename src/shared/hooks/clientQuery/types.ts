export type QueryResult<TData> = {
  data: TData | null
  error: Error | null
  isLoading: boolean
}
