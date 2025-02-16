import { CustomCursor } from "@/components/custom-cursor"
import { Space_Grotesk } from "next/font/google"
import type React from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Agentia World - Next Generation AI</title>
      </head>
      <body className={`${spaceGrotesk.className} dark`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

