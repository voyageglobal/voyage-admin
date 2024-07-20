"use client"
import { FormEvent, memo, useCallback } from "react"
import { EmailInput, PasswordInput, SigninButton } from "@src/entities/signin"
import { Typography } from "@src/shared/components"

export type SignInFormProps = {}

function SignInForm(props: SignInFormProps) {
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
  }, [])

  return (
    <form
      className={"flex h-full w-full flex-col items-start justify-center"}
      onSubmit={handleSubmit}
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
        <SigninButton onClick={() => {}} fullWidth={true} />
      </div>
    </form>
  )
}

export default memo(SignInForm)
