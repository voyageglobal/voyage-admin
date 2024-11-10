import type { PaginationState } from "@tanstack/react-table"
import {
  DEFAULT_GUIDE_PAGE_SIZE,
  DEFAULT_PAGE,
} from "@src/entities/guides/constants"
import type { GuideTableDataModel } from "@src/features/guides/useGuidesTable/types"
import { type Guide } from "@src/entities/guides"

export const DEFAULT_AUTHOR = "Unknown voyageur"

export const DEFAULT_PAGINATION_STATE: PaginationState = {
  pageIndex: DEFAULT_PAGE - 1,
  pageSize: DEFAULT_GUIDE_PAGE_SIZE,
} as const

export const SORTABLE_COLUMNS: Record<
  string,
  {
    modelFieldName: keyof Guide
  }
> = {
  id: {
    modelFieldName: "id",
  },
  title: {
    modelFieldName: "name",
  },
} satisfies {
  [key in keyof GuideTableDataModel]?: {
    modelFieldName: keyof Guide
  }
}
