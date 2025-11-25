import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador Full Stack",
  description: "Portfolio profesional de desarrollador Full Stack. Proyectos, habilidades y experiencia en desarrollo web.",
  keywords: ["portfolio", "desarrollador", "full stack", "web development", "react", "next.js", "node.js"],
  authors: [{ name: "Portfolio Developer" }],
  openGraph: {
    title: "Portfolio | Desarrollador Full Stack",
    description: "Portfolio profesional de desarrollador Full Stack",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Desarrollador Full Stack",
    description: "Portfolio profesional de desarrollador Full Stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
