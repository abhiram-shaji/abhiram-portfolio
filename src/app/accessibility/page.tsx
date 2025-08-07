// app/accessibility/page.tsx
import { Metadata } from 'next';
import { Accessibility } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Abhiram Shaji',
  description:
    'This website follows WCAG 2.2 Level AA standards to ensure accessibility for all users. Learn more about the features and ongoing commitment to inclusive design.',
  openGraph: {
    title: 'Accessibility Statement | Abhiram Shaji',
    description:
      'This website follows WCAG 2.2 Level AA guidelines. Learn how accessibility is supported through semantic HTML, color contrast, keyboard navigation, and more.',
    url: 'https://www.worksofabhiram.com/accessibility',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Accessibility Statement - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Statement | Abhiram Shaji',
    description:
      'Accessibility matters. See how this website meets WCAG 2.2 Level AA standards and supports inclusive digital access.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/accessibility',
  },
};

export default function AccessibilityPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-4xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Accessibility className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Accessibility Statement</h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">I am committed to ensuring that this website is accessible to everyone regardless of ability or technology.</CardTitle>
          </CardHeader>

          <CardContent className="p-6 text-muted-foreground text-lg leading-relaxed space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-1">Accessibility Standards</h2>
              <p>
                This website is designed and developed to conform with the Web Content Accessibility
                Guidelines (WCAG) 2.2 Level AA, which outline how to make web content more accessible
                for people with disabilities and more user friendly for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Features Supporting Accessibility</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Semantic HTML and proper heading structure</li>
                <li>Alt text for all meaningful images</li>
                <li>ARIA labels and roles where appropriate</li>
                <li>Sufficient color contrast for readability</li>
                <li>Keyboard navigability for all interactive elements</li>
                <li>Responsive design for all screen sizes and devices</li>
                <li>
                  Testing using automated and manual accessibility tools including Google Lighthouse
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Ongoing Commitment</h2>
              <p>
                Accessibility is an ongoing effort. I continuously review and improve the website to
                maintain accessibility standards. I also monitor updates to accessibility laws and
                recommendations.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Need Help Accessing Content?</h2>
              <p>
                If you experience any difficulty accessing content or using features on this website,
                please contact me. I am happy to provide information in alternative formats or offer
                support by email or video call.
              </p>
              <p className="mt-4">
                <strong>Email:</strong> [write4abhiram@gmail.com]
                <br />
                <strong>Location:</strong> Victoria, BC, Canada
                <br />
                <strong>Hours:</strong> Monday to Friday, 9 AM to 5 PM Pacific Time
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
