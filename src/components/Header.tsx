'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import ActivePill from './ActivePill';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top capsule nav for md-xl */}
      <header className="fixed top-0 left-0 w-full px-4 py-4 md:pt-15 flex items-center justify-between z-50 2xl:hidden">
        <nav className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="relative bg-background border border-gray-200 rounded-full shadow-lg px-8 py-2 flex space-x-6 text-sm font-medium pointer-events-auto backdrop-blur-sm items-center">
            {typeof window !== 'undefined' &&
              menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.label} href={item.href} className="relative px-4 py-2 rounded-full">
                    {isActive && <ActivePill />}
                    <span
                      className={`relative z-10 transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-foreground'
                        }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}

            <ThemeToggle />
          </div>
        </nav>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden ml-auto">
          {!menuOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground p-3 border border-gray-300 rounded-full bg-teal-600/70 backdrop-blur"
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
          <div className="absolute top-4 right-4 z-[61]">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground p-3 ml-auto border border-gray-300 rounded-full bg-teal-600/70 backdrop-blur"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </Button>
          </div>

          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="relative px-4 py-2 rounded-full">
                {isActive && <ActivePill />}
                <span
                  className={`relative z-10 transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-foreground'
                    }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      )}

      {/* Vertical capsule nav for 2xl+ */}
      <nav className="hidden 2xl:flex fixed top-1/2 left-[calc((100vw-80rem)/2-4rem)] -translate-y-1/2 z-50">
        <div className="relative bg-background border border-gray-200 rounded-full shadow-lg px-6 py-16 flex flex-col space-y-8 text-sm font-medium pointer-events-auto backdrop-blur-sm items-center">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href} className="relative px-4 py-2 rounded-full">
                {isActive && <ActivePill />}
                <span
                  className={`relative z-10 transition-colors ${isActive ? 'text-teal-600 font-semibold' : 'text-foreground'
                    }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
