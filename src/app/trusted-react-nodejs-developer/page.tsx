// app/trusted-react-nodejs-developer/page.tsx
import { Metadata } from 'next';
import { ServerCog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Trusted React & Node.js Developer | Abhiram Shaji',
  description:
    'Need a reliable React and Node.js developer? Abhiram Shaji builds scalable, SEO-optimized apps using Docker, Redis, GraphQL, and more. Trusted by clients for performance and elegance.',
  openGraph: {
    title: 'Trusted React & Node.js Developer | Abhiram Shaji',
    description:
      'Hire Abhiram Shaji for fast, secure, scalable web applications using React, Node.js, GraphQL, and modern dev stacks. Trusted by businesses for quality and SEO results.',
    url: 'https://www.worksofabhiram.com/trusted-react-nodejs-developer',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhiram Shaji - React Node.js Developer',
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
    title: 'Trusted React & Node.js Developer | Abhiram Shaji',
    description:
      'Get clean, scalable web apps built by a trusted React and Node.js developer. High SEO scores, seamless UX, and real-time performance.',
    images: ['/profile-img.jpg'],
  },
  alternates: {
    canonical: 'https://www.worksofabhiram.com/trusted-react-nodejs-developer',
  },
};

export default function TrustedReactNodePage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <ServerCog className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Trusted React & Node.js Developer
          </h1>
        </div>

        <Card className="bg-muted/50 border shadow-md">
          <CardContent className="p-6 text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              As a trusted React and Node.js developer, I deliver highly optimized web applications
              that are scalable, secure, and easy to maintain.
            </p>
            <p className="mb-4">
              I use the latest tools and best practices to ensure clean, modular code and seamless
              performance across all devices.
            </p>
            <p className="mb-4">
              Whether you need a custom dashboard, a real-time data platform, or an eCommerce
              solution, I can architect and build the entire stack using technologies like Redis,
              GraphQL, Docker, and more.
            </p>
            <p className="mb-4">
              Clients trust me for my ability to turn complex requirements into fast, elegant web
              apps that perform consistently and scale smoothly.
            </p>
            <p>
              My focus on performance and SEO helps ensure that your users, and search engines to
              get the best possible experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
