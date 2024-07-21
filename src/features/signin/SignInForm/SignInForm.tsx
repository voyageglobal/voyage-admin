import { memo, useCallback } from "react"
import { EmailInput, PasswordInput, SigninButton } from "@src/entities/signin"
import { Typography } from "@src/shared/components"
import { signin } from "@src/features/signin/SignInForm/actions"

export type SignInFormProps = {}

function SignInForm(props: SignInFormProps) {
  return (
    <form
      action={signin}
      className={"flex h-full w-full flex-col items-start justify-center"}
    >
      <Typography variant={"h1"} className={"pb-8"}>
        Welcome back
      </Typography>
      <Typography variant={"subtitle1"} className={"pb-7"}>
        Please enter your details
      </Typography>
      <div className={"w-full pb-3"}>
        <EmailInput />
      </div>
      <div className={"w-full pb-11"}>
        <PasswordInput />
      </div>
      <div className={"w-full"}>
        <SigninButton fullWidth={true} />
      </div>
    </form>
  )
}

export default memo(SignInForm)
