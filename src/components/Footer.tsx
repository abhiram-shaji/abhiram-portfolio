// components/Footer.tsx
import Link from 'next/link';
import { Home, FolderKanban, Mail, FileText, ShieldCheck, BookOpenCheck } from 'lucide-react';

export const dynamic = 'force-static';

const footerLinks = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4 mr-1 inline-block" />,
  },
  {
    label: 'Projects',
    href: '/abhiram-shaji-portfolio-projects-showcase',
    icon: <FolderKanban className="w-4 h-4 mr-1 inline-block" />,
  },
  {
    label: 'Contact',
    href: '/contact-abhiram-shaji',
    icon: <Mail className="w-4 h-4 mr-1 inline-block" />,
  },
  {
    label: 'Terms of Service',
    href: '/abhiram-shaji-portfolio-website-terms-and-conditions-of-use',
    icon: <FileText className="w-4 h-4 mr-1 inline-block" />,
  },
  {
    label: 'Privacy Policy',
    href: '/abhiram-shaji-portfolio-website-privacy-policy-and-data-protection',
    icon: <ShieldCheck className="w-4 h-4 mr-1 inline-block" />,
  },
  {
    label: 'Helpful Resources',
    href: '/helpful-resources',
    icon: <BookOpenCheck className="w-4 h-4 mr-1 inline-block" />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 px-4 py-6 text-sm text-center text-muted-foreground">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {footerLinks.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-1 hover:underline"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>

      <p className="text-xs">&copy; 2025 Abhiram Shaji. All rights reserved.</p>
    </footer>
  );
}
