import { Ultra } from "next/font/google"
import LocalFont from "next/font/local"

export const heading1 = Ultra({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading1",
})

export const body1 = LocalFont({
  src: [
    {
      path: "./BakerSignetStd.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body1",
})
