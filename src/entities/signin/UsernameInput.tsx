import React, { memo } from "react"
import { uniqueId } from "lodash"

export type UsernameInputProps = {
  inputId?: string
}

export const FORM_FIELD_NAME = "username"

function UsernameInput(props: UsernameInputProps) {
  const { inputId = uniqueId("username-input-") } = props

  return (
    <div className="relative">
      <input
        id={inputId}
        className={
          "input w-full border-none bg-neutral-900/40 p-3.5 font-body1 text-xl text-white placeholder-green-50 disabled:pointer-events-none disabled:opacity-50"
        }
        type="text"
        name={FORM_FIELD_NAME}
        required={true}
        placeholder="Username"
      />
    </div>
  )
}

export default memo(UsernameInput)
