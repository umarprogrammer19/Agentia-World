import type React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

