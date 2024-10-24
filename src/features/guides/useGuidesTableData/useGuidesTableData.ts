import { useGuides } from "@src/features/guides/useGuides/useGuides"
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useMemo } from "react"
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
  const { data, isLoading } = useGuides()

  const tableData = useMemo(() => {
    return transformGuideToGuideTableData(data ?? [])
  }, [data])

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel<GuideTableDataModel>(),
  })

  return {
    table,
    isLoading,
  }
}
