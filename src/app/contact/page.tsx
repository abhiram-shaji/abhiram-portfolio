// app/contact/page.tsx
export const dynamic = 'force-static'; // ✅ ensures static generation

import Socials from '@/components/socials';
import ContactHeader from '@/components/ContactHeader';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Abhiram Shaji',
  description:
    'Reach out to Abhiram Shaji for project inquiries or collaboration opportunities.',
  openGraph: {
    title: 'Contact Abhiram Shaji',
    description: 'Get in touch with Abhiram Shaji via the contact form or social links.',
    images: ['/profile-img.jpg'],
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-3xl flex flex-col gap-10 text-center md:text-left">
        <ContactHeader />
        <ContactForm />

        <div>
          <p className="text-base text-muted-foreground">
            Prefer a quick meeting instead? <a href="mailto:write4abhiram@gmail.com" className="underline">Send an email</a>.
          </p>
        </div>

        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
    </section>
  );
}
