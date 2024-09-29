import { memo } from "react"

export type ProfileAvatarMenuProps = {}

function ProfileAvatarMenu(props: ProfileAvatarMenuProps) {
  return (
    <ul
      className={
        "menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
      }
    >
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Logout</a>
      </li>
    </ul>
  )
}

export default memo(ProfileAvatarMenu)
