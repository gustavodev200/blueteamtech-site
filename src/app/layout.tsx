import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Toaster from "./components/Portfolio/components/Toaster";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Team Tech",
  description: "Nós ajudamos você a construir o projeto dos seus sonhos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={epilogue.className}>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
