
import { Geist, Geist_Mono, Orbitron, Titan_One } from "next/font/google";


import Header from "../components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CursorParticles from "@/components/CursorParticles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700"], // bold for headings
});

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: ["400"], // Titan One has only 400
});



export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Dibyanshu Chaubey",
  image: "/globe.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">



    <body

  className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${titanOne.variable} antialiased libre-baskerville-bold app`}
>

  <CursorParticles />
  <Header />
  <main className="pt-28 xl:pt-32">
    <StairTransition />
    <PageTransition>{children}</PageTransition>
  </main>
</body>


    </html>
  );
}
