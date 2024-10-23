import { useGuides } from "@src/features/guides/useGuides/useGuides"

// TODO: Implement hook to manage GuidesTable data and state
export function useGuidesTableData() {
  const { data } = useGuides()

  const tableData = []

  return {
    data,
  }
}
