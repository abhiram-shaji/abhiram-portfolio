// app/high-performance-web-apps-portfolio/page.tsx
import { Metadata } from 'next';
import { Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'High Performance Web Apps Portfolio | Abhiram Shaji',
  description:
    'Explore a portfolio of web apps built for performance, SEO, accessibility, and business success. eCommerce, dashboards, social apps, and more—developed with clean code and measurable impact.',
  openGraph: {
    title: 'High Performance Web Apps Portfolio | Abhiram Shaji',
    description:
      'From eCommerce to social platforms, explore Abhiram Shaji’s portfolio of high-performance, SEO-optimized web apps that combine technical precision with real-world results.',
    url: 'https://www.worksofabhiram.com/high-performance-web-apps-portfolio',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'High Performance Web Apps Portfolio - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Performance Web Apps Portfolio | Abhiram Shaji',
    description:
      'Take a deep dive into web apps that blend stunning visuals with measurable performance. Explore projects built with SEO, responsiveness, and client goals in mind.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/high-performance-web-apps-portfolio',
  },
};

export default function HighPerformancePortfolioPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Rocket className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            High Performance Web Apps Portfolio
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Take a deep dive into the portfolio of web apps I have developed over the years. These
              are not just visually appealing but also highly functional and optimized for real-world
              performance.
            </p>
            <p className="mb-4">
              Projects include eCommerce platforms, analytics dashboards, social apps, and
              microservice architectures. You will see consistent patterns of clean code,
              intelligent use of tools, and a dedication to measurable success.
            </p>
            <p className="mb-4">
              Every app in my portfolio has been designed with SEO, accessibility, and responsiveness
              in mind.
            </p>
            <p>
              I work closely with clients to ensure each product reflects their brand while meeting
              technical and business goals. Explore my portfolio to see how I bring ideas to life with
              precision and clarity.
            </p>
            <div className="text-center md:text-left mt-6">
                                  <BookingModalTrigger />
                                  <BookingModal />
                                </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
