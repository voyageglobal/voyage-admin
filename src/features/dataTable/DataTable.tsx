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

  const { rows } = table.getRowModel()

  const { footerGroups, headerGroups } = useMemo(() => {
    const headerGroups = table.getHeaderGroups()
    const footerGroups = table.getFooterGroups()

    return {
      headerGroups,
      footerGroups,
    }
  }, [table])

  return (
    <>
      <table className={"table table-pin-cols table-md"}>
        <DataTableHeader headerGroups={headerGroups} />
        <DataTableBody rows={rows} />
        <DataTableFooter footerGroups={footerGroups} />
      </table>
      <div className={"py-2"}>
        <DataTablePagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onNextClick={pagination.onNextClick}
          onLastClick={pagination.onLastClick}
          onFirstClick={pagination.onFirstClick}
          onPrevClick={pagination.onPrevClick}
        />
      </div>
    </>
  )
}

export default DataTable
