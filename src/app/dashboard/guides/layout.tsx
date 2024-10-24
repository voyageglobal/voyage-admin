import type { Metadata } from "next"
import { type ReactNode } from "react"
import { body1, heading1 } from "@src/shared/fonts"

import "../../globals.css"

export const metadata: Metadata = {
  title: "Voyage Admin | Dashboard | Guides",
  description: "Voyage Admin",
}

export default function GuidesPageLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className={`${heading1.variable} ${body1.variable} `}>{children}</div>
  )
}
