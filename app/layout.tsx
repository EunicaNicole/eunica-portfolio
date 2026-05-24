import "./globals.css";

export const metadata = {
  title: "Eunica Nicole G. Lasam | Portfolio",
  description: "Full-Stack Developer portfolio specializing in UI/UX and HCI principles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
