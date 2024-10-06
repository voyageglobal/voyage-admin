import AppHeader from "@src/features/appHeader/AppHeader"

export type DashboardPageProps = {}

function DashboardPage(props: DashboardPageProps) {
  return (
    <section className={"mx-auto flex h-full flex-col"}>
      <AppHeader />
      <div>Dashboard Page Content</div>
    </section>
  )
}

export default DashboardPage
