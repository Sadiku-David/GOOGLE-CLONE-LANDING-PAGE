import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter from Google Fonts — zero layout shift
const inter = Inter({ subsets: ["latin"] });

// Metadata for browser tab title and SEO
export const metadata = {
  title: "Google",
  description: "Search the world's information.",
};

// Root layout wraps EVERY page in the app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        inter.className applies the Inter font globally.
        The min-h-screen and flex flex-col ensure the
        footer sticks to the bottom even on short pages.
      */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}