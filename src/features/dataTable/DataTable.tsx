import { type Table } from "@tanstack/react-table"
import DataTableHeader from "@src/features/dataTable/DataTableHeader"
import DataTableBody from "@src/features/dataTable/DataTableBody"
import DataTableFooter from "@src/features/dataTable/DataTableFooter"
import { useMemo } from "react"

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
    <table className={"table"}>
      <DataTableHeader headerGroups={headerGroups} />
      <DataTableBody rows={rows} />
      <DataTableFooter footerGroups={footerGroups} />
    </table>
  )
}

export default DataTable
