import { flexRender } from "@tanstack/react-table"
import { type HeaderGroup } from "@tanstack/table-core"

export type TableHeaderProps<TData> = {
  headerGroups: HeaderGroup<TData>[]
}

function DataTableHeader<TData>(props: TableHeaderProps<TData>) {
  const { headerGroups } = props

  return (
    <thead data-testid={"table-header"}>
      {headerGroups.map(headerGroup => (
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
  )
}

export default DataTableHeader
