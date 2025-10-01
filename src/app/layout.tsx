import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A.K. Traders® | Freight Forwarding & Customs Clearance in Pakistan",
  description: "Since 1974, A.K. Traders® provides customs clearance, freight forwarding, transit trade, and logistics services across Pakistan.",
  keywords: "freight forwarding, customs clearance, Pakistan, transit trade, logistics, import export, Quetta, Lahore",
  authors: [{ name: "A.K. Traders" }],
  creator: "A.K. Traders",
  publisher: "A.K. Traders",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aktraders.pk",
    title: "A.K. Traders® | Freight Forwarding & Customs Clearance in Pakistan",
    description: "Since 1974, A.K. Traders® provides customs clearance, freight forwarding, transit trade, and logistics services across Pakistan.",
    siteName: "A.K. Traders",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.K. Traders® | Freight Forwarding & Customs Clearance in Pakistan",
    description: "Since 1974, A.K. Traders® provides customs clearance, freight forwarding, transit trade, and logistics services across Pakistan.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}