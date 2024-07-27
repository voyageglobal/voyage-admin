import { useFormStatus } from "react-dom"
import { SigninButton } from "@src/entities/signin"
import { memo } from "react"

function SigninFormSubmit() {
  const { pending } = useFormStatus()

  return <SigninButton disabled={pending} fullWidth={true} />
}

export default memo(SigninFormSubmit)
