import Script from "next/script";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://matchdigital.vercel.app";
const siteName = "Match Digital";
const title = "Match Digital | Estrategia, contenido y marketing digital";
const description =
  "Acompaño a marcas y emprendedores a construir una presencia digital estratégica con contenido, redes sociales, branding y publicidad.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "marketing digital",
    "estrategia de contenido",
    "gestión de redes sociales",
    "branding",
    "publicidad digital",
    "copywriting",
    "Match Digital",
    "Rocío Abbadessa",
  ],
  authors: [{ name: "Match Digital", url: siteUrl }],
  creator: "Match Digital",
  publisher: "Match Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName,
    locale: "es_AR",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Match Digital - Estrategia y marketing digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpg"],
    creator: "@matchdigital",
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              description,
              sameAs: [
                "https://www.instagram.com/matchdigital.ar/",
                "https://www.linkedin.com/in/rocio-abbadessa/",
              ],
              logo: `${siteUrl}/favicon_io/android-chrome-192x192.png`,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
