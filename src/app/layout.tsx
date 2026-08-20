import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muditya Raghav — Machine Learning Engineer",
  description:
    "Machine Learning Engineer building production AI products. LLMs, RAG pipelines, computer vision, and full-stack ML systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}