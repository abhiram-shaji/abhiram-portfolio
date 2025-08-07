// app/conversion-focused-frontend-developer/page.tsx
import { Metadata } from 'next';
import { MousePointerClick } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Conversion Focused Frontend Developer | Abhiram Shaji',
  description:
    'Frontend isn’t just about looks—it’s about driving results. Abhiram builds conversion-optimized UIs with React, Shadcn, Aceternity, and modern design systems.',
  openGraph: {
    title: 'Conversion Focused Frontend Developer | Abhiram Shaji',
    description:
      'Crafting UIs that guide users to take action. With Lighthouse-perfect performance and proven design principles, Abhiram delivers high-converting web interfaces.',
    url: 'https://www.worksofabhiram.com/conversion-focused-frontend-developer',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Conversion Focused Frontend Developer - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversion Focused Frontend Developer | Abhiram Shaji',
    description:
      'React + Shadcn + Aceternity + performance-first approach = high-conversion UI. See how Abhiram builds frontend that drives business results.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/conversion-focused-frontend-developer',
  },
};

export default function ConversionFocusedFrontendPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <MousePointerClick className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Conversion Focused Frontend Developer
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              Frontend development is not just about making things look good. It’s about guiding
              users toward the right actions and ensuring every interaction is smooth, intuitive,
              and optimized for conversion.
            </p>
            <p className="mb-4">
              I use React and modern UI frameworks like Shadcn and Aceternity to build interfaces
              that load fast, work seamlessly, and feel natural.
            </p>
            <p className="mb-4">
              I apply conversion-focused principles such as visual hierarchy, content placement,
              responsive design, and accessibility standards.
            </p>
            <p>
              Combined with perfect Lighthouse scores and SEO-optimized structure, this results in
              interfaces that keep users engaged and encourage them to take action, whether it’s
              filling a form, making a purchase, or exploring more content.
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
