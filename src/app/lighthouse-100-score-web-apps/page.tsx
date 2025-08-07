// app/lighthouse-100-score-web-apps/page.tsx
import { Metadata } from 'next';
import { Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Lighthouse 100 Score Web Apps | Abhiram Shaji',
  description:
    'I build web apps that achieve 100/100 on Lighthouse in SEO, performance, best practices, and accessibility. High-ranking, fast, and inclusive user experiences.',
  openGraph: {
    title: 'Lighthouse 100 Score Web Apps | Abhiram Shaji',
    description:
      'Every project I deliver hits a perfect 100 in Lighthouse tests for SEO, performance, accessibility, and best practices. Built to rank, convert, and retain.',
    url: 'https://www.worksofabhiram.com/lighthouse-100-score-web-apps',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Lighthouse 100 SEO Performance Accessibility - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lighthouse 100 Score Web Apps | Abhiram Shaji',
    description:
      'Build with a developer who treats SEO and performance as a baseline. Perfect scores in Lighthouse, every time.',
    images: ['/profile-img.jpg'],
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/lighthouse-100-score-web-apps',
  },
};

export default function LighthouseScorePage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Gauge className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Lighthouse 100 Score Web Apps
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Building web apps that pass industry benchmarks isn’t just a goal, it's a standard
              for me.
            </p>
            <p className="mb-4">
              Every project I deliver achieves a perfect 100 score in Lighthouse tests for
              performance, accessibility, SEO, and best practices.
            </p>
            <p className="mb-4">
              This means lightning-fast load times, reduced bounce rates, better rankings on Google,
              and an inclusive experience for all users.
            </p>
            <p className="mb-4">
              I pay close attention to code structure, image optimization, metadata, and ARIA
              labels. These aren’t just checkboxes, they’re essential ingredients for web
              experiences that convert and retain.
            </p>
            <p>
              If you need a developer who doesn’t just make it work but builds it right, this is
              where I come in.
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
