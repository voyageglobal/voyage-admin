"use client"
import Avatar from "@src/shared/components/Avatar/Avatar"
import { memo, useState } from "react"
import ProfileAvatarMenu from "@src/entities/profile/ProfileAvatarMenu"

export type ProfileAvatarProps = {
  imageUrl?: string | null
}

function ProfileAvatar(props: ProfileAvatarProps) {
  const { imageUrl } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={"dropdown dropdown-end"}>
      <button
        onClick={() => {
          setIsMenuOpen(prev => !prev)
        }}
        onBlur={() => setIsMenuOpen(false)}
        className={"btn btn-circle btn-ghost h-full w-auto"}
      >
        <Avatar imageUrl={imageUrl} size={"large"} />
      </button>
      {isMenuOpen && <ProfileAvatarMenu />}
    </div>
  )
}

export default memo(ProfileAvatar)
