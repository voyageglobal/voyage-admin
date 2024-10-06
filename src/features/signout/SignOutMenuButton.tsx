import { memo } from "react"
import { signOut } from "next-auth/react"

export type SignOutMenuButtonProps = {}

function SignOutMenuButton(props: SignOutMenuButtonProps) {
  return (
    <button
      onClick={() => {
        signOut()
      }}
      className={"btn btn-ghost"}
    >
      Logout
    </button>
  )
}

export default memo(SignOutMenuButton)
