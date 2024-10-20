import type { Metadata } from "next"
import { type PropsWithChildren } from "react"
import { body1, heading1 } from "@src/shared/fonts"
import "./globals.css"
import QueryClientProvider from "@src/shared/providers/QueryClientProvider/QueryClientProvider"

export const metadata: Metadata = {
  title: "Voyage Admin",
  description: "Voyage Admin",
}

export type RootLayoutProps = PropsWithChildren<{}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <QueryClientProvider>
      <html lang="en">
        <body className={`${heading1.variable} ${body1.variable}`}>
          {children}
        </body>
      </html>
    </QueryClientProvider>
  )
}
