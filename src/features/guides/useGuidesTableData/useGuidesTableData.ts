import { useGuides } from "@src/features/guides/useGuides/useGuides"
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useCallback, useMemo } from "react"
import { transformGuideToGuideTableData } from "./transformers"
import { type GuideTableDataModel } from "./types"

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

export function useGuidesTableData() {
  const { data, isLoading, total, pageSize, currentPage, fetchNextPage } =
    useGuides()

  const tableData = useMemo(() => {
    return transformGuideToGuideTableData(data ?? [])
  }, [data])

  const handlePaginationChange = useCallback(() => {
    fetchNextPage({ page: currentPage + 1 })
  }, [currentPage, fetchNextPage])

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel<GuideTableDataModel>(),
    rowCount: total,
    debugTable: true,
    manualPagination: true,
    autoResetPageIndex: false,
    onPaginationChange: handlePaginationChange,
    state: {
      pagination: {
        pageIndex: currentPage - 1 || 0,
        pageSize: pageSize,
      },
    },
  })

  return {
    table,
    isLoading,
    currentPage,
    total,
  }
}
