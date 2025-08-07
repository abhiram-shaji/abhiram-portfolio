export const dynamic = 'force-static';

import { Mail, Coffee, Calendar, Linkedin } from 'lucide-react';
import ContactHeader from '@/components/ContactHeader';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';
import BookingModal from '@/components/ui/BookingModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Contact Abhiram Shaji',
  description: 'Reach out to Abhiram Shaji for project inquiries or collaboration opportunities.',
  openGraph: {
    title: 'Contact Abhiram Shaji',
    description: 'Get in touch with Abhiram Shaji via the contact options provided.',
    images: ['/profile-img.jpg'],
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-4xl flex flex-col gap-10 text-left">
        <ContactHeader />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <Card>
            <CardHeader className="flex items-center gap-2 text-left">
              <Mail className="text-primary" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <a
                href="mailto:abhiramshaji.work@gmail.com"
                className="underline text-lg text-muted-foreground"
              >
                write4abhiram@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card>
            <CardHeader className="flex items-center gap-2 text-left">
              <Linkedin className="text-primary" />
              <CardTitle>LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <a
                href="https://www.linkedin.com/in/abhiram-kace"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-lg text-muted-foreground"
              >
                linkedin.com/in/abhiram-kace
              </a>
            </CardContent>
          </Card>

          {/* Meeting Preference */}
          <Card className="md:col-span-2">
            <CardHeader className="flex items-center gap-2 text-left">
              <Coffee className="text-primary" />
              <CardTitle>Preferred Meeting</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-sm text-muted-foreground">
                I prefer meeting in person over a coffee, nothing beats real human connection.
                However, I’m always open to online video conferences too if that’s more convenient for you.
              </p>
            </CardContent>
          </Card>

          {/* Booking Modal */}
          <Card className="md:col-span-2">
            <CardHeader className="flex items-center gap-2 text-left">
              <Calendar className="text-primary" />
              <CardTitle>Book a Meeting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-sm text-muted-foreground">
                Use the button below to choose a time that works best for you.
              </p>
              <BookingModalTrigger />
              <BookingModal />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
