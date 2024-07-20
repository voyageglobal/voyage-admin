import { TypographyVariants } from "./types"
import cc from "classcat"

export function getTypographyComponent(variant: TypographyVariants) {
  switch (variant) {
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "h5":
      return "h5"
    case "h6":
      return "h6"
    case "subtitle1":
      return "h6"
    case "subtitle2":
      return "h6"
    case "body1":
      return "p"
    case "body2":
      return "p"
    case "caption":
      return "p"
    case "overline":
      return "p"
    case "button1":
      return "span"
  }
}

export function getTypographyClassName(variant: TypographyVariants) {
  switch (variant) {
    case "h1":
      return cc(["text-4xl text-neutral-900 font-bold font-heading1"])
    case "h2":
      return cc(["text-3xl  text-neutral-900 font-bold font-body1"])
    case "h3":
      return cc(["text-2xl  text-neutral-900 font-bold font-body1"])
    case "h4":
      return cc(["text-xl  text-neutral-900 font-bold font-body1"])
    case "h5":
      return cc(["text-lg  text-neutral-900 font-bold font-body1"])
    case "h6":
      return cc(["text-base  text-neutral-900 font-bold font-body1"])
    case "subtitle1":
      return cc(["text-xl text-neutral-500 font-medium font-body1"])
    case "subtitle2":
      return cc(["text-sm  text-neutral-900 font-medium font-body1"])
    case "body1":
      return cc(["text-base  text-neutral-900 font-body1"])
    case "body2":
      return cc(["text-sm  text-neutral-900 font-body1"])
    case "caption":
      return cc(["text-xs  text-neutral-900 font-body1"])
    case "overline":
      return cc(["text-xs  text-neutral-900 font-body1"])
    case "button1":
      return cc(["text-xl  text-white font-body1"])
  }
}
