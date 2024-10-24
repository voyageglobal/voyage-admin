import type { Metadata } from "next"
import { type PropsWithChildren } from "react"
import { body1, heading1 } from "@src/shared/fonts"
import "./globals.css"
import { Providers } from "@src/app/Providers"

export const metadata: Metadata = {
  title: "Voyage Admin",
  description: "Voyage Admin",
}

export type RootLayoutProps = PropsWithChildren<{}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${heading1.variable} ${body1.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
