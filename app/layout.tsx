import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Mireles — Software Developer",
  description: "The personal portfolio of Axel Mireles, a Software Developer based in Monterrey, Mexico.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}

