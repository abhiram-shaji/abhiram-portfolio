'use client';

import Link from 'next/link';
import Modal from './Modal';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Github & Gists', href: 'https://github.com/yourusername' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 mt-12 px-4 py-6 text-sm text-center text-muted-foreground">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {footerLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="hover:underline"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {label}
          </Link>
        ))}
        <Modal
          title="Terms of Service"
          trigger={<span className="hover:underline cursor-pointer">Terms of Service</span>}
        >
          <p>By using this site, you agree to the following terms and conditions...</p>
        </Modal>
        <Modal
          title="Privacy Policy"
          trigger={<span className="hover:underline cursor-pointer">Privacy Policy</span>}
        >
          <p>We respect your privacy and will not share your data without consent...</p>
        </Modal>
      </div>
      <p className="text-xs">&copy; {new Date().getFullYear()} Abhiram Shaji. All rights reserved.</p>
    </footer>
  );
}
