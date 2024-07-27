import Image from "next/image"
import SigninWidget from "@src/widgets/SignInWidget"

export type LoginPageProps = {}

function LoginPage(props: LoginPageProps) {
  return (
    <section className={"mx-auto flex h-full"}>
      <div className={"h-full w-2/4 bg-amber-50"}>
        <SigninWidget />
      </div>
      <div className={"relative h-full w-2/4"}>
        <Image
          src={"/signin-background.png"}
          alt={""}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  )
}

export default LoginPage
