import { memo } from "react"
import cc from "classcat"

export type DataTablePaginationState = {
  currentPage: number
  totalPages: number
  onFirstClick: () => void
  onPrevClick: () => void
  onNextClick: () => void
  onLastClick: () => void
}

export type DataTablePaginationProps = {} & DataTablePaginationState

function DataTablePagination(props: DataTablePaginationProps) {
  const {
    onPrevClick,
    onNextClick,
    onLastClick,
    onFirstClick,
    currentPage,
    totalPages,
  } = props

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const isPrevDisabled = isFirstPage
  const isNextDisabled = isLastPage
  const isFirstDisabled = isFirstPage
  const isLastDisabled = isLastPage

  const handlePrevClick = () => {
    if (isPrevDisabled) return
    onPrevClick()
  }

  const handleNextClick = () => {
    if (isNextDisabled) return
    onNextClick()
  }

  const handleFirstClick = () => {
    if (isFirstDisabled) return
    onFirstClick()
  }

  const handleLastClick = () => {
    if (isLastDisabled) return
    onLastClick()
  }

  if (totalPages <= 0) {
    return null
  }

  return (
    <div className={"flex w-full justify-end"}>
      <div className={"join"} data-testid={"data-table-pagination"}>
        <button
          onClick={handleFirstClick}
          className={cc(["btn join-item", { "btn-disabled": isPrevDisabled }])}
          aria-label={"Go to first page of the table"}
        >
          {"<<"}
        </button>
        <button
          onClick={handlePrevClick}
          className={cc(["btn join-item", { "btn-disabled": isPrevDisabled }])}
          aria-label={"Go to previous page of the table"}
        >
          {"<"}
        </button>
        <span className={"btn join-item no-animation"}>{currentPage}</span>
        <button
          onClick={handleNextClick}
          className={cc([
            "btn join-item",
            {
              "btn-disabled": isNextDisabled,
            },
          ])}
          aria-label={"Go to next page of the table"}
        >
          {">"}
        </button>
        <button
          onClick={handleLastClick}
          className={cc([
            "btn join-item",
            {
              "btn-disabled": isNextDisabled,
            },
          ])}
          aria-label={"Go to last page of the table"}
        >
          {">>"}
        </button>
      </div>
    </div>
  )
}

export default memo(DataTablePagination)
