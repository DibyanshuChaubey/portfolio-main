
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
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${titanOne.variable} antialiased libre-baskerville-bold app min-h-screen bg-background text-foreground`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,108,255,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(77,208,255,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.08]" />
          <div className="absolute left-[-12rem] top-20 h-[26rem] w-[26rem] rounded-full bg-accent/18 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-3xl" />
        </div>

        <CursorParticles />
        <Header />
        <main className="relative pt-28 xl:pt-32">
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
