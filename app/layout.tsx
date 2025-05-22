import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import { Geist } from 'next/font/google'
import {cn} from "@/lib/utils";

const geist = Geist({
    subsets: ['latin'],
    variable: "--font-sans",
})

const ermilov = localFont({
    variable: "--font-heading",
    src: "../fonts/Ermilov.otf",
});

export const metadata = {
  title: "Кофемакс",
  description: "Место притяжения успешных людей. Скоро открытие!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="ru" className={cn(geist.variable, ermilov.variable, "overflow-x-hidden")}>
      <body className="min-h-screen antialiased font-sans bg-white" >
      {children}
      </body>
      </html>
  );
}
