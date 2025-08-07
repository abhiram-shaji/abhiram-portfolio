// app/digital-design-development-victoria/page.tsx
import { Metadata } from 'next';
import { LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Design & Development Victoria BC | Abhiram Shaji',
  description:
    'Modern design meets scalable development. Based in Victoria BC, Abhiram Shaji delivers high-quality digital experiences with SEO, Google Ads, and analytics integration.',
  openGraph: {
    title: 'Digital Design & Development Victoria BC | Abhiram Shaji',
    description:
      'Get modern, functional, and search-optimized digital design and web development services tailored for local Victoria BC businesses. Powered by real experience.',
    url: 'https://www.worksofabhiram.com/digital-design-development-victoria',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Design & Development Victoria - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Design & Development Victoria BC | Abhiram Shaji',
    description:
      'Full-stack development and design from Victoria BC. Enterprise-level quality with a personal, local touch.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/digital-design-development-victoria',
  },
};

export default function DigitalDesignVictoriaPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <LayoutDashboard className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Digital Design & Development in Victoria, BC
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Based in Victoria BC, I offer digital design and web development services tailored for
              local businesses and organizations.
            </p>
            <p className="mb-4">
              I combine visual design expertise with technical skills to build digital experiences
              that are modern, functional, and optimized for search engines.
            </p>
            <p className="mb-4">
              From UI design to full stack development, every project is custom built using a
              modular, component-based architecture.
            </p>
            <p className="mb-4">
              I bring my experience from projects like The Digital Uplift and Deloitte to every
              local project, ensuring enterprise-level quality with a personal approach.
            </p>
            <p>
              I also offer Google Ads and analytics integration to help you monitor performance and
              grow your online reach.
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
