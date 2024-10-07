import { memo, type ReactElement } from "react"
import SingleNumberWidgetHeader from "./SingleNumberWidgetHeader"
import SingleNumberWidgetContent from "./SingleNumberWidgetContent"

export type SingleNumberWidgetProps = {
  data: number | string
  title: string | ReactElement
  subtitle?: string | ReactElement
  icon?: ReactElement
}

function SingleNumberWidget(props: SingleNumberWidgetProps) {
  const { data, title, subtitle, icon } = props

  return (
    <div
      className={
        "card h-full w-full bg-base-100 p-4 text-primary-content shadow-xl"
      }
    >
      <div className={"flex h-full w-full flex-col"}>
        <SingleNumberWidgetHeader
          title={title}
          subtitle={subtitle}
          icon={icon}
        />
        <SingleNumberWidgetContent>{data}</SingleNumberWidgetContent>
      </div>
    </div>
  )
}

export default memo(SingleNumberWidget)
