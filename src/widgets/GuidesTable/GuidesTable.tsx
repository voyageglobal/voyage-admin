"use client"
import { memo } from "react"
import DataTable from "@src/features/dataTable/DataTable"
import { useGuidesTableData } from "@src/features/guides/useGuidesTableData/useGuidesTableData"

export type GuidesTableProps = {}

function GuidesTable(props: GuidesTableProps) {
  const { table, isLoading } = useGuidesTableData()

  if (isLoading) {
    // TODO: Implement proper loading state
    return "Loading..."
  }

  return (
    <div className={"p-4"} data-testid={"guides-table"}>
      <DataTable table={table} />
    </div>
  )
}

export default memo(GuidesTable)
