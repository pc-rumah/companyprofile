import type { Metadata } from "next";
import { Inter, Roboto, Lora, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Castle Trading Group",
  description: "Premium Coconut Charcoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={clsx(
          inter.variable,
          roboto.variable,
          lora.variable,
          outfit.variable,
          playfair.variable,
          "antialiased font-sans"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
