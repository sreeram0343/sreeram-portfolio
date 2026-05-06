import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Epilogue, Spectral } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sreeram M R | AI/ML Engineer",
  description: "Building Intelligent Systems with AI, Automation & Scalable Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${epilogue.variable} ${spectral.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
