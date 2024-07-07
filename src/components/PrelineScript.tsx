"use client"

import { usePathname } from "next/navigation"
import { FC, memo, useEffect } from "react"
import { type IStaticMethods } from "preline/preline"

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const PrelineScript: FC = (): null => {
  const pathname = usePathname()

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline")

      window?.HSStaticMethods?.autoInit()
    }

    loadPreline()
  }, [pathname])

  return null
}

export default memo(PrelineScript)
