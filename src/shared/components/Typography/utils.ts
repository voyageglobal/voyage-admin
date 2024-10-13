import { SupportedTypographyTag, TypographyVariants } from "./types"
import { TYPOGRAPHY_COMPONENTS } from "./typographyComponents"
import { TYPOGRAPHY_CLASSES } from "@src/shared/components/Typography/typographyClasses"

export function getTypographyComponent(
  variant: TypographyVariants,
): SupportedTypographyTag {
  return TYPOGRAPHY_COMPONENTS[variant]
}

export function getTypographyClassName(variant: TypographyVariants) {
  return TYPOGRAPHY_CLASSES[variant]
}
