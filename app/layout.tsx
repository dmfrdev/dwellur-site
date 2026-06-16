import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dwellur — the modern home record",
  description:
    "dwellur helps property owners keep photos, notes, inspections, and reports in one organized place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
