import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar";
import { FooterComponent } from "@/components/Footer";

const inter = Roboto({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "Kabuki Autoshop Samarinda",
  description: "Autoshop Samarinda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="autoshop samarinda, anti karat mobil samarinda, samarinda, coating mobil samarinda, Kaca Film Mobil samarinda, kabuki, kabuki autoshop, kabuki autoshop samarinda" />
      <body className={inter.className}>
        <NavbarComponent/>
      {children}
      <FooterComponent/></body>
    </html>
  );
}
