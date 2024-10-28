export type QueryResult<TData> = {
  data: TData | null
  error: Error | null
  isLoading: boolean
}

export type PaginatedQueryResult<TData> = QueryResult<TData[]> & {
  dataByPage: TData[][]
  hasMore: boolean
  total: number
  currentPage: number
  pageSize: number
  fetchNextPage: ({ page }: { page: number }) => void
  fetchPrevPage: ({ page }: { page: number }) => void
  isNextPageLoading: boolean
}
