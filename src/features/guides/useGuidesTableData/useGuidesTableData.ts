import { useGuides } from "@src/features/guides/useGuides/useGuides"
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useMemo, useState } from "react"
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

export function useGuidesTableData() {
  const [pagination, setPagination] = useState({
    pageIndex: DEFAULT_PAGE - 1,
    pageSize: DEFAULT_GUIDE_PAGE_SIZE,
  })

  const { dataByPage, isLoading, total, fetchNextPage, fetchPrevPage } =
    useGuides({
      pageSize: pagination.pageSize,
    })

  const tableData = useMemo(() => {
    const currentPageData = dataByPage?.[pagination.pageIndex] ?? []
    console.log("currentPageData", currentPageData)
    return transformGuideToGuideTableData(currentPageData ?? [])
  }, [dataByPage, pagination.pageIndex])

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel<GuideTableDataModel>(),
    rowCount: total,
    manualPagination: true,
    autoResetPageIndex: false,
    onPaginationChange: newPagination => {
      console.log("newPagination", typeof newPagination)
      if (typeof newPagination !== "function") {
        if (newPagination.pageIndex !== pagination.pageIndex) {
          if (newPagination.pageIndex > pagination.pageIndex) {
            fetchNextPage({ page: newPagination.pageIndex + 1 })
          } else {
            fetchPrevPage({ page: newPagination.pageIndex + 1 })
          }
        }
      }

      return setPagination(newPagination)
    },
    initialState: {
      pagination: {
        pageIndex: DEFAULT_PAGE - 1,
        pageSize: DEFAULT_GUIDE_PAGE_SIZE,
      },
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
