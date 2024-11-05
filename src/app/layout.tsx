import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights as needed
  style: ["normal", "italic"], // Optional: specify styles if needed
});

// FontAwesome - Icons
config.autoAddCss = false;

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
