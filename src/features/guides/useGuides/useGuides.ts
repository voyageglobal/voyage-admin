import { useInfiniteQuery } from "@tanstack/react-query"
import { type Guide, guidesService } from "@src/entities/guides"
import { type PaginatedQueryResult } from "@src/shared/hooks/clientQuery"
import { useMemo } from "react"
import {
  type FetchGuidesParams,
  DEFAULT_GUIDE_PAGE_SIZE,
  DEFAULT_ORDER_BY,
  DEFAULT_ORDER_DIRECTION,
  DEFAULT_SEARCH_STRING,
} from "@src/entities/guides/guidesService"

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
    fetchNextPage,
    hasNextPage,
    error,
    data,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [GUIDES_QUERY_KEY, searchString, orderBy, orderDirection],
    queryFn: async ({ pageParam }) =>
      guidesService.fetchGuides({
        page: pageParam,
        pageSize,
        orderBy,
        orderDirection,
        searchString,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined
    },
  })

  const { items, total } = useMemo(() => {
    const pages = data?.pages || []
    const items: Guide[] = pages.flatMap(page => page.items)
    const lastPageIndex = pages.length - 1
    const totalItems = data?.pages?.[lastPageIndex]?.total ?? 0

    return {
      items,
      total: totalItems,
    }
  }, [data?.pages])

  return {
    data: items,
    isLoading: isLoading,
    error: error || null,
    total,
    hasMore: hasNextPage,
    fetchNextPage: () => fetchNextPage(),
    isNextPageLoading: isFetchingNextPage,
  }
}
