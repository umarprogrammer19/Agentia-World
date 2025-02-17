import ChatBot from "@/components/chatbot"
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
        <script
          async
          src="https://widget.kommunicate.io/v2/kommunicate.app"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.kommunicate = window.kommunicate || {};
              window.kommunicate._globals = {
                appId: "${process.env.NEXT_PUBLIC_KOMMUNICATE_APP_ID}",
                popupWidget: true,
                automaticChatOpenOnNavigation: true
              };
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} dark bg-black`}>
        <CustomCursor />
        <ChatBot />
        {children}
      </body>
    </html>
  )
}

