// app/book-free-developer-consultation/page.tsx
import { Metadata } from 'next';
import { CalendarCheck2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Book Free Developer Consultation | Abhiram Shaji',
  description:
    'Need a full-stack developer who understands design and performance? Book a free consultation with Abhiram Shaji to talk goals, SEO, and technical strategy.',
  openGraph: {
    title: 'Book Free Developer Consultation | Abhiram Shaji',
    description:
      'Let’s discuss your project’s goals, timelines, and technical needs. Get honest feedback, proven SEO guidance, and a roadmap to build something great.',
    url: 'https://www.worksofabhiram.com/book-free-developer-consultation',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Developer Consultation - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Free Developer Consultation | Abhiram Shaji',
    description:
      'Talk to a developer who builds for performance, SEO, and design. Let’s build something amazing together.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/book-free-developer-consultation',
  },
};

export default function BookConsultationPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <CalendarCheck2 className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Book a Free Developer Consultation
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Looking for a developer who understands both design and development and can bring your
              vision to life? Book a free consultation with me to discuss your project goals,
              timelines, and technical requirements.
            </p>
            <p className="mb-4">
              I offer honest guidance whether you are just starting or need help improving an
              existing product. During our call, we will review your current challenges, explore
              possible solutions, and outline next steps.
            </p>
            <p>
              I will also walk you through how I achieve perfect SEO and Lighthouse scores to ensure
              your product is built on a strong foundation. Schedule now and let’s build something
              amazing together.
            </p>
          </CardContent>
        </Card>

        {/* Optional CTA Button (use only if you already have the modal or booking link set up) */}
        <div className="text-center md:text-left">
          <BookingModalTrigger />
          <BookingModal />
        </div>
      </div>
    </section>
  );
}
