import { useMemo } from "react"
import { type Table } from "@tanstack/react-table"
import DataTableHeader from "./DataTableHeader"
import DataTableBody from "./DataTableBody"
import DataTableFooter from "./DataTableFooter"
import DataTablePagination, {
  type DataTablePaginationState,
} from "./DataTablePagination"

export type DataTableProps<TData> = {
  table: Table<TData>
  pagination: DataTablePaginationState
}

function DataTable<TData>(props: DataTableProps<TData>) {
  const { table, pagination } = props

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
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onNextClick={pagination.onNextClick}
        onLastClick={pagination.onLastClick}
        onFirstClick={pagination.onFirstClick}
        onPrevClick={pagination.onPrevClick}
      />
    </>
  )
}

export default DataTable
