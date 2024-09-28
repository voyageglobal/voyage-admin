import Avatar from "@src/shared/components/Avatar/Avatar"
import { memo } from "react"

export type ProfileAvatarProps = {
  imageUrl?: string | null
}

function ProfileAvatar(props: ProfileAvatarProps) {
  const { imageUrl } = props

  return (
    <button className={"btn btn-circle btn-ghost"}>
      <Avatar imageUrl={imageUrl} size={"large"} />
    </button>
  )
}

export default memo(ProfileAvatar)
