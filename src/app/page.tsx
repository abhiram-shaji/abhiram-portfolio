'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Socials from '@/components/socials';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileIntro from '@/components/ProfileIntro';

export default function Home() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <ProfileHeader />
        <ProfileIntro />
        <Socials />
      </div>
    </section>
  );
}
