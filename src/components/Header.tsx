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

  // Detect scroll direction
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
    <>
      {/* Floating header */}
      <header
        className={`fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-between border-b border-gray-300 bg-background z-50 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link href="/" className="text-xl font-bold">
          Works of Abhiram
        </Link>

        {/* Hamburger icon (when closed) */}
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

        {/* Desktop nav */}
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

      {/* Fullscreen mobile nav menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background pt-20 flex flex-col items-center justify-center space-y-8 text-xl font-medium">
          {/* Close button */}
          <div className="absolute top-4 right-4 z-[61]">
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
      )}
    </>
  );
}
