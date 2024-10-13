import { createSingleNumberWidget } from "@src/features/singleNumberWidget/createSingleNumberWidget"
import * as statsService from "@src/features/stats/statsService"

const TotalCitiesNumberWidget = createSingleNumberWidget({
  icon: "🌆",
  title: "Total cities",
  subtitle: "Total number of cities in the system",
  widgetDataFetcher: () => statsService.fetchTotalStats(),
  widgetDataSelector: data => data.totalCities,
})

export default TotalCitiesNumberWidget