import { Montserrat } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Geotherm House",
  description: "Geotherm House's official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-stone-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
