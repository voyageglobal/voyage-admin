"use client"
import Avatar from "@src/shared/components/Avatar/Avatar"
import { memo, useRef, useState } from "react"
import ProfileAvatarMenu from "@src/entities/profile/ProfileAvatarMenu"

export type ProfileAvatarProps = {
  imageUrl?: string | null
}

function ProfileAvatar(props: ProfileAvatarProps) {
  const { imageUrl } = props

  const menuRef = useRef<HTMLUListElement>(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div
      className={
        "dropdown dropdown-end focus-within:ring-2 focus-within:ring-black"
      }
    >
      <button
        onClick={() => {
          setIsMenuOpen(prev => !prev)
        }}
        onBlur={event => {
          const menuContainer = menuRef.current

          if (menuContainer) {
            const isFocusOutsideMenu = !menuContainer.contains(
              event.relatedTarget,
            )
            const isFocusOutsideButton = !event.currentTarget.contains(
              event.relatedTarget,
            )

            if (isFocusOutsideButton && isFocusOutsideMenu) {
              setIsMenuOpen(false)
            }
          }
        }}
        className={"btn btn-circle btn-ghost h-full w-auto"}
        aria-label={"Open profile menu"}
      >
        <Avatar imageUrl={imageUrl} size={"large"} />
      </button>
      {isMenuOpen && <ProfileAvatarMenu ref={menuRef} />}
    </div>
  )
}

export default memo(ProfileAvatar)
