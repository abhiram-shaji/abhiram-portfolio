// app/hire-full-stack-developer-victoria-bc/page.tsx
import { Metadata } from 'next';
import { Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hire Full Stack Developer Victoria BC | Abhiram Shaji',
  description:
    'Looking to hire a reliable full stack developer in Victoria BC? Abhiram Shaji builds scalable SEO-friendly apps with React, Node.js, and TypeScript. 100 Lighthouse score.',
  openGraph: {
    title: 'Hire Full Stack Developer Victoria BC | Abhiram Shaji',
    description:
      'Abhiram Shaji offers full stack development in Victoria BC. Get high-performance apps with perfect SEO, accessibility, and UX scores.',
    url: 'https://www.worksofabhiram.com/hire-full-stack-developer-victoria-bc',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhiram Shaji - Full Stack Developer Victoria BC',
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
    title: 'Hire Full Stack Developer Victoria BC | Abhiram Shaji',
    description:
      'Build your dream app with a full stack developer in Victoria BC who delivers SEO-first, scalable, and blazing fast applications.',
    images: ['/profile-img.jpg'],
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/hire-full-stack-developer-victoria-bc',
  },
};

export default function HirePage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Code2 className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hire a Full Stack Developer in Victoria, BC
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Looking to hire a reliable full stack developer in Victoria BC? I bring years of
              experience building scalable web applications using modern technologies like React,
              Node.js, Express, and TypeScript.
            </p>
            <p className="mb-4">
              Whether you&apos;re a startup, enterprise, or local business, I provide end-to-end
              development services, from planning and UI design to backend APIs, database
              optimization, testing, and deployment.
            </p>
            <p className="mb-4">
              My focus is on building SEO-friendly, responsive web apps that not only load fast but
              also rank higher in search engines.
            </p>
            <p className="mb-4">
              Every project I build consistently scores a perfect 100 on Lighthouse across SEO,
              performance, best practices, and accessibility.
            </p>
            <p>
              When you work with me, you&apos;re not just hiring a coder, you&apos;re partnering with a
              professional who values user experience, long-term maintainability, and measurable
              business results.
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
