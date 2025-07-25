'use client';

import Socials from '@/components/socials';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
import BookingModalTrigger from "@/components/ui/BookingModalTrigger";
import BookingModal from "@/components/ui/BookingModal";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Abhiram Shaji</title>
        <meta
          name="description"
          content="Reach out to Abhiram Shaji for project inquiries or collaboration opportunities."
        />
        <meta property="og:title" content="Contact Abhiram Shaji" />
        <meta
          property="og:description"
          content="Get in touch with Abhiram Shaji via the contact form or social links."
        />
        <meta property="og:image" content="/profile-img.jpg" />
      </Head>
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-3xl flex flex-col gap-10 text-center md:text-left">
        <ContactHeader />
        <ContactForm />

<div>
            <p className="text-base text-muted-foreground">
        Prefer a quick meeting instead? Book a time that works for you:
      </p>

      <div className="mt-4">
        <BookingModalTrigger />
      </div>

      <BookingModal />
      </div>

        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
      </section>
    </>
  );
}
