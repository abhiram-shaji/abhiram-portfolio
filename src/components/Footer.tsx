import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/abhiram-shaji-portfolio-projects-showcase' },
  { label: 'Contact', href: '/contact-abhiram-shaji' },
  {
    label: 'Terms of Service',
    href: '/abhiram-shaji-portfolio-website-terms-and-conditions-of-use',
  },
  {
    label: 'Privacy Policy',
    href: '/abhiram-shaji-portfolio-website-privacy-policy-and-data-protection',
  },
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
      </div>

      <p className="text-xs">&copy; 2025 Abhiram Shaji. All rights reserved.</p>
    </footer>
  );
}
