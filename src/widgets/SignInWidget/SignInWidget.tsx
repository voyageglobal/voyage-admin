import { memo } from "react"
import { SignInForm } from "@src/features/signin"

export type SignInWidgetProps = {}

function SignInWidget(props: SignInWidgetProps) {
  return (
    <div className={"mx-auto h-full max-w-lg"}>
      <SignInForm />
    </div>
  )
}

export default memo(SignInWidget)
