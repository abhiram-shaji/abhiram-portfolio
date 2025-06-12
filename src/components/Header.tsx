'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Github & Gists', href: 'https://github.com/yourusername' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50 || currentY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full px-4 py-4 flex items-center justify-between border-b border-gray-300 z-50 fixed top-0 left-0 bg-background transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link href="/" className="text-xl font-bold">
        Works of Abhiram
      </Link>

      {!menuOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground p-3"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={32} />
        </Button>
      )}

      <nav
        className={`fixed top-0 left-0 w-full h-full bg-background z-50 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground p-3"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </Button>
        </div>

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
