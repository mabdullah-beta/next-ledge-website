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
  title: "SalFin",
  description: "Moderne boekhouding, echte inzichten, toekomstige groei.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hedvig.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
