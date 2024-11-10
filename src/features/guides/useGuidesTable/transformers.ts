import { type Guide } from "@src/entities/guides"
import { type SortingState } from "@tanstack/react-table"
import { type GuideTableDataModel } from "./types"
import { DEFAULT_AUTHOR } from "./constants"
import { getSortableColumnModelFieldName } from "@src/features/guides/useGuidesTable/utils"
import {
  DEFAULT_ORDER_BY,
  DEFAULT_ORDER_DIRECTION,
} from "@src/entities/guides/constants"

export function transformGuideToGuideTableData(
  guides: Guide[],
): GuideTableDataModel[] {
  const tableData = guides.map<GuideTableDataModel>(guide => {
    const tableRow: GuideTableDataModel = {
      id: guide.id,
      title: guide.name,
      visitedDateStart: guide.visitedDateStart,
      visitedDateEnd: guide.visitedDateEnd,
      countries: guide.countries.map(country => country.name).join(", "),
      cities: guide.cities.map(city => city.name).join(", "),
      categories: guide.categories.map(category => category.name).join(", "),
      // TODO: Fill in these fields later
      author: DEFAULT_AUTHOR,
      createdAt: "",
      updatedAt: "",
    }

    return tableRow
  })

  return tableData
}

export function transformClientSortingToServer(sorting: SortingState): {
  orderBy: string
  orderDirection: "asc" | "desc"
} {
  const sort = sorting[0]

  if (!sort) {
    return {
      orderBy: DEFAULT_ORDER_BY,
      orderDirection: DEFAULT_ORDER_DIRECTION,
    }
  }

  const orderDirection = sort.desc ? "desc" : "asc"
  const columnName = sort.id
  const orderBy =
    getSortableColumnModelFieldName(columnName) || DEFAULT_ORDER_BY

  return {
    orderBy,
    orderDirection,
  }
}
