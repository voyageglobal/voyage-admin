import { SignInBody } from "../signinService"
import { USERNAME_FIELD_NAME, PASSWORD_FIELD_NAME } from "@src/entities/signin"

export function transformSigninFormData(formData: FormData): SignInBody {
  const transformedData = {
    username: formData.get(USERNAME_FIELD_NAME) as string,
    password: formData.get(PASSWORD_FIELD_NAME) as string,
  }

  return transformedData
}
