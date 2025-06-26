import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liam Loeffel",
  description: "This website is about Liam Loeffel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
