import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingModalProvider } from "@/components/ui/BookingModalContext";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhiram's Portfolio",
  description: "Crafted with Next.js, Tailwind, and ShadCN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Removed Google Analytics scripts */}</head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Set dark mode on first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const t = localStorage.getItem('theme');
              if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();`,
          }}
        />

        <BookingModalProvider>
          <Header />
          {children}
          <Footer />
        </BookingModalProvider>
      </body>
    </html>
  );
}
