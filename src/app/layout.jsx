import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-dark font-gabarito"
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
