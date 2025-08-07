// app/helpful-resources/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ExternalLink,
  Lightbulb,
  MousePointerClick,
  Rocket,
  Gauge,
  Code2,
  ServerCog,
  Globe,
  LayoutDashboard,
  HelpCircle,
  CalendarCheck2,
  BarChart3,
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Helpful Resources | Abhiram Shaji',
  description:
    'Explore all helpful resource pages including SEO tips, services, portfolio highlights, and answers to frequently asked questions.',
  alternates: {
    canonical: 'https://www.worksofabhiram.com/helpful-resources',
  },
};

const pages = [
  {
    title: 'Hire Full Stack Developer in Victoria BC',
    href: '/hire-full-stack-developer-victoria-bc',
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Trusted React & Node.js Developer',
    href: '/trusted-react-nodejs-developer',
    icon: <ServerCog className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Lighthouse 100 Score Web Apps',
    href: '/lighthouse-100-score-web-apps',
    icon: <Gauge className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Freelance Website Developer in BC',
    href: '/freelance-website-developer-bc',
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: 'High Performance Web Apps Portfolio',
    href: '/high-performance-web-apps-portfolio',
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Conversion Focused Frontend Developer',
    href: '/conversion-focused-frontend-developer',
    icon: <MousePointerClick className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Lighthouse Optimization Services',
    href: '/lighthouse-optimization-services',
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Digital Design & Development in Victoria BC',
    href: '/digital-design-development-victoria',
    icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Hiring a Freelance Developer – FAQ',
    href: '/hiring-freelance-developer-faq',
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Book Free Developer Consultation',
    href: '/book-free-developer-consultation',
    icon: <CalendarCheck2 className="w-6 h-6 text-primary" />,
  },
];

export default function HelpfulResourcesPage() {
  return (
        <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Lightbulb className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Helpful Resources</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore valuable resources on full-stack development, SEO, performance optimization,
            portfolio work, and more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pages.map(({ title, href, icon }) => (
            <Card key={href} className="hover:bg-muted/30 transition-colors">
              <Link href={href}>
                <CardHeader className="flex flex-row items-center gap-4 cursor-pointer">
                  {icon}
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <ExternalLink className="ml-auto w-5 h-5 text-muted-foreground" />
                </CardHeader>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
