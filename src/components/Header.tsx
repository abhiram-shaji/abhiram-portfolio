'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
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
    <>
      <header
        className={`fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-between z-50 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Centered floating pill navbar - Desktop */}
        <nav className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="bg-background border border-gray-200 rounded-full shadow-lg px-8 py-2 flex space-x-6 text-sm font-medium pointer-events-auto backdrop-blur-sm">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-teal-600 font-semibold'
                    : 'text-foreground hover:text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Hamburger icon (mobile) */}
        {!menuOpen && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground p-3 ml-auto"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={32} />
          </Button>
        )}
      </header>

      {/* Fullscreen mobile nav */}
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
              className={`hover:underline transition-colors ${
                pathname === item.href ? 'text-teal-600 font-semibold' : ''
              }`}
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
