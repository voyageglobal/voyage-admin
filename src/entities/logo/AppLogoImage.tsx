import { memo, useMemo } from "react"
import cc from "classcat"
import Image from "next/image"
import { APP_LOGO_URL } from "@src/entities/logo/constants"

export type AppLogoImageProps = {
  size?: "small" | "medium" | "large"
}

function AppLogoImage(props: AppLogoImageProps) {
  const { size = "medium" } = props

  const sizeClass = useMemo(() => {
    const sizeMap = {
      small: "w-8",
      medium: "w-12",
      large: "w-16",
    }

    return sizeMap[size]
  }, [size])

  return (
    <div
      className={cc([sizeClass, "avatar h-full"])}
      data-testid={"app-logo-img"}
    >
      <Image
        src={APP_LOGO_URL}
        fill={true}
        alt={""}
        style={{ objectFit: "contain" }}
      />
    </div>
  )
}

export default memo(AppLogoImage)
