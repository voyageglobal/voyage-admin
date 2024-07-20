import { memo, useState } from "react"
import PasswordInputToggle from "./PasswordInputToggle"

const passwordInputId = "password-input"

function PasswordInput() {
  const [password, setPassword] = useState("")

  return (
    <div className={"relative"}>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        id={passwordInputId}
        type="password"
        className={
          "block w-full rounded-lg border-gray-200 px-3 py-4 font-body1 text-xl text-white placeholder-green-50 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-900/40"
        }
        required={true}
        placeholder="Password"
      />
      <PasswordInputToggle inputId={passwordInputId} />
    </div>
  )
}

export default memo(PasswordInput)
