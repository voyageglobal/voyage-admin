import { type ApiResponse, getApiUrl, isSuccess } from "@src/shared/api"

export type SignInBody = {
  username: string
  password: string
}

export type SignInResponse = ApiResponse<{
  username: string
  accessToken: string
  refreshToken: string
}>

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

    if (!isSuccess(res, data)) {
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
