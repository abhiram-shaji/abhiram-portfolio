// app/lighthouse-optimization-services/page.tsx
import { Metadata } from 'next';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Lighthouse Optimization Services | Abhiram Shaji',
  description:
    'Struggling with poor Lighthouse scores? Abhiram Shaji offers professional SEO, performance, accessibility, and best practices optimization for websites that need results.',
  openGraph: {
    title: 'Lighthouse Optimization Services | Abhiram Shaji',
    description:
      'Full audits, code refactoring, WCAG accessibility, SEO improvements — Abhiram delivers practical changes that boost Lighthouse scores and user experience.',
    url: 'https://www.worksofabhiram.com/lighthouse-optimization-services',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Lighthouse Optimization Services - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lighthouse Optimization Services | Abhiram Shaji',
    description:
      'Improve your site’s Lighthouse scores and real-world performance. Abhiram optimizes for SEO, speed, accessibility, and best practices compliance.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/lighthouse-optimization-services',
  },
};

export default function LighthouseOptimizationPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <BarChart3 className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Lighthouse Optimization Services
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Struggling with poor Lighthouse scores or slow website performance? I offer
              professional Lighthouse optimization services to improve your website’s SEO,
              performance, accessibility, and best practices compliance.
            </p>
            <p className="mb-4">
              I conduct a full audit of your existing site, then refactor code, compress assets,
              structure content, and implement accessibility features that meet WCAG standards.
            </p>
            <p className="mb-4">
              Whether you need to improve load times or rank better in search results, I provide
              practical, actionable improvements that make a difference.
            </p>
            <p>
              These changes not only help with technical SEO but also enhance the user experience,
              leading to higher engagement and better retention.
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
