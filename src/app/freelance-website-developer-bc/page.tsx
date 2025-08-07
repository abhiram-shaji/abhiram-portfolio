// app/freelance-website-developer-bc/page.tsx
import { Metadata } from 'next';
import { Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Freelance Website Developer BC | Abhiram Shaji',
  description:
    'Looking for a freelance website developer in British Columbia? Abhiram Shaji builds fast, SEO-friendly, responsive sites with React, Next.js, Tailwind CSS, and Firebase.',
  openGraph: {
    title: 'Freelance Website Developer BC | Abhiram Shaji',
    description:
      'Skip the agency fluff. Get high-quality, SEO-optimized websites built by a local BC developer using React, Tailwind, Firebase and more.',
    url: 'https://www.worksofabhiram.com/freelance-website-developer-bc',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Freelance Website Developer in British Columbia - Abhiram Shaji',
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
    title: 'Freelance Website Developer BC | Abhiram Shaji',
    description:
      'Freelance web development with SEO-first focus, Google Analytics, CMS integration, and mobile-first design. Built in BC, for BC.',
    images: ['/profile-img.jpg'],
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/freelance-website-developer-bc',
  },
};

export default function FreelanceWebDevPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Globe className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Freelance Website Developer in BC
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              As a freelance web developer based in British Columbia, I help small businesses,
              entrepreneurs, and agencies build fast, affordable, and high-quality websites.
            </p>
            <p className="mb-4">
              I skip the overhead of agencies to provide direct, hands-on development services with
              personal attention to your goals.
            </p>
            <p className="mb-4">
              My stack includes React, Next.js, Tailwind CSS, Shadcn, and backend solutions like
              Node.js and Firebase.
            </p>
            <p className="mb-4">
              I specialize in SEO-first development with semantic HTML, structured content, and fast
              page load times.
            </p>
            <p>
              Every project includes Google Analytics setup, modular CMS integration, and mobile
              responsive design. If you’re looking for someone local to BC who understands the needs
              of businesses here and can deliver without the fluff, I’m the developer to call.
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
