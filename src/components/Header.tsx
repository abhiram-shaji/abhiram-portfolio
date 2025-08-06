import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="w-full px-4 py-4 flex items-center justify-center">
      <nav>
        <ul className="flex gap-6 text-sm font-medium">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
