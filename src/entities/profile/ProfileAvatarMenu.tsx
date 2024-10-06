import { forwardRef, type LegacyRef, memo } from "react"
import SignOutMenuButton from "@src/features/signout/SignOutMenuButton"

export type ProfileAvatarMenuProps = {}

function ProfileAvatarMenu(
  props: ProfileAvatarMenuProps,
  ref: LegacyRef<HTMLUListElement>,
) {
  return (
    <ul
      ref={ref}
      className={
        "menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
      }
    >
      <li>
        <SignOutMenuButton />
      </li>
    </ul>
  )
}

export default memo(forwardRef<HTMLUListElement>(ProfileAvatarMenu))
