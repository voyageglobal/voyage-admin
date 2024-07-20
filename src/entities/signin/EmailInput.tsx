import { memo } from "react"
import InputIcon from "./email-input-icon.svg"
import Image from "next/image"

function EmailInput() {
  return (
    <div className={"relative"}>
      <input
        id="email"
        type="email"
        className={
          "block w-full rounded-lg border-gray-200 px-3 py-4 font-body1 text-xl text-white placeholder-green-50 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-900/40"
        }
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
