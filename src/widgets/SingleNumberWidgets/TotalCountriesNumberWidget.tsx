import { createSingleNumberWidget } from "@src/features/singleNumberWidget/createSingleNumberWidget"
import * as statsService from "@src/features/stats/statsService"

const TotalCountriesNumberWidget = createSingleNumberWidget({
  icon: "🌍",
  title: "Total countries",
  subtitle: "Total number of countries in the system",
  widgetDataFetcher: () => statsService.fetchTotalStats(),
  widgetDataSelector: data => data.totalCountries,
})

export default TotalCountriesNumberWidget
