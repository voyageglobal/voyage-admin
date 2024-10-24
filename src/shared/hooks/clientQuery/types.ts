export type QueryResult<TData> = {
  data: TData | null
  error: Error | null
  isLoading: boolean
}

export type PaginatedQueryResult<TData> = QueryResult<TData[]> & {
  hasMore: boolean
  total: number
  fetchNextPage: () => void
  isNextPageLoading: boolean
}
