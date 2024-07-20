import type { Metadata } from "next"
import { type ReactNode } from "react"
import { PrelineScript } from "@src/shared/components"
import { body1, heading1 } from "@src/shared/fonts"

import "../globals.css"

export const metadata: Metadata = {
  title: "Voyage Admin | Login",
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${heading1.variable} ${body1.variable}`}>
        {children}
      </body>
      <PrelineScript />
    </html>
  )
}
