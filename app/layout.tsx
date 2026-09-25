import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
  title: "Drivecab Driving School | Find Your Driving Instructor",
  description:
    "Compare trusted local driving instructors, see live availability and book driving lessons online with Drivecab Driving School.",
  icons: {
    icon: {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%233c0fa8'/%3E%3Cpath d='M12 39h40l-5-15H19z' fill='white'/%3E%3Ccircle cx='21' cy='43' r='5' fill='%23ffdd00'/%3E%3Ccircle cx='43' cy='43' r='5' fill='%23ffdd00'/%3E%3C/svg%3E",
      type: "image/svg+xml",
    },
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
