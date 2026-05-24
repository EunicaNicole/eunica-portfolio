import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Person.search | MCP Tool",
  description: "Manage Person records directly in-app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
