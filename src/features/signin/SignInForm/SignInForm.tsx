"use client"

import { memo } from "react"
import { useFormState } from "react-dom"
import {
  PasswordInput,
  SigninErrorAlert,
  UsernameInput,
} from "@src/entities/signin"
import { Typography } from "@src/shared/components"
import { authenticateAction } from "./actions"
import SigninFormSubmit from "./SigninFormSubmit"

export type SignInFormProps = {}

export const FORM_NAME = "signin-form"

function SignInForm(props: SignInFormProps) {
  const [formState, formAction] = useFormState(authenticateAction, {
    errorMessage: null,
  })
  const { errorMessage } = formState ?? {}

  return (
    <form
      id={FORM_NAME}
      action={formAction}
      name={FORM_NAME}
      className={"flex h-full w-full flex-col items-start justify-center"}
    >
      <Typography variant={"h1"} className={"pb-8"}>
        Welcome back!
      </Typography>
      <Typography variant={"subtitle1"} className={"pb-7"}>
        Please enter your details
      </Typography>
      <div className={"w-full pb-3"}>
        <UsernameInput />
      </div>
      <div className={"w-full pb-11"}>
        <PasswordInput />
      </div>
      {errorMessage && (
        <div className={"w-full pb-5"}>
          <SigninErrorAlert message={errorMessage} />
        </div>
      )}
      <div className={"w-full"}>
        <SigninFormSubmit />
      </div>
    </form>
  )
}

export default memo(SignInForm)
