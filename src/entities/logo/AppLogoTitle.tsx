import { memo } from "react"
import cc from "classcat"
import { Typography } from "@src/shared/components"

export type AppLogoTitleProps = {}

function AppLogoTitle(props: AppLogoTitleProps) {
  return (
    <div
      className={cc(["flex h-full items-center text-lg font-bold uppercase"])}
      data-testid={"app-logo-title"}
    >
      <Typography variant={"h2"}>Voyage Admin</Typography>
    </div>
  )
}

export default memo(AppLogoTitle)
