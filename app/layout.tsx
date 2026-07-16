import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "@/components/Navbar"
import "./globals.css"
import { Bricolage_Grotesque } from "next/font/google"


const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
})

export const metadata: Metadata = {
  title: "Converso",
  description: "AI Learning Companions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{variables: { colorPrimary: "fe5933" }}}>
      <html lang="en">
        <body className={bricolageGrotesque.variable}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}