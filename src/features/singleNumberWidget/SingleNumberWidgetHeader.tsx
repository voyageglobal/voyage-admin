import { memo, type ReactElement } from "react"
import { Typography } from "@src/shared/components"

export type SingleNumberWidgetHeaderProps = {
  title: string | ReactElement
  subtitle?: string | ReactElement
  icon?: ReactElement
}

function SingleNumberWidgetHeader(props: SingleNumberWidgetHeaderProps) {
  const { title, subtitle, icon } = props

  return (
    <div className={"flex w-full flex-row items-center"}>
      {icon && <div className={"flex flex-none"}>{icon}</div>}
      <div
        className={
          "flex w-full flex-initial flex-col items-center justify-center"
        }
      >
        <div className={"w-full text-center"}>
          <Typography variant={"widgetTitle"}>{title}</Typography>
        </div>
        <div className={"w-full text-center"}>
          <Typography variant={"widgetSubtitle"}>{subtitle}</Typography>
        </div>
      </div>
    </div>
  )
}

export default memo(SingleNumberWidgetHeader)
