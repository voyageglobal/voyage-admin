"use server"

import { signinService } from "@src/entities/signin"
import { validateSigninForm } from "@src/entities/signin/validation"
import { transformSigninFormData } from "@src/entities/signin/transformers"

export type FormState = {
  errorMessage: string | null
}

export async function authenticateAction(
  prevFormState: FormState,
  signinFormData: FormData,
): Promise<FormState> {
  const requestBody = transformSigninFormData(signinFormData)

  const { hasErrors, errors, data: body } = validateSigninForm(requestBody)

  if (hasErrors || !body) {
    return {
      errorMessage: errors[0].message,
    }
  }

  try {
    const result = await signinService.signin(body)

    return {
      errorMessage: null,
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Sign in failed due to an error", error.message)
      return {
        errorMessage: error.message,
      }
    }

    console.error("Sign in failed due to an unknown error")
    return {
      errorMessage: "Sign in failed due to an unknown error",
    }
  }
}
