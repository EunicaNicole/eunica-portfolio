import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Person.search | Pink Edition",
  description: "Manage Person records with Claude MCP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-zinc-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
