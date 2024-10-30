import AppHeader from "@src/features/appHeader/AppHeader"
import TotalGuidesNumberWidget from "@src/widgets/SingleNumberWidgets/TotalGuidesNumberWidget"
import TotalUsersNumberWidget from "@src/widgets/SingleNumberWidgets/TotalUsersNumberWidget"
import TotalCitiesNumberWidget from "@src/widgets/SingleNumberWidgets/TotalCitiesNumberWidget"
import TotalCountriesNumberWidget from "@src/widgets/SingleNumberWidgets/TotalCountriesNumberWidget"

export type DashboardPageProps = {}

export default async function DashboardPage(props: DashboardPageProps) {
  return (
    <section className={"mx-auto flex h-full flex-col"}>
      <div className={"grid grid-cols-2 gap-6 pt-6"}>
        <div>
          <TotalGuidesNumberWidget />
        </div>
        <div>
          <TotalUsersNumberWidget />
        </div>
        <div>
          <TotalCitiesNumberWidget />
        </div>
        <div>
          <TotalCountriesNumberWidget />
        </div>
      </div>
    </section>
  )
}
