import "./globals.css";
import { Hedvig_Letters_Serif, Inter } from "next/font/google";

const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hedvig",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: 'SalFin - Moderne Boekhouding & IT Oplossingen',
  description: 'SalFin combineert professionele boekhouding met slimme IT oplossingen. We maken je administratie efficiënt, je cijfers duidelijk, en je bedrijf klaar voor groei.',
  keywords: 'boekhouding, administratie, IT oplossingen, financiële diensten, Nederland',
  openGraph: {
    title: 'SalFin - Moderne Boekhouding & IT Oplossingen',
    description: 'Professionele boekhouding met slimme IT oplossingen voor efficiënte administratie en bedrijfsgroei.',
    url: 'https://salfin.com',
    siteName: 'SalFin',
    locale: 'nl_NL',
    type: 'website',
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${hedvig.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
