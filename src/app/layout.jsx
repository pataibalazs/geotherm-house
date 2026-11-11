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
  metadataBase: new URL("https://www.geothermhouse.hu"),
  title: "Geotherm House – Tervezés és generálkivitelezés egy kézben",
  description:
    "Építészeti tervezés és generálkivitelezés egy kézben, az ötlettől az átadásig. 30 év tapasztalat, 250+ átadott lakás. Eladó új építésű lakások Veresegyházon.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Geotherm House",
    locale: "hu_HU",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
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
