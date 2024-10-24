export type GuideCategory = {
  key: string
  name: string
  imageUrl: string
}

export type Guide = {
  id: string
  name: string
  text: string
  visitedDateStart: string
  visitedDateEnd: string
  categories: GuideCategory[]
}
