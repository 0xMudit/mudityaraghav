import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteTitle = "Muditya Raghav — Software Engineer";
const siteDescription =
  "I design and ship production systems end-to-end — a Mastercard-style payments switch in Go, a Stripe-billed AI research platform, and a real-time trading intelligence backend.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mudityaraghav.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Muditya Raghav",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Go",
    "Python",
    "TypeScript",
    "Payments",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Muditya Raghav" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
    siteName: "Muditya Raghav",
    images: [
      {
        url: "/assets/malcom.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/malcom.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

/* Runs before first paint so a stored dark preference never flashes white. */
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
