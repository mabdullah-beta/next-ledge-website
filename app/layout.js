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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'SalFin - Moderne Boekhouding & IT Oplossingen',
    description: 'Professionele boekhouding met slimme IT oplossingen voor efficiënte administratie en bedrijfsgroei.',
    url: 'https://salfin.com',
    siteName: 'SalFin',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'SalFin Logo',
      },
    ],
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
