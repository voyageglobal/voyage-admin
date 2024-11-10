import { useGuides } from "@src/features/guides/useGuides/useGuides"
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import {
  transformClientSortingToServer,
  transformGuideToGuideTableData,
} from "./transformers"
import { type GuideTableDataModel } from "./types"
import { DEFAULT_PAGINATION_STATE } from "./constants"
import { isColumnSortable } from "./utils"

const columnHelper = createColumnHelper<GuideTableDataModel>()
const columns = [
  columnHelper.accessor("title", {
    id: "title",
    header: "Title",
    enableSorting: isColumnSortable("title"),
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("author", {
    id: "author",
    header: "Author",
    enableSorting: isColumnSortable("author"),
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("categories", {
    id: "categories",
    header: "Categories",
    enableSorting: false,
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("countries", {
    id: "countries",
    header: "Countries",
    enableSorting: isColumnSortable("countries"),
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("cities", {
    id: "cities",
    header: "Cities",
    enableSorting: isColumnSortable("cities"),
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Created At",
    enableSorting: isColumnSortable("createdAt"),
    cell: row => row.getValue(),
  }),
  columnHelper.accessor("updatedAt", {
    id: "updatedAt",
    header: "Updated At",
    enableSorting: isColumnSortable("updatedAt"),
    cell: row => row.getValue(),
  }),
]

export function useGuidesTable() {
  const [pagination, setPagination] = useState<PaginationState>(
    DEFAULT_PAGINATION_STATE,
  )
  const [sorting, setSorting] = useState<SortingState>([])
  const { orderBy, orderDirection } = transformClientSortingToServer(sorting)

  const { dataByPage, isLoading, total, fetchNextPage } = useGuides({
    pageSize: pagination.pageSize,
    orderBy,
    orderDirection,
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
    manualSorting: true,
    onSortingChange: setSorting,
    enableMultiSort: false,
    initialState: {
      pagination: DEFAULT_PAGINATION_STATE,
    },
    state: {
      pagination,
      sorting,
    },
  })

  return {
    table,
    isLoading,
  }
}
