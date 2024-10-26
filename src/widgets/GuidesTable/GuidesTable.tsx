"use client"
import { memo, useMemo } from "react"
import DataTable from "@src/features/dataTable/DataTable"
import { useGuidesTableData } from "@src/features/guides/useGuidesTableData/useGuidesTableData"
import { DataTablePaginationState } from "@src/features/dataTable/DataTablePagination"

export type GuidesTableProps = {}

function GuidesTable(props: GuidesTableProps) {
  const { table, isLoading, currentPage, total } = useGuidesTableData()

  const pagination: DataTablePaginationState = useMemo(() => {
    return {
      currentPage: table.getState().pagination.pageIndex + 1,
      totalPages: total,
      onFirstClick: () => table.firstPage(),
      onNextClick: () => table.nextPage(),
      onPrevClick: () => table.previousPage(),
      onLastClick: () => table.lastPage(),
    }
  }, [table, total])

  if (isLoading) {
    // TODO: Implement proper loading state
    return "Loading..."
  }

  return (
    <div className={"p-4"} data-testid={"guides-table"}>
      <DataTable table={table} pagination={pagination} />
    </div>
  )
}

export default memo(GuidesTable)
