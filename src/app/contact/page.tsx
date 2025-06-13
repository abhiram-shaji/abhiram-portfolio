'use client';

import Socials from '@/components/socials';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-3xl flex flex-col gap-10 text-center md:text-left">
        <ContactHeader />
        <ContactForm />
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
    </section>
  );
}
