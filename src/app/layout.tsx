import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AkshayCMS",
  description: "A simple home for your content."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
