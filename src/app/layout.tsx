import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageProgress } from "@/components/PageProgress";
import { LanguageProvider } from "@/context/LanguageContext";
import { UIProvider } from "@/context/UIContext";
import { LayoutContent } from "@/components/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J. Exaucé Jackson | Architecte de Solutions Digitales | Portfolio Premium",
  description: "Ingénieur logiciel & Architecte de solutions spécialisé dans la conception de systèmes robustes et durables. Découvrez l'expertise de J. Exaucé Jackson, fondateur de Arkan.",
  keywords: ["Ingénieur Logiciel", "Architecte Solutions", "Développement Web", "Next.js", "Laravel", "Portfolio Premium", "Exaucé Jackson", "Arkan"],
  authors: [{ name: "J. Exaucé Jackson" }],
  openGraph: {
    title: "J. Exaucé Jackson | Architecte de Solutions Digitales",
    description: "Conception de systèmes durables et architectures logicielles modernes.",
    url: "https://votre-portfolio.com",
    siteName: "Portfolio J. Exaucé Jackson",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen w-full flex flex-col p-2 sm:p-4 md:p-8 lg:p-12">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <UIProvider>
              <LayoutContent>
                <PageProgress />
                {children}
              </LayoutContent>
            </UIProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
