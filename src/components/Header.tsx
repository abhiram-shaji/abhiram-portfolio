'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming ShadCN setup
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Github & Gists', href: 'https://github.com/yourusername' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between border-b border-gray-300 z-50 relative">
      <Link href="/" className="text-xl font-bold">
        Works of Abhiram
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Fullscreen Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-background z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:underline"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
