import Link from 'next/link';

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
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </div>
      <p className="text-xs">&copy; {new Date().getFullYear()} Abhiram Shaji. All rights reserved.</p>
    </footer>
  );
}
