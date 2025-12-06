import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings/modern feel

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yearsofprogress.vercel.app"),
  title: {
    default: "Years of Progress",
    template: "%s | Years of Progress",
  },
  description: "Visualize the passage of time with a beautiful, premium countdown timer. Track the percentage of the year elapsed and stay motivated.",
  keywords: ["countdown", "year progress", "time tracking", "motivation", "productivity", "visual timer"],
  authors: [{ name: "Sijing" }],
  openGraph: {
    title: "Years of Progress",
    description: "Visualize the passage of time with a beautiful, premium countdown timer.",
    url: "https://yearsofprogress.vercel.app",
    siteName: "Years of Progress",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Years of Progress",
    description: "Visualize the passage of time with a beautiful, premium countdown timer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={`aurora-bg min-h-screen font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
