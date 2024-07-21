import { memo } from "react"
import InputIcon from "./email-input-icon.svg"
import Image from "next/image"
import { uniqueId } from "lodash"

export type EmailInputProps = {
  inputId?: string
}

function EmailInput(props: EmailInputProps) {
  const { inputId = uniqueId("email-input-") } = props

  return (
    <div className="relative">
      <input
        id={inputId}
        className={
          "input w-full border-none bg-neutral-900/40 p-3.5 font-body1 text-xl text-white placeholder-green-50 disabled:pointer-events-none disabled:opacity-50"
        }
        type="email"
        required={true}
        placeholder="Email"
      />
      <div className="pointer-events-none absolute inset-y-0 end-3 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50">
        <Image src={InputIcon} alt={""} />
      </div>
    </div>
  )
}

export default memo(EmailInput)
