export function appendSearchParams(
  url: URL,
  params: Record<string, string | undefined | null>,
): URL {
  const searchParams = new URLSearchParams(url.search)
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return
    searchParams.append(key, value)
  })
  url.search = searchParams.toString()
  return url
}
