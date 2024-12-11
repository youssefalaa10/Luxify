import Header from "@/components/Navbar/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-[#efefef] h-screen">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
