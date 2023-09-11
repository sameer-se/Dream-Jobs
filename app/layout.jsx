import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <NavBar /> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
