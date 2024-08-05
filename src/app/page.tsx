import { redirect } from "next/navigation"
import { ROUTES } from "@src/shared/routes"

export default async function Root() {
  // Redirect to the dashboard page in any case
  redirect(ROUTES.DASHBOARD)

  return (
    <main>
      <p className={"prose text-4xl dark:text-white"}>Root</p>
    </main>
  )
}
