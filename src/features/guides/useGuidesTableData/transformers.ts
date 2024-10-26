import { type Guide } from "@src/entities/guides"
import { type GuideTableDataModel } from "./types"

export const DEFAULT_AUTHOR = "Unknown voyageur"

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
