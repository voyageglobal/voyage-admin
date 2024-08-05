import { signIn } from "next-auth/react"
import { validateSigninForm } from "@src/entities/signin/validation"
import { transformSigninFormData } from "@src/entities/signin/transformers"
import { CREDENTIALS_PROVIDER_NAME } from "@src/app/api/auth/[...nextauth]/route"
import { ROUTES } from "@src/shared/routes"

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
    const res = await signIn(CREDENTIALS_PROVIDER_NAME, {
      username: body.username,
      password: body.password,
      redirect: true,
      callbackUrl: ROUTES.DASHBOARD,
    })

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
