export const dynamic = 'force-static';

import Socials from '@/components/socials';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileIntro from '@/components/ProfileIntro';
import WorkCard from '@/components/WorkCard';
import { works } from '@/data/workData';

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
        <Socials />

        <div className="mt-10">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Professional Works</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
            <WorkCard isCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
