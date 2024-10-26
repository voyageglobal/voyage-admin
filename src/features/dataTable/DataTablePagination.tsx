import { memo } from "react"
import cc from "classcat"

export const DEFAULT_PAGES_TO_DISPLAY = 5

export type DataTablePaginationProps = {
  pagesToDisplay?: number
  currentPage: number
  totalPages: number

  onPrevClick: () => void
  onNextClick: () => void
  onPageClick: (page: number) => void
}

function DataTablePagination(props: DataTablePaginationProps) {
  const {
    pagesToDisplay: _pagesToDisplay = DEFAULT_PAGES_TO_DISPLAY,
    onPrevClick,
    onNextClick,
    currentPage,
    totalPages,
    onPageClick,
  } = props

  const pagesToDisplay = Math.min(_pagesToDisplay, totalPages)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const isPrevDisabled = isFirstPage
  const isNextDisabled = isLastPage

  const handlePrevClick = () => {
    if (isPrevDisabled) return
    onPrevClick()
  }

  const handleNextClick = () => {
    if (isNextDisabled) return
    onNextClick()
  }

  if (pagesToDisplay <= 0) {
    return null
  }

  return (
    <div className={"flex w-full justify-end"}>
      <div className={"join"} data-testid={"data-table-pagination"}>
        <button
          key={"prev-button"}
          onClick={handlePrevClick}
          className={cc(["btn join-item", { "btn-disabled": isPrevDisabled }])}
        >
          «
        </button>
        {[...Array(pagesToDisplay)].map((_, index) => {
          const isCurrentPage = index + 1 === props.currentPage
          const page = index + 1

          return (
            <button
              key={index}
              onClick={() => onPageClick(page)}
              className={cc(["btn join-item", { "btn-active": isCurrentPage }])}
            >
              {index + 1}
            </button>
          )
        })}
        <button
          key={"next-button"}
          onClick={handleNextClick}
          className={cc([
            "btn join-item",
            {
              "btn-disabled": isNextDisabled,
            },
          ])}
        >
          »
        </button>
      </div>
    </div>
  )
}

export default memo(DataTablePagination)
