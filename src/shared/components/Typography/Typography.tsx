import {
  memo,
  type PropsWithChildren,
  useMemo,
  type HTMLAttributes,
} from "react"
import { getTypographyClassName, getTypographyComponent } from "./utils"
import { type TypographyVariants } from "./types"

export type TypographyProps = PropsWithChildren<
  {
    variant: TypographyVariants
  } & HTMLAttributes<HTMLElement>
>

function Typography(props: TypographyProps) {
  const { variant, className, children, ...restProps } = props

  const Component = useMemo(() => getTypographyComponent(variant), [variant])

  const typographyClassName = useMemo(() => {
    return getTypographyClassName(variant)
  }, [variant])

  return (
    <Component
      className={`${typographyClassName} ${className ?? ""}`}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export default memo(Typography)
