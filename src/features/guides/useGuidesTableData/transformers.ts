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
      author: DEFAULT_AUTHOR,
      createdAt: "",
      updatedAt: "",
    }

    return tableRow
  })

  return tableData
}
