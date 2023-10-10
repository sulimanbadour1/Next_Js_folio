import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suliman Badour || Portfolio",
  description:
    "This is the personal Portfolio of Suliman Badour, including Front End Projects, Engineering Projects and an overview.",
  keywords: "Suliman, FrontEnd, ProductDesign, UI, UX, 3D, Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="This is the personal Portfolio of Suliman Badour, including Front End Projects, Engineering Projects and an overview."
        />
        <meta name="keywords" content="add, your, keywords, here" />
        <meta property="og:title" content="Suliman Badour Portfolio" />
        <meta property="og:description" content="This is S.Badour Portfolio." />
        <meta property="og:image" content="public\logos\black.png" />
        <meta property="og:url" content="https://sulimanbadour.com" />
        <meta name="author" content="Suliman Badour" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
