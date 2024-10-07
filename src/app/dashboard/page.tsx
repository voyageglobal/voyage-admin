import AppHeader from "@src/features/appHeader/AppHeader"
import TotalGuidesNumberWidget from "@src/widgets/TotalGuidesNumberWidget/TotalGuidesNumberWidget"

export type DashboardPageProps = {}

function DashboardPage(props: DashboardPageProps) {
  return (
    <section className={"mx-auto flex h-full flex-col"}>
      <AppHeader />
      <div className={"grid grid-cols-3 gap-4"}>
        <div className={"max-w-sm"}>
          <TotalGuidesNumberWidget />
        </div>
        <div>
          <TotalGuidesNumberWidget />
        </div>
        <div>
          <TotalGuidesNumberWidget />
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
