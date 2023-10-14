import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
