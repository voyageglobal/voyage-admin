import { memo, type PropsWithChildren } from "react"
import Link from "next/link"

export type DashboardSidebarProps = PropsWithChildren<{}>

const SIDEBAR_DOM_ID = "dashboard-sidebar"

function DashboardSidebar(props: DashboardSidebarProps) {
  const { children } = props

  return (
    <div className={"drawer drawer-open"}>
      <input id={SIDEBAR_DOM_ID} type="checkbox" className={"drawer-toggle"} />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor={SIDEBAR_DOM_ID}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/dashboard/guides"}>Guides</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default memo(DashboardSidebar)
