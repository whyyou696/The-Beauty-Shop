import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarLink from "@/components/NavbarLink";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Wishlist || The Beauty Shop®",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarLink/>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
