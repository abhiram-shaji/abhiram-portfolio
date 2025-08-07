// app/hiring-freelance-developer-faq/page.tsx
import { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hiring Freelance Developer – FAQ | Abhiram Shaji',
  description:
    'Got questions about hiring a freelance developer? Find answers to common questions about industries served, timelines, pricing, redesigns, and what makes my work different.',
  openGraph: {
    title: 'Hiring Freelance Developer – FAQ | Abhiram Shaji',
    description:
      'Thinking of hiring a freelance developer but have questions? Here are answers to the most common things clients ask—from timelines and pricing to redesigns and results.',
    url: 'https://www.worksofabhiram.com/hiring-freelance-developer-faq',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Freelance Developer FAQ - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiring Freelance Developer – FAQ | Abhiram Shaji',
    description:
      'Explore frequently asked questions about hiring Abhiram Shaji as your freelance developer. Answers about scope, pricing, industries, and process.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/hiring-freelance-developer-faq',
  },
};

export default function FAQPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <HelpCircle className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hiring Freelance Developer – FAQ
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Thinking of hiring a freelance developer but have questions? Here are answers to the most
            common things clients ask.
          </p>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 space-y-6 text-muted-foreground text-lg">
            <div>
              <h2 className="font-semibold text-xl">What industries do you serve?</h2>
              <p>
                I work with startups, agencies, nonprofits, and small businesses across BC and beyond.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">What is your typical project timeline?</h2>
              <p>
                Projects vary, but most small to medium websites are completed in three to five weeks.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">What makes your work different?</h2>
              <p>
                My focus on performance, SEO, and accessibility sets my work apart. Every site scores
                100 on Lighthouse and is built to last.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">Can you redesign existing websites?</h2>
              <p>
                Yes, I specialize in refactoring and optimizing underperforming sites for better speed
                and conversions.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">What is your pricing model?</h2>
              <p>
                I offer project-based and hourly pricing with transparent scopes and deliverables.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
