import { memo } from "react"
import ProfileAvatar from "@src/entities/profile/ProfileAvatar/ProfileAvatar"

export type AppHeaderProps = {}

function AppHeader(props: AppHeaderProps) {
  return (
    <div className={"navbar"} data-testid={"app-header"}>
      <div className={"navbar-start"}></div>
      <div className={"navbar-center"}>Center</div>
      <div className={"navbar-end"}>
        <ProfileAvatar />
      </div>
    </div>
  )
}

export default memo(AppHeader)
