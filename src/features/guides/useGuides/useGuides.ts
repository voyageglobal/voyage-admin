import { useInfiniteQuery } from "@tanstack/react-query"
import { type Guide, guidesService } from "@src/entities/guides"
import { type QueryResult } from "@src/shared/hooks/clientQuery"
import { useMemo } from "react"

export const GUIDES_QUERY_KEY = "guides"

export function useGuides(): QueryResult<Guide[]> {
  const result = useInfiniteQuery({
    queryKey: [GUIDES_QUERY_KEY],
    queryFn: async ({ pageParam }) => guidesService.fetchGuides(),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // TODO: Add pagination here once backend supports it
      return undefined
    },
  })

  const { items, total } = useMemo(() => {
    const pages = result.data?.pages || []
    const items: Guide[] = [] // TODO: Flatten pages here
    const totalItems = 0 // result.data?.total || 0

    return {
      items,
      total: totalItems,
    }
  }, [result.data?.pages])

  return {
    isLoading: result.isLoading,
    data: items,
    error: result.error || null,
  }
}
