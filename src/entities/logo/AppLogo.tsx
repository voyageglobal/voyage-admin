import React, { memo } from "react"
import AppLogoImage from "@src/entities/logo/AppLogoImage"
import AppLogoTitle from "@src/entities/logo/AppLogoTitle"

export type AppLogoProps = {
  size?: "small" | "medium" | "large"
  hasTitle?: boolean
}

function AppLogo(props: AppLogoProps) {
  const { size = "medium", hasTitle = false } = props

  return (
    <div className={"flex h-full items-center"} data-testid={"app-logo"}>
      <AppLogoImage size={size} />
      {hasTitle && (
        <>
          <div
            className={"divider divider-neutral divider-horizontal mx-1 py-2"}
          />
          <AppLogoTitle />
        </>
      )}
    </div>
  )
}

export default memo(AppLogo)
