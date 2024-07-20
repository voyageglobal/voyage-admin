import React, { memo, type MouseEvent } from "react"
import cc from "classcat"
import { Typography } from "@src/shared/components"

export type SigninButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  fullWidth?: boolean
}

function SigninButton(props: SigninButtonProps) {
  const { onClick, fullWidth = false } = props

  return (
    <button
      type={"submit"}
      onClick={onClick}
      className={cc([
        "inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-900 disabled:pointer-events-none disabled:opacity-50",
        {
          "w-full": fullWidth,
        },
      ])}
    >
      <Typography variant={"button1"}>Sign In</Typography>
    </button>
  )
}

export default memo(SigninButton)
