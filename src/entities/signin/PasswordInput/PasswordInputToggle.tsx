import React, { memo } from "react"
import PasswordToggleIcon from "./password-input-icon.svg"
import Image from "next/image"

export type PasswordInputToggleProps = {
  inputId: string
}

function PasswordInputToggle(props: PasswordInputToggleProps) {
  const { inputId } = props

  return (
    <button
      type={"button"}
      className="absolute inset-y-0 end-0 top-0 flex items-center rounded-e-md p-3.5 ps-4"
    >
      <Image src={PasswordToggleIcon} alt={""} />
    </button>
  )
}

export default memo(PasswordInputToggle)
