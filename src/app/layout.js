import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pliant = localFont({
  src: "../../fonts/Pliant/Pliant-Italic-VariableFont_wdth,wght.ttf",
});

export const metadata = {
  title:
    "Yama Constructions | Residential, Commercial & Industrial Construction Company",

  description:
    "Yama Constructions is a trusted construction company in Kolhapur specializing in residential, commercial, and industrial projects. We provide turnkey construction solutions, renovation services, project management, and quality craftsmanship.",

  keywords: [
    "Yama Constructions",
    "construction company Kolhapur",
    "residential construction",
    "commercial construction",
    "industrial construction",
    "turnkey solutions",
    "renovation services",
    "project management",
    "building contractor",
    "construction services Maharashtra",
    "home construction",
    "commercial building construction",
  ],

  authors: [
    {
      name: "Yama Constructions",
    },
  ],

  creator: "Yama Constructions",

  metadataBase: new URL("https://www.yamaconstruction.co.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Yama Constructions | Residential, Commercial & Industrial Construction Company",

    description:
      "Trusted construction company delivering residential, commercial, and industrial projects with quality, precision, and timely execution.",

    url: "https://www.yamaconstruction.co.in",

    siteName: "Yama Constructions",

    locale: "en_IN",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yama Constructions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Yama Constructions | Residential, Commercial & Industrial Construction Company",

    description:
      "Trusted construction company delivering quality residential, commercial, and industrial projects.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${pliant.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
