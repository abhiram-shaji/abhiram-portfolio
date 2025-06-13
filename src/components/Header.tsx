'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gists', href: '/Gists' },
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
      {/* Floating top capsule nav (for md to xl) */}
      <header
        className={`fixed top-0 left-0 w-full px-4 py-4 md:pt-15 flex items-center justify-between z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
          } 2xl:hidden`}
      >
        {/* Centered floating pill navbar */}
        <nav className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="bg-background border border-gray-200 rounded-full shadow-lg px-8 py-2 flex space-x-6 text-sm font-medium pointer-events-auto backdrop-blur-sm items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors ${pathname === item.href
                  ? 'text-teal-600 font-semibold'
                  : 'text-foreground hover:text-muted-foreground'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden ml-auto">
          {!menuOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground p-3 border border-gray-300 rounded-full bg-white/70 backdrop-blur"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={32} />
            </Button>
          )}
        </div>
      </header>

      {/* Fullscreen mobile nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background pt-20 flex flex-col items-center justify-center space-y-8 text-xl font-medium">
          {/* Close button */}
          <div className="absolute top-4 right-4 z-[61]">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground p-3 ml-auto border border-gray-300 rounded-full bg-white/70 backdrop-blur"
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
              className={`hover:underline transition-colors ${pathname === item.href ? 'text-teal-600 font-semibold' : ''
                }`}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      )}

      {/* Vertical capsule-style nav (2xl and up) */}
      <nav className="hidden 2xl:flex fixed top-1/2 left-[calc((100vw-80rem)/2-4rem)] -translate-y-1/2 z-50">
        <div className="bg-background border border-gray-200 rounded-full shadow-lg px-6 py-16 flex flex-col space-y-8 text-sm font-medium pointer-events-auto backdrop-blur-sm items-center">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors ${pathname === item.href
                  ? 'text-teal-600 font-semibold'
                  : 'text-foreground hover:text-muted-foreground'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>



    </>
  );
}
