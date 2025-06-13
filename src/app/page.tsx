'use client';

import Link from 'next/link';
import Head from 'next/head';
import Socials from '@/components/socials';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileIntro from '@/components/ProfileIntro';
import WorkCard from '@/components/WorkCard';
import { works } from '@/data/workData';

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
          }}
        />
      </Head>
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
        <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        {/* Header */}
        <ProfileHeader />
        <ProfileIntro />
        <Socials />

        {/* Professional Works */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Professional Works</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}

            {/* Final CTA Card */}
            <WorkCard isCTA />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
