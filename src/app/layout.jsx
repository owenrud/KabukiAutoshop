import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar";
import { FooterComponent } from "@/components/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Kabuki Autoshop Samarinda",
  description:
    "Kabuki Autoshop Samarinda adalah jasa pelayanan salon mobil terdekat di kota samarinda , kami memiliki berbagai macam produk salon mobil seperti nano ceramic coating , kaca film masterpiece dan anti karat mobil pertama di kota samarinda !!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="keywords"
        content="autoshop samarinda, anti karat mobil samarinda, samarinda, nano coating mobil samarinda, coating mobil samarinda, Kaca Film Mobil samarinda, kabuki autoshop samarinda, salon mobil samarinda, website kabuki"
      />
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
      
    </html>
  );
}
