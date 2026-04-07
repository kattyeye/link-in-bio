import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kattyeye | links",
  description: "Kat's links — dev tools, garden picks, kitchen gear & more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
