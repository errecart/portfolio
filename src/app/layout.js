import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Juan Ignacio Errecart Portfolio",
  description: "Juan Ignacio Errecart, Frontend Developer en React, Next.js y TypeScript con formación UX/UI. Disponible para trabajo remoto (GMT-3).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable}`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
