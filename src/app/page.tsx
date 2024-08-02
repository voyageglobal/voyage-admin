import { getServerSession } from "next-auth"

export default async function Root() {
  const session = await getServerSession()

  console.log("session", session)

  return (
    <main>
      <p className={"prose text-4xl dark:text-white"}>Root</p>
      <p>User: {session?.user?.name}</p>
    </main>
  )
}
