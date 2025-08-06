import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/write4abhiram@gmail.com"
      method="POST"
      className="space-y-6 w-full"
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      {/* Disable FormSubmit CAPTCHA */}
      <input type="hidden" name="_captcha" value="false" />

      <Input
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <Textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        required
      />

      <Button type="submit" className="w-full sm:w-fit">
        Send Message
      </Button>
    </form>
  );
}
