"use client"

import { type PropsWithChildren, useState } from "react"
import {
  type DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

export type QueryClientProviderProps = PropsWithChildren<{}>

const QUERY_CLIENT_DEFAULT_OPTIONS: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60 * 1,
  },
}

function ReactQueryClientProvider(props: QueryClientProviderProps) {
  const [queryClient] = useState(() => {
    // QueryClient is required to be initialized in state
    // to be stored on the client side
    return new QueryClient({
      defaultOptions: QUERY_CLIENT_DEFAULT_OPTIONS,
    })
  })

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default ReactQueryClientProvider
