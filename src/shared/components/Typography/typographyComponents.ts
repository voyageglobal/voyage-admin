import { TypographyVariants, SupportedTypographyTag } from "./types"

export const TYPOGRAPHY_COMPONENTS: {
  [key in TypographyVariants]: SupportedTypographyTag
} = {
  widgetContent: "span",
  widgetSubtitle: "span",
  widgetTitle: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "p",
  overline: "p",
  button1: "span",
} as const
