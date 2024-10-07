import { memo, type PropsWithChildren } from "react"
import { Typography } from "@src/shared/components"

export type SingleNumberWidgetContentProps = PropsWithChildren<{}>

function SingleNumberWidgetContent(props: SingleNumberWidgetContentProps) {
  const { children } = props

  return (
    <div
      className={"flex h-full w-full flex-col items-center justify-center p-2"}
    >
      <Typography variant={"widgetContent"}>{children}</Typography>
    </div>
  )
}

export default memo(SingleNumberWidgetContent)
