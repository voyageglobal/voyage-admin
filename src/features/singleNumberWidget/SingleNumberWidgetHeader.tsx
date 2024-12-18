import { memo, type ReactElement } from "react"
import { Typography } from "@src/shared/components"

export type SingleNumberWidgetHeaderProps = {
  title: string | ReactElement
  subtitle?: string | ReactElement
  icon?: string | ReactElement
}

function SingleNumberWidgetHeader(props: SingleNumberWidgetHeaderProps) {
  const { title, subtitle, icon } = props

  return (
    <div className={"flex w-full flex-row items-center"}>
      {icon && <div className={"stat-figure flex flex-none"}>{icon}</div>}
      <div
        className={
          "flex w-full flex-initial flex-col items-center justify-center"
        }
      >
        <div className={"stat-title w-full text-center"}>
          <Typography variant={"widgetTitle"}>{title}</Typography>
        </div>
        <div className={"stat-desc w-full text-center"}>
          <Typography variant={"widgetSubtitle"}>{subtitle}</Typography>
        </div>
      </div>
    </div>
  )
}

export default memo(SingleNumberWidgetHeader)
