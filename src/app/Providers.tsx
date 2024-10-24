import { PropsWithChildren } from "react"
import QueryClientProvider from "@src/shared/providers/QueryClientProvider/QueryClientProvider"

export function Providers({ children }: PropsWithChildren<{}>) {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
