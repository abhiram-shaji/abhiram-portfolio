// app/locations-served/page.tsx
import { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BookingModal from '@/components/ui/BookingModal';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Web Development Services Across North America | Abhiram Shaji',
  description:
    'Offering full stack web development across North America — serving clients in Canada and the U.S. with scalable, SEO-optimized, accessible digital products.',
  openGraph: {
    title: 'Web Development Services Across North America | Abhiram Shaji',
    description:
      'Based in Victoria BC, Abhiram Shaji provides full stack development services to businesses and startups across Canada and the U.S. Remote friendly and results driven.',
    url: 'https://www.worksofabhiram.com/locations-served',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Locations - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services Across North America | Abhiram Shaji',
    description:
      'Full stack developer serving clients remotely in cities across Canada and the U.S. Fast, accessible, scalable web apps built from Victoria BC.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/locations-served',
  },
};

export default function LocationsServedPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <MapPin className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Web Development Services Across North America
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-muted-foreground text-lg leading-relaxed space-y-6">
            <p>
              Based in Victoria, British Columbia, I provide full stack web development services to
              businesses, agencies, and startups across North America. From local BC companies to
              enterprise clients in major cities, my remote-friendly services are tailored to deliver
              performance-optimized, scalable, and accessible web applications.
            </p>

            <div>
              <h2 className="text-lg font-semibold mb-1">
                Serving Major Cities Across Canada
              </h2>
              <p>
                My services are available to clients in: <br />
                <strong>
                  Toronto, Vancouver, Montreal, Calgary, Edmonton, Ottawa, Winnipeg, Regina,
                  Saskatoon, Halifax
                </strong>{' '}
                and more.
              </p>
              <p className="mt-2">
                As a Victoria-based developer, I work closely with businesses throughout British
                Columbia including <strong>Nanaimo, Kelowna, and the Greater Vancouver Area</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">
                Working with Clients Across the United States
              </h2>
              <p>
                I also provide development and consulting services to clients in: <br />
                <strong>
                  New York City, Los Angeles, San Francisco, Chicago, Austin, Miami, Seattle,
                  Atlanta, Houston, Dallas, Boston, Washington DC, Denver, Phoenix, Portland
                </strong>{' '}
                and many other metro areas.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">
                Remote Friendly North American Development
              </h2>
              <p>
                All projects are managed online with clear timelines, milestone tracking, and regular
                updates. Whether you are looking to launch a new product, redesign an existing site,
                or optimize for SEO and performance, I bring technical expertise with a focus on
                results.
              </p>
              <p className="mt-2">
                If you are in North America and need a reliable full stack developer who understands
                design, user experience, and business needs, let us work together. Location is never
                a barrier to building great digital experiences.
              </p>
            </div>
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
