"use client"
import { memo, useMemo } from "react"
import DataTable from "@src/features/dataTable/DataTable"
import { useGuidesTable } from "@src/features/guides/useGuidesTable/useGuidesTable"
import { type DataTablePaginationState } from "@src/features/dataTable/DataTablePagination"

export type GuidesTableProps = {}

function GuidesTable(props: GuidesTableProps) {
  const { table, isLoading } = useGuidesTable()
  const { pagination: tablePagination } = table.getState()
  const totalPages = table.getPageCount()

  const pagination: DataTablePaginationState = useMemo(() => {
    return {
      currentPage: tablePagination.pageIndex + 1,
      totalPages: totalPages,
      onFirstClick: () => table.firstPage(),
      onNextClick: () => table.nextPage(),
      onPrevClick: () => table.previousPage(),
      onLastClick: () => table.lastPage(),
    }
  }, [table, tablePagination.pageIndex, totalPages])

  if (isLoading) {
    // TODO: Implement proper loading state
    return "Loading..."
  }

  return (
    <div className={"py-4"} data-testid={"guides-table"}>
      <DataTable table={table} pagination={pagination} />
    </div>
  )
}

export default memo(GuidesTable)
