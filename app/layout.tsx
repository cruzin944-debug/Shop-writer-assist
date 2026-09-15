import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const title = "Shop Writer Assist — AI sidekick for service writers";
const description =
  "Shop Writer Assist helps service writers draft repair orders, explain work in plain English, and keep customers in the loop. Built for shops and dealership service departments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shopwriterasst.com"),
  title: {
    default: title,
    template: "%s · Shop Writer Assist",
  },
  description,
  applicationName: "Shop Writer Assist",
  keywords: [
    "service writer",
    "service advisor",
    "repair order",
    "auto shop software",
    "dealership service",
    "AI assistant",
  ],
  authors: [{ name: "Shop Writer Assist", url: "https://shopwriterasst.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopwriterasst.com",
    siteName: "Shop Writer Assist",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#081422",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
