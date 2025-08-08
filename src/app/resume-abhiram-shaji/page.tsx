// app/resume-abhiram-shaji/page.tsx
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  User,
  Download,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { resumeData } from '@/data/resumeData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Resume | Abhiram Shaji',
  description:
    'Explore the professional resume of Abhiram Shaji — full stack web and mobile developer, founder of The Digital Uplift, and former Deloitte engineer.',
  openGraph: {
    title: 'Resume | Abhiram Shaji',
    description:
      'View the complete resume of Abhiram Shaji, including experience at Deloitte, The Digital Uplift, technical stack, education, and notable project work.',
    url: 'https://www.worksofabhiram.com/resume-abhiram-shaji',
    siteName: 'Works of Abhiram',
    images: [
      {
        url: '/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Resume - Abhiram Shaji',
      },
    ],
    locale: 'en_CA',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Abhiram Shaji',
    description:
      'Full-stack developer resume for Abhiram Shaji — experience in React, Next.js, Firebase, mobile apps, SEO optimization, and scalable web systems.',
    images: ['/profile-img.jpg'],
  },
};

export default function ResumePage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl space-y-10 text-left">

        <Card>
          <CardContent className="p-6 space-y-10 text-muted-foreground">
            {/* Name & Title */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                {resumeData.name}
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Full Stack Web & Mobile Developer
              </p>
            </div>

            <Separator />

            {/* Contact Info */}
            <div className="text-sm md:text-base space-y-1">
              <p>{resumeData.address}</p>
              <p>Email: {resumeData.email} | Phone: {resumeData.phone}</p>
              <p>
                Portfolio:{' '}
                <a
                  href={resumeData.portfolio}
                  className="underline text-primary"
                  target="_blank"
                >
                  {resumeData.portfolio.replace('https://', '')}
                </a>{' '}
                | Website:{' '}
                <a
                  href={resumeData.website}
                  className="underline text-primary"
                  target="_blank"
                >
                  {resumeData.website.replace('https://', '')}
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a
                  href={resumeData.linkedin}
                  className="underline text-primary"
                  target="_blank"
                >
                  {resumeData.linkedin.replace('https://', '')}
                </a>{' '}
                | GitHub:{' '}
                <a
                  href={resumeData.github}
                  className="underline text-primary"
                  target="_blank"
                >
                  {resumeData.github.replace('https://', '')}
                </a>
              </p>
            </div>

            {/* Summary */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <CardTitle>Professional Summary</CardTitle>
              </div>
              <p className="text-sm">{resumeData.summary}</p>
            </div>

            <Separator />

            
<div className="ml-4">
  {resumeData.careerTimeline.map((item, index) => (
    <div
      key={index}
      className="mb-8 grid grid-cols-[150px_2px_1fr] gap-6 items-start"
    >
      {/* Date */}
      <div className="text-sm font-medium text-muted-foreground">
        {item.period}
      </div>

      {/* Middle Line */}
      <div className="bg-muted-foreground/30 w-[2px] h-full"></div>

      {/* Right Content */}
      <div>
        <p className="font-semibold text-foreground flex items-center gap-2">
          {item.type === 'work' ? (
            <Briefcase className="w-4 h-4 text-primary" />
          ) : (
            <GraduationCap className="w-4 h-4 text-primary" />
          )}
          {item.title}
        </p>
        {item.location && (
          <p className="text-sm italic">{item.location}</p>
        )}
        {item.institution && (
          <p className="text-sm">{item.institution}</p>
        )}
        {item.details && (
          <ul className="list-disc list-inside text-sm space-y-1 mt-1">
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ))}
</div>





            <Separator />

            {/* Projects */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <CardTitle>Projects</CardTitle>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                {resumeData.projects.map((proj, index) => (
                  <li key={index}>{proj}</li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Tech Summary */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User className="w-5 h-5 text-primary" />
                <CardTitle>Technical Summary</CardTitle>
              </div>
              <div className="text-sm space-y-2">
                <p>{resumeData.techSummary}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/14qhnVTui4Ox_uUzKiqb2HDHayFchbGiY/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="destructive">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
