import "./globals.css";

import { Gabarito } from "next/font/google";

import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-dark`}
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
