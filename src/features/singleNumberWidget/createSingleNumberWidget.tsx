import SingleNumberWidget from "./SingleNumberWidget"
import { type FC, memo, type ReactElement } from "react"

export type SingleNumberWidgetConfig<TData> = {
  title: string
  subtitle: string
  icon: string | ReactElement
  widgetDataFetcher: () => Promise<TData>
  widgetDataSelector: (data: TData) => number | string
}

export function createSingleNumberWidget<TData>(
  widgetConfig: SingleNumberWidgetConfig<TData>,
): FC {
  const wrapper: FC = async function SingleNumberWidgetWrapper() {
    const result = await widgetConfig.widgetDataFetcher()
    const widgetData = widgetConfig.widgetDataSelector(result)

    return (
      <SingleNumberWidget
        title={widgetConfig.title}
        subtitle={widgetConfig.subtitle}
        icon={widgetConfig.icon}
        data={widgetData}
      />
    )
  }
  wrapper.displayName = `SingleNumberWidget(${widgetConfig.title})`

  return memo(wrapper)
}
