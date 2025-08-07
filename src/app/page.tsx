// No 'use client'

export const dynamic = 'force-static';

import ShareButtons from '@/components/ShareButtons';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileIntro from '@/components/ProfileIntro';
import WorksSection from '@/components/WorksSection';

// Metadata for SEO
export const metadata = {
  title: 'Abhiram Shaji | Full Stack Developer Portfolio',
  description:
    'Explore projects and professional work by Abhiram Shaji, a full stack developer based in Victoria, BC.',
  openGraph: {
    title: 'Abhiram Shaji Portfolio',
    description: 'Showcasing development projects and experience from Abhiram Shaji.',
    images: ['/profile-img.jpg'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Abhiram Shaji',
      url: 'https://worksofabhiram.com',
      sameAs: [
        'https://www.linkedin.com/in/abhiram-kace/',
        'https://github.com/abhiram-shaji',
      ],
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
    }),
  },
};

export default function Home() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <ProfileHeader />
        <ProfileIntro />
        <ShareButtons />

        <WorksSection />
      </div>
    </section>
  );
}
