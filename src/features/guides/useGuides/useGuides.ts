import { useInfiniteQuery } from "@tanstack/react-query"
import { type Guide, guidesService } from "@src/entities/guides"
import { type PaginatedQueryResult } from "@src/shared/hooks/clientQuery"
import { useCallback, useMemo } from "react"
import {
  type FetchGuidesParams,
  DEFAULT_PAGE,
  DEFAULT_GUIDE_PAGE_SIZE,
  DEFAULT_ORDER_BY,
  DEFAULT_ORDER_DIRECTION,
  DEFAULT_SEARCH_STRING,
} from "@src/entities/guides"

export const GUIDES_QUERY_KEY = "guides"

export type UseGuidesParams = Pick<
  FetchGuidesParams,
  "orderBy" | "orderDirection" | "pageSize" | "searchString"
>

export function useGuides(
  params: UseGuidesParams = {},
): PaginatedQueryResult<Guide> {
  const {
    pageSize = DEFAULT_GUIDE_PAGE_SIZE,
    orderBy = DEFAULT_ORDER_BY,
    orderDirection = DEFAULT_ORDER_DIRECTION,
    searchString = DEFAULT_SEARCH_STRING,
  } = params ?? {}

  const {
    fetchNextPage: _fetchNextPage,
    fetchPreviousPage: _fetchPreviousPage,
    hasNextPage,
    error,
    data,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [GUIDES_QUERY_KEY, searchString, orderBy, orderDirection],
    queryFn: ({ pageParam }) =>
      guidesService.fetchGuides({
        page: pageParam,
        pageSize,
        orderBy,
        orderDirection,
        searchString,
      }),
    initialPageParam: DEFAULT_PAGE,
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams,
    ) => {
      return allPageParams.length > 1 ? allPageParams[0] : undefined
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined
    },
  })

  const { items, total, currentPage, dataByPage } = useMemo(() => {
    const pages = data?.pages || []

    const dataByPage = pages.map(page => page.items)
    const items: Guide[] = pages.flatMap(page => page.items)

    const lastPageIndex = pages.length - 1
    const totalItems = pages?.[lastPageIndex]?.total ?? 0

    return {
      items,
      dataByPage,
      currentPage: pages.length <= 0 ? DEFAULT_PAGE : pages.length,
      total: totalItems,
    }
  }, [data?.pages])

  const fetchNextPage = useCallback<
    PaginatedQueryResult<Guide>["fetchNextPage"]
  >(
    ({ page }) => {
      return _fetchNextPage()
    },
    [_fetchNextPage],
  )

  const fetchPreviousPage = useCallback<
    PaginatedQueryResult<Guide>["fetchPrevPage"]
  >(
    ({ page }) => {
      return _fetchPreviousPage()
    },
    [_fetchPreviousPage],
  )

  return {
    data: items,
    dataByPage,
    isLoading: isLoading,
    error: error || null,
    total,
    currentPage: currentPage,
    pageSize,
    hasMore: hasNextPage,
    fetchNextPage: fetchNextPage,
    fetchPrevPage: fetchPreviousPage,
    isNextPageLoading: isFetchingNextPage,
  }
}
