import { createSingleNumberWidget } from "@src/features/singleNumberWidget/createSingleNumberWidget"
import * as statsService from "@src/entities/stats/statsService"

const TotalGuidesNumberWidget = createSingleNumberWidget({
  icon: "📚",
  title: "Total guides",
  subtitle: "Total number of guides in the system",
  widgetDataFetcher: () => statsService.fetchTotalStats(),
  widgetDataSelector: data => data.totalGuides,
})

export default TotalGuidesNumberWidget
