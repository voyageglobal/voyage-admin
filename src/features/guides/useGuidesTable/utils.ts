import { type GuideTableDataModel } from "@src/features/guides/useGuidesTable/types"
import { SORTABLE_COLUMNS } from "@src/features/guides/useGuidesTable/constants"
import { type Guide } from "@src/entities/guides"

export function isColumnSortable(
  columnName: keyof GuideTableDataModel,
): boolean {
  return SORTABLE_COLUMNS[columnName] !== undefined
}

export function getSortableColumnModelFieldName(
  columnName: string,
): keyof Guide | null {
  const sortableColumn = SORTABLE_COLUMNS[columnName]

  if (!sortableColumn) {
    return null
  }

  return sortableColumn.modelFieldName
}
