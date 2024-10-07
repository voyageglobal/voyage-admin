import { memo } from "react"
import SingleNumberWidget from "@src/features/singleNumberWidget/SingleNumberWidget"

export type TotalGuidesNumberWidgetProps = {}

function TotalGuidesNumberWidget(props: TotalGuidesNumberWidgetProps) {
  return (
    <SingleNumberWidget
      title={"Total users"}
      subtitle={"The number of registered users in the app"}
      data={10}
    />
  )
}

export default memo(TotalGuidesNumberWidget)
