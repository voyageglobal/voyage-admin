"use client"
import { memo, useMemo, useState } from "react"
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import DataTable from "@src/features/dataTable/DataTable"

export type GuidesTableProps = {}

type GuideTableDataModel = {
  id: string
  title: string
  author: string
  createdAt: string
  updatedAt: string
}

const mockGuides: GuideTableDataModel[] = [
  {
    id: "1",
    title: "Guide 1",
    author: "Test User",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
  {
    id: "2",
    title: "Guide 2",
    author: "Test User",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
  {
    id: "3",
    title: "Guide 3",
    author: "Test User 2",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
]

const columnHelper = createColumnHelper<GuideTableDataModel>()

function GuidesTable(props: GuidesTableProps) {
  const [data, setData] = useState<GuideTableDataModel[]>(mockGuides)

  const columns = useMemo(() => {
    return [
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
  }, [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel<GuideTableDataModel>(),
  })

  return (
    <div className={"p-4"} data-testid={"guides-table"}>
      <DataTable table={table} />
    </div>
  )
}

export default memo(GuidesTable)
