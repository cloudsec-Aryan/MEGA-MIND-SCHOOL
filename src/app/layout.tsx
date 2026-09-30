import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mega Mind Sr. Sec. School | Tosham, Bhiwani | CBSE",
    template: "%s | Mega Mind School Tosham",
  },
  description:
    "Mega Mind Sr. Sec. School, Tosham — CBSE affiliated co-educational school established in 2005. Work is Worship.",
  icons: {
    icon: "/images/logo-official.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Preloader />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
