import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "@next/font/google";

// Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights as needed
  style: ["normal", "italic"], // Optional: specify styles if needed
});

export const metadata: Metadata = {
  title: "Fitzza Portfolio",
  description: "Portfolio for Fitzza mobile application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
