import { memo } from "react"
import GuidesTable from "@src/widgets/GuidesTable/GuidesTable"
import { Typography } from "@src/shared/components"

export type GuidesPageProps = {}

function GuidesPage(props: GuidesPageProps) {
  return (
    <div className={"p-4"}>
      <Typography variant={"h1"}>Guides</Typography>
      <div>
        <GuidesTable />
      </div>
    </div>
  )
}

export default memo(GuidesPage)
