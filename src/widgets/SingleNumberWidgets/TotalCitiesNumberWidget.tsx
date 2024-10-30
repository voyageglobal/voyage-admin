import { createSingleNumberWidget } from "@src/features/singleNumberWidget/createSingleNumberWidget"
import * as statsService from "@src/entities/stats/statsService"

const TotalCitiesNumberWidget = createSingleNumberWidget({
  icon: "🌆",
  title: "Total cities",
  subtitle: "Total number of cities associated with guides in the system",
  widgetDataFetcher: () => statsService.fetchTotalStats(),
  widgetDataSelector: data => data.totalCities,
})

export default TotalCitiesNumberWidget
