import { flexRender, type Row } from "@tanstack/react-table"

export type TableBodyProps<TData> = {
  rows: Row<TData>[]
}

function DataTableBody<TData>(props: TableBodyProps<TData>) {
  const { rows } = props

  return (
    <tbody data-testid={"table-body"}>
      {rows.map(row => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => {
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default DataTableBody
