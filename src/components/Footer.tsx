'use client';

import Link from 'next/link';
import Modal from './Modal';

const footerLinks = [
  { label: 'Home', href: '/' },
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

        {/* Terms of Service Modal */}
        <Modal
          title="Terms of Service"
          trigger={<span className="hover:underline cursor-pointer">Terms of Service</span>}
        >
          <>
            <p>This website is provided solely for showcasing the work and projects of Abhiram Shaji. All content, code, and assets are for informational purposes only and may not be reused without permission.</p>
            <p>Visitors may browse and share links to this site, but copying, distributing, or modifying content without consent is prohibited.</p>
            <p>I reserve the right to update or remove any part of the site at any time without notice.</p>
            <p>By using this website, you agree to these terms of service.</p>
          </>
        </Modal>

        {/* Privacy Policy Modal */}
        <Modal
          title="Privacy Policy"
          trigger={<span className="hover:underline cursor-pointer">Privacy Policy</span>}
        >
          <>
            <p>We respect your privacy and are committed to protecting any personal information you share through this website.</p>
            <p>This portfolio does not collect personal data automatically. If you contact me through a form or email, your information will only be used to respond and will never be shared with third parties.</p>
            <p>Third-party services like GitHub or analytics tools may collect anonymized data such as browser type or page visits. You can manage such data through your browser settings.</p>
            <p>By using this website, you consent to this privacy policy.</p>
          </>
        </Modal>
      </div>

      <p className="text-xs">&copy; {new Date().getFullYear()} Abhiram Shaji. All rights reserved.</p>
    </footer>
  );
}
