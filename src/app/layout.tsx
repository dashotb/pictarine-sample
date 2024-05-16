import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Pictarine",
  description: "Sample du site pictarine.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
