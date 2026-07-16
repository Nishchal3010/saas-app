import Link from "next/link"
import Image from "next/image"
import {
  SignInButton,

  UserButton,
} from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={46} height={44} />
          <p className="text-xl font-semibold">Converso</p>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/companions">Companions</Link>
        <Link href="/my-journey">My Journey</Link>

        <SignInButton>
          <button className="btn-signin">Sign in</button>
        </SignInButton>


        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar