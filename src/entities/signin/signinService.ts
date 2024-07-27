import { getApiUrl } from "@src/shared/api"

export type SignInBody = {
  username: string
  password: string
}

export type SignInResponse = {
  data: {
    username: string
    accessToken: string
    refreshToken: string
  }
  errors:
    | [
        {
          message: string
        },
      ]
    | null
}

export async function signin(
  body: SignInBody,
): Promise<SignInResponse["data"]> {
  const url = getApiUrl("/auth/sign-in")

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data: SignInResponse = await res.json()
    const hasErrors = (data?.errors && data?.errors?.length > 0) || !res.ok

    if (hasErrors) {
      const error = data.errors?.[0] ?? { message: "Sign in failed" }
      throw new Error(error?.message)
    }

    return data.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error("Sign in failed due to an unknown error")
  }
}
