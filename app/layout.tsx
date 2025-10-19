import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Liam Loeffel",
  description: "This website is about Liam Loeffel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
			<Analytics/>
      <body className="dark isolate">{children}</body>
    </html>
  );
}
