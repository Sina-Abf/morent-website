"use client";
import Footer from "./components/footer";
import Header from "./components/header";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryWrapper from "./react-query-wrapper";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background ${plusJakarta.className} container max-w-screen-xl mx-auto`}
      >
        <ReactQueryWrapper>
          <Header />
          {children}
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
