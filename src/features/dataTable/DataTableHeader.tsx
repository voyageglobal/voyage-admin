import { type HeaderGroup } from "@tanstack/table-core"
import DataTableHeaderCell from "@src/features/dataTable/DataTableHeaderCell"

export type TableHeaderProps<TData> = {
  headerGroups: HeaderGroup<TData>[]
}

function DataTableHeader<TData>(props: TableHeaderProps<TData>) {
  const { headerGroups } = props

  return (
    <thead data-testid={"table-header"}>
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return <DataTableHeaderCell key={header.id} header={header} />
          })}
        </tr>
      ))}
    </thead>
  )
}

export default DataTableHeader
