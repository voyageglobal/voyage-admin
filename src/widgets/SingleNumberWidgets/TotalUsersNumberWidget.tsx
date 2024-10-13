import { createSingleNumberWidget } from "@src/features/singleNumberWidget/createSingleNumberWidget"
import * as statsService from "@src/features/stats/statsService"

const TotalUsersNumberWidget = createSingleNumberWidget({
  icon: "👥",
  title: "Total users",
  subtitle: "Total number of users in the system",
  widgetDataFetcher: () => statsService.fetchTotalStats(),
  widgetDataSelector: data => data.totalUsers,
})

export default TotalUsersNumberWidget
