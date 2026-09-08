import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#060607",
};

export const metadata: Metadata = {
  title: "kattyeye | links",
  description:
    "Kat Ingram — full-stack developer in Greenville, SC. SmartPO, Hey Poppi, and Irie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-[#060607] antialiased">{children}</body>
    </html>
  );
}
