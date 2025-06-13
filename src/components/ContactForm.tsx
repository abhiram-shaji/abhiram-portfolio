'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // anti-spam field
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: if bot fills hidden field
    if (formData.honeypot) return;

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('https://formsubmit.co/ajax/write4abhiram@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success === 'true') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        throw new Error('FormSubmit failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Hidden honeypot field */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        value={formData.honeypot}
        onChange={handleChange}
        autoComplete="off"
      />

      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Your message..."
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full sm:w-fit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && <p className="text-green-600">✅ Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-600">⚠️ Please check the form and try again.</p>}
    </form>
  );
}
