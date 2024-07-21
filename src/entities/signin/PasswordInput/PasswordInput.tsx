"use client"
import { memo, useCallback, useState } from "react"
import PasswordInputToggle from "./PasswordInputToggle"
import { uniqueId } from "lodash"

export type PasswordInputProps = {
  inputId?: string
}

function PasswordInput(props: PasswordInputProps) {
  const { inputId = uniqueId("password-input-") } = props

  const [showPassword, togglePasswordVisibility] = useState(false)

  const handleTogglePasswordVisibility = useCallback(() => {
    togglePasswordVisibility(prevState => !prevState)
  }, [])

  return (
    <div className={"relative"}>
      <input
        id={inputId}
        type={showPassword ? "text" : "password"}
        className={
          "input input-bordered w-full border-gray-200 bg-neutral-900/40 p-3.5 font-body1 text-xl text-white placeholder-green-50 disabled:pointer-events-none disabled:opacity-50"
        }
        required={true}
        name={"password"}
        placeholder="Password"
      />
      <PasswordInputToggle onClick={handleTogglePasswordVisibility} />
    </div>
  )
}

export default memo(PasswordInput)
