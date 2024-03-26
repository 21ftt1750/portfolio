import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";

export const metadata: Metadata = {
  title: "Muin's portfolio",
  description: "all me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mt-28">{children}</div>
      </body>
    </html>
  );
}
