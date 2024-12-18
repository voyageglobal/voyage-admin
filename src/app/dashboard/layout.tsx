import type { Metadata } from "next"
import { type ReactNode } from "react"
import { body1, heading1 } from "@src/shared/fonts"
import AppHeader from "@src/features/appHeader/AppHeader"
import "../globals.css"
import DashboardSidebar from "@src/widgets/DashboardSidebar/DashboardSidebar"

export const metadata: Metadata = {
  title: "Voyage Admin | Dashboard",
  description: "Voyage Admin",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main
      className={`${heading1.variable} ${body1.variable} h-screen w-screen`}
    >
      <DashboardSidebar>
        <AppHeader />
        <div>{children}</div>
      </DashboardSidebar>
    </main>
  )
}
