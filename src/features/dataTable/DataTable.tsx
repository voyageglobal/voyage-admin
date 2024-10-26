import { useMemo } from "react"
import { type Table } from "@tanstack/react-table"
import DataTableHeader from "./DataTableHeader"
import DataTableBody from "./DataTableBody"
import DataTableFooter from "./DataTableFooter"
import DataTablePagination from "./DataTablePagination"

export type DataTableProps<TData> = {
  table: Table<TData>
}

function DataTable<TData>(props: DataTableProps<TData>) {
  const { table } = props

  const { rows, footerGroups, headerGroups } = useMemo(() => {
    const headerGroups = table.getHeaderGroups()
    const footerGroups = table.getFooterGroups()
    const rows = table.getRowModel().rows

    return {
      headerGroups,
      footerGroups,
      rows,
    }
  }, [table])

  return (
    <>
      <table className={"table table-pin-cols table-md"}>
        <DataTableHeader headerGroups={headerGroups} />
        <DataTableBody rows={rows} />
        <DataTableFooter footerGroups={footerGroups} />
      </table>
      <DataTablePagination
        currentPage={1}
        totalPages={2}
        onNextClick={() => {}}
        onPageClick={() => {}}
        onPrevClick={() => {}}
      />
    </>
  )
}

export default DataTable
