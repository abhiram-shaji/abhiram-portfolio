'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  return (
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
  );
}
