import { memo } from "react"
import ProfileAvatar from "@src/entities/profile/ProfileAvatar/ProfileAvatar"
import AppLogo from "@src/entities/logo/AppLogo"

export type AppHeaderProps = {}

function AppHeader(props: AppHeaderProps) {
  return (
    <div className={"navbar px-4 py-2"} data-testid={"app-header"}>
      <div className={"navbar-start h-full"}></div>
      <div className={"navbar-center h-full"}>
        <AppLogo hasTitle={true} />
      </div>
      <div className={"navbar-end h-full"}>
        <ProfileAvatar />
      </div>
    </div>
  )
}

export default memo(AppHeader)
