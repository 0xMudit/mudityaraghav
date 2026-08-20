import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://mudityaraghav.vercel.app"),
  title: "Muditya Raghav — Machine Learning Engineer",
  description:
    "I ship ML systems end-to-end — from a ViT re-identification model to a Stripe-billed AI SaaS. Applied CV research, LLM products, and production engineering.",
  openGraph: {
    title: "Muditya Raghav — Machine Learning Engineer",
    description:
      "I ship ML systems end-to-end — from a ViT re-identification model to a Stripe-billed AI SaaS.",
    type: "website",
    images: [
      {
        url: "/assets/malcom.png",
        width: 1200,
        height: 630,
        alt: "Muditya Raghav — Machine Learning Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}