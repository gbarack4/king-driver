import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Driving Schools Near Me | Drivecab Driving School",
    template: "%s | Drivecab",
  },
  description:
    "Find driving schools near me and driving schools Brisbane. Compare local instructors, prices and live times, then book a lesson online with Drivecab.",
  keywords: [
    "driving schools near me",
    "driving schools brisbane",
    "driving school brisbane",
    "driving schools nearby",
    "driving schools near me prices",
  ],
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
