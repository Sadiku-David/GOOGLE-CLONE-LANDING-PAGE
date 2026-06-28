import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter from Google Fonts — zero layout shift
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Google",
  description: "Search the world's information.",
};

// Root layout wraps EVERY page in the app
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}