// app/contact/page.tsx
export const dynamic = 'force-static'; // ✅ ensures static generation

import { Mail, Coffee, Video, Calendar, Linkedin } from 'lucide-react';
import ContactHeader from '@/components/ContactHeader';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';
import BookingModal from '@/components/ui/BookingModal';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Contact Abhiram Shaji',
  description:
    'Reach out to Abhiram Shaji for project inquiries or collaboration opportunities.',
  openGraph: {
    title: 'Contact Abhiram Shaji',
    description: 'Get in touch with Abhiram Shaji via the contact options provided.',
    images: ['/profile-img.jpg'],
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-3xl flex flex-col gap-10 text-center md:text-left">
        <ContactHeader />

        <div className="space-y-6 text-muted-foreground text-base">
          <div className="flex items-start gap-4">
            <Mail className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a href="mailto:abhiramshaji.work@gmail.com" className="underline">
                abhiramshaji.work@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Linkedin className="text-primary" />
            <div>
              <p className="font-medium text-foreground">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/abhiram-kace"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/abhiram-kace
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Coffee className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Preferred Meeting</p>
              <p>
                I love in-person meetings over a coffee - casual and real. Online video
                calls are welcome too, but let’s meet in person if possible.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Calendar className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Book a Meeting</p>
              <p>Choose a time that works best for you:</p>
              <div className="mt-2">
                <BookingModalTrigger asChild>
                  <Button variant="default">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </BookingModalTrigger>
              </div>
              <BookingModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
