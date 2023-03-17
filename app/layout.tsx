"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";
import ReactQueryWrapper from "./react-query-wrapper";

// export const metadata = {
//   title: "Morent Car Website",
//   description: "a Car salling website",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ReactQueryWrapper>
          <Header />
          {children}
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
