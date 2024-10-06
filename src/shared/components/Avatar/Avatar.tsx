import { memo, useMemo } from "react"
import { AVATAR_FALLBACK_IMAGE_URL } from "@src/shared/components/Avatar/constants"
import Image from "next/image"
import cc from "classcat"

export type AvatarProps = {
  imageUrl?: string | null
  size?: "small" | "medium" | "large"
}

function Avatar(props: AvatarProps) {
  const { imageUrl, size = "medium" } = props

  const image = imageUrl ?? AVATAR_FALLBACK_IMAGE_URL

  const imageSize = useMemo(() => {
    let imgSize = "w-12"

    switch (size) {
      case "small":
        imgSize = "w-8"
        break
      case "medium":
        imgSize = "w-12"
        break
      case "large":
        imgSize = "w-16"
        break
    }

    return imgSize
  }, [size])

  return (
    <div className={"avatar"} data-testid={"avatar-image"}>
      <div className={cc(["rounded-full", imageSize])}>
        <Image
          src={image}
          alt={"Picture of the user"}
          fill={true}
          className={"rounded-full"}
        />
      </div>
    </div>
  )
}

export default memo(Avatar)
