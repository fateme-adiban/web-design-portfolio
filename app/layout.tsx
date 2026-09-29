import type { Metadata } from "next"
import { Patrick_Hand_SC, Instrument_Serif, Albert_Sans, Patrick_Hand } from "next/font/google"
import "./globals.css"

const patrickHand = Patrick_Hand({
  variable: "--font-patrick_hand",
  subsets: ["latin"],
  weight: "400"
})

const patrickHandSC = Patrick_Hand_SC({
  variable: "--font-patrick_hand_sc",
  subsets: ["latin"],
  weight: "400"
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"]
})

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Fateme Adiban — Freelance Web Designer",
  description: "I help personal branding strategists build websites that look like them, build trust, and turn visitors into clients.",

  openGraph: {
    title: "Fateme Adiban — Freelance Web Designer",
    description: "I help personal branding strategists build websites that look like them, build trust, and turn visitors into clients.",
    images: [
      {
        url: "/og-image.png.png",
        width: 1200,
        height: 630,
        alt: "Fateme Adiban — Freelance Web Designer"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Fateme Adiban — Freelance Web Designer",
    description: "I help personal branding strategists build websites that look like them, build trust, and turn visitors into clients.",
    images: ["/og-image.png.png"]
  }
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${patrickHandSC.variable} ${instrumentSerif.variable} ${albertSans.variable} ${patrickHand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
