export type ValidationError = {
  message: string
}

export type ValidationResult<TData> = {
  hasErrors: boolean
  errors: ValidationError[]
  data: TData | null
}
