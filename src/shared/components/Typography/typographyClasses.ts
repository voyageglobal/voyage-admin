import { TypographyVariants } from "./types"
import cc from "classcat"

type TypographyClass = string

export const TYPOGRAPHY_CLASSES: {
  [key in TypographyVariants]: TypographyClass
} = {
  h1: cc(["text-4xl text-neutral-900 font-bold font-heading1"]),
  h2: cc(["text-3xl  text-neutral-900 font-bold font-body1"]),
  h3: cc(["text-2xl  text-neutral-900 font-bold font-body1"]),
  h4: cc(["text-xl  text-neutral-900 font-bold font-body1"]),
  h5: cc(["text-lg  text-neutral-900 font-bold font-body1"]),
  h6: cc(["text-base  text-neutral-900 font-bold font-body1"]),
  subtitle1: cc(["text-xl text-neutral-500 font-medium font-body1"]),
  subtitle2: cc(["text-sm  text-neutral-900 font-medium font-body1"]),
  body1: cc(["text-base  text-neutral-900 font-body1"]),
  body2: cc(["text-sm  text-neutral-900 font-body1"]),
  caption: cc(["text-xs  text-neutral-900 font-body1"]),
  overline: cc(["text-xs  text-neutral-900 font-body1"]),
  button1: cc(["text-xl  text-white font-body1"]),
  widgetTitle: cc(["text-3xl text-neutral-900 font-body1"]),
  widgetSubtitle: cc(["text-xl text-neutral-900 font-body1"]),
  widgetContent: cc(["text-6xl text-neutral-900 font-body1 font-bold"]),
} as const
