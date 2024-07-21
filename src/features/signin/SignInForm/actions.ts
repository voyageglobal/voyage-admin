import { signinService } from "@src/entities/signin"

export async function signin(signinFormData: FormData) {
  "use server"

  const body = {
    username: signinFormData.get("email") as string,
    password: signinFormData.get("password") as string,
  }

  return signinService.signin(body)
}
