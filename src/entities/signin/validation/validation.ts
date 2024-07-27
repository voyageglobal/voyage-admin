import { z } from "zod"
import { ValidationResult } from "@src/entities/signin/validation/types"
import { SignInBody } from "@src/entities/signin/signinService"
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_VALIDATION_REGEX,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from "./constants"

const signInBodySchema = z.object({
  username: z.string().min(USERNAME_MIN_LENGTH).max(USERNAME_MAX_LENGTH),
  password: z
    .string()
    .trim()
    .min(PASSWORD_MIN_LENGTH)
    .max(PASSWORD_MAX_LENGTH)
    .regex(PASSWORD_VALIDATION_REGEX),
})

export function validateSigninForm(
  data: SignInBody,
): ValidationResult<SignInBody> {
  const result = signInBodySchema.safeParse(data)
  const errors = result.error
    ? [
        ...result.error.errors.map(e => {
          return {
            message: e.message,
          }
        }),
      ]
    : []

  return {
    data: result.data ?? null,
    hasErrors: !result.success,
    errors: errors,
  }
}
