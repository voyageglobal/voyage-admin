"use client"
import { type Header } from "@tanstack/table-core"
import { flexRender } from "@tanstack/react-table"
import cc from "classcat"
import { useState } from "react"

const SORT_ICON_MAP = {
  asc: "▲",
  desc: "▼",
} as const

export type DataTableHeaderCellProps<TData> = {
  header: Header<TData, unknown>
}

function DataTableHeaderCell<TData>(props: DataTableHeaderCellProps<TData>) {
  const { header } = props

  const [canSortBeVisible, setCanSortBeVisible] = useState(false)

  const isSortable = header.column.getCanSort()
  const onSort = header.column.getToggleSortingHandler()
  const sortOrder = header.column.getIsSorted()
  const nextSortOrder = header.column.getNextSortingOrder()

  const isNotSorted = !sortOrder
  const isSorted = !!sortOrder
  const isSortControlVisible = (isNotSorted && canSortBeVisible) || isSorted

  const ariaLabel = !nextSortOrder
    ? "Reset sort"
    : `Sort table by "${header.column.columnDef.header}" field in ${nextSortOrder === "asc" ? "ascending" : "descending"} order`

  return (
    <th
      onMouseEnter={() => setCanSortBeVisible(true)}
      onMouseLeave={() => setCanSortBeVisible(false)}
    >
      {header.isPlaceholder ? null : (
        <div className={"flex w-full items-center justify-between"}>
          {flexRender(header.column.columnDef.header, header.getContext())}
          {isSortable && (
            <button
              onClick={onSort}
              className={cc([
                !isSortControlVisible && "opacity-0",
                isSortControlVisible && "opacity-100",
                "btn btn-ghost btn-xs focus-within:opacity-100",
              ])}
              aria-label={ariaLabel}
              aria-live={"polite"}
              data-testid={"sort-button"}
            >
              {sortOrder && SORT_ICON_MAP[sortOrder]}
              {!sortOrder && nextSortOrder && SORT_ICON_MAP[nextSortOrder]}
            </button>
          )}
        </div>
      )}
    </th>
  )
}

export default DataTableHeaderCell
