import { useGuides } from "@src/features/guides/useGuides/useGuides"
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  type PaginationState,
} from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { transformGuideToGuideTableData } from "./transformers"
import { type GuideTableDataModel } from "./types"
import {
  DEFAULT_GUIDE_PAGE_SIZE,
  DEFAULT_PAGE,
} from "@src/entities/guides/guidesService"

const columnHelper = createColumnHelper<GuideTableDataModel>()
const columns = [
  columnHelper.accessor("title", {
    id: "title",
    header: "Title",
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("author", {
    id: "author",
    header: "Author",
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("categories", {
    id: "categories",
    header: "Categories",
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("countries", {
    id: "countries",
    header: "Countries",
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("cities", {
    id: "cities",
    header: "Cities",
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Created At",
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("updatedAt", {
    id: "updatedAt",
    header: "Updated At",
    cell: row => row.getValue(),
  }),
]

export const DEFAULT_PAGINATION_STATE: PaginationState = {
  pageIndex: DEFAULT_PAGE - 1,
  pageSize: DEFAULT_GUIDE_PAGE_SIZE,
}

export function useGuidesTable() {
  const [pagination, setPagination] = useState<PaginationState>(
    DEFAULT_PAGINATION_STATE,
  )

  const { dataByPage, isLoading, total, fetchNextPage } = useGuides({
    pageSize: pagination.pageSize,
  })

  useEffect(
    function fetchPageIfPaginationChanged() {
      fetchNextPage({ page: pagination.pageIndex + 1 })
    },
    [fetchNextPage, pagination.pageIndex],
  )

  const tableData = useMemo(() => {
    const currentPageData = dataByPage?.[pagination.pageIndex] ?? []

    return transformGuideToGuideTableData(currentPageData ?? [])
  }, [dataByPage, pagination.pageIndex])

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel<GuideTableDataModel>(),
    rowCount: total,
    manualPagination: true,
    autoResetPageIndex: false,
    onPaginationChange: setPagination,
    initialState: {
      pagination: DEFAULT_PAGINATION_STATE,
    },
    state: {
      pagination,
    },
  })

  return {
    table,
    isLoading,
  }
}
