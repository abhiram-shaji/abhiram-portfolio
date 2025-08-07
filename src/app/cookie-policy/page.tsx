// app/cookie-policy/page.tsx
import { Metadata } from 'next';
import { Cookie } from 'lucide-react';
import { Card, CardContent} from '@/components/ui/card';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Cookie Policy | Abhiram Shaji',
  description:
    'This Cookie Policy explains how cookies and similar technologies are used on this website. Learn what they are, why they’re used, and how to manage them.',
  openGraph: {
    title: 'Cookie Policy | Abhiram Shaji',
    description:
      'This Cookie Policy outlines how cookies are used on this website, including performance tracking, user preferences, and security improvements.',
    url: 'https://www.worksofabhiram.com/cookie-policy',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Cookie Policy - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Abhiram Shaji',
    description:
      'Understand how cookies are used to enhance performance, usability, and analytics on this website. Read the full Cookie Policy here.',
    images: ['/profile-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-4xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Cookie className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Cookie Policy</h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-muted-foreground text-lg leading-relaxed space-y-6">
            <p>
              This Cookie Policy explains how cookies and similar technologies are used on this
              website. By using this site, you consent to the use of cookies as described in this
              policy.
            </p>

            <div>
              <h2 className="text-lg font-semibold mb-1">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website.
                They help the website function properly and provide insights into how users interact
                with the content.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Why I Use Cookies</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Performance Tracking:</strong> To understand how users navigate the website
                  and improve user experience. I use tools like Google Analytics to collect anonymous
                  usage data including page views, time on site, and click patterns.
                </li>
                <li>
                  <strong>Functionality:</strong> To remember user preferences such as theme settings
                  or language if applicable.
                </li>
                <li>
                  <strong>Security and Debugging:</strong> Cookies may also be used to help detect
                  errors and improve site stability.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Third Party Cookies</h2>
              <p>
                Some cookies may be set by third party services such as:
                <br />
                <strong>Google Analytics:</strong> These cookies help measure website traffic and
                usage patterns. All data collected is anonymized and does not identify individual
                users.
              </p>
              <p className="mt-2">
                You can read more about how Google uses cookies here:{' '}
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  https://policies.google.com/technologies/cookies
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Managing Cookies</h2>
              <p>
                You can control or disable cookies through your browser settings. Please note that
                disabling cookies may affect the functionality of certain parts of the website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Updates to This Policy</h2>
              <p>
                This policy may be updated from time to time to reflect changes in technology or legal
                requirements. Please check this page periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Contact</h2>
              <p>
                If you have any questions about this Cookie Policy, you can contact me at:
                <br />
                <strong>Email:</strong> write4abhiram@gmail.com
                <br />
                <strong>Location:</strong> Victoria, BC, Canada
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
