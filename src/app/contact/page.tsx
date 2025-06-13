'use client';

import Socials from '@/components/socials';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-3xl flex flex-col gap-10 text-center md:text-left">
        {/* Header + Intro */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hi? Feel free to reach out via the form below or through my socials.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 w-full">
          <div>
            <Input type="text" placeholder="Your name" required />
          </div>
          <div>
            <Input type="email" placeholder="Your email" required />
          </div>
          <div>
            <Textarea placeholder="Your message..." rows={5} required />
          </div>
          <Button type="submit" className="w-full sm:w-fit">
            Send Message
          </Button>
        </form>

        {/* Socials Section */}
        <div className="flex justify-center">
          <Socials />
        </div>

      </div>
    </section>
  );
}
