import { type HeaderGroup } from "@tanstack/table-core"
import { flexRender } from "@tanstack/react-table"

export type TableFooterProps<TData> = {
  footerGroups: HeaderGroup<TData>[] | undefined
}

function DataTableFooter<TData>(props: TableFooterProps<TData>) {
  const { footerGroups } = props

  if (!footerGroups) {
    return null
  }

  return (
    <tfoot data-testid={"table-footer"}>
      {footerGroups.map(footerGroup => (
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
  )
}

export default DataTableFooter
