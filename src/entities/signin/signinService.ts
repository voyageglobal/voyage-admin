import { getApiUrl } from "@src/shared/api"

export type SignInBody = {
  username: string
  password: string
}

export type SignInResponse = {
  username: string
  accessToken: string
  refreshToken: string
}

export function signin(data: SignInBody): Promise<SignInResponse> {
  const url = getApiUrl("/auth/sign-in")

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res => {
    return res.json()
  })
}
