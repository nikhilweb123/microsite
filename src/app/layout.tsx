import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunaina Bhalla — Contemporary Artist",
  description: "Contemporary artist exploring the human body as a site of trauma, resilience, and healing through mixed media and textile art.",
  keywords: "contemporary art, textile design, nihonga painting, sunaina bhalla, body as memory, healing through art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
