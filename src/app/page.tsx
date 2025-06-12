'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Socials from '@/components/socials';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileIntro from '@/components/ProfileIntro';

export default function Home() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center gap-10 px-4 py-10 md:pt-20">
      <ProfileHeader />
      <ProfileIntro />
      <Socials />
    </section>
  );
}
