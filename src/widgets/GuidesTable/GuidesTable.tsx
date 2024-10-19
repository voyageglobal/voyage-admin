"use client"
import { memo, useMemo, useState } from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

export type GuidesTableProps = {}

type Guide = {
  id: string
  title: string
  author: string
  createdAt: string
  updatedAt: string
}

const mockGuides: Guide[] = [
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
]

const columnHelper = createColumnHelper<Guide>()

function GuidesTable(props: GuidesTableProps) {
  const [data, setData] = useState<Guide[]>(mockGuides)

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
    getCoreRowModel: getCoreRowModel<Guide>(),
  })

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}

export default memo(GuidesTable)
