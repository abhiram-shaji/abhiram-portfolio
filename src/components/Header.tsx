'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/abhiram-shaji-portfolio-projects-showcase' },
  { label: 'Contact', href: '/contact-abhiram-shaji' },
  { label: 'Resume', href: '/resume-abhiram-shaji' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top capsule nav for md-xl */}
      <header className="fixed top-0 left-0 w-full px-4 py-4 md:pt-15 flex items-center justify-between z-50 2xl:hidden">
        <nav className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
          <div className="relative bg-white/90 dark:bg-black/50 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg px-8 py-2 flex space-x-6 text-sm font-medium pointer-events-auto backdrop-blur-sm items-center">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative px-4 py-2 rounded-full transition-colors duration-300 text-gray-800 dark:text-white group-hover:text-white`}
                >
                  <span
                    className={`absolute inset-0 rounded-full -z-10 transition-all duration-300 ${isActive
                      ? 'bg-teal-600/50 opacity-100 scale-100'
                      : 'bg-teal-600/50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                      }`}
                  />
                  <span className="relative z-10">{item.label}</span>
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
              className="ml-auto bg-teal-600 text-white border border-gray-300 dark:border-gray-700 rounded-full backdrop-blur flex items-center justify-center h-12 w-12 p-0"
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
        <div className="fixed inset-0 z-[60] bg-white dark:bg-black pt-20 flex flex-col items-center justify-center space-y-8 text-xl font-medium">
          <div className="absolute top-4 right-4 z-[61]">
            <Button
              variant="ghost"
              className="col ml-auto border border-gray-300 text-red-600 dark:border-gray-700 rounded-full backdrop-blur flex items-center justify-center h-12 w-12 p-0"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={48}/>
            </Button>

          </div>

          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`group relative px-4 py-2 rounded-full transition-colors duration-300 text-gray-800 dark:text-white group-hover:text-white`}
              >
                <span
                  className={`absolute inset-0 rounded-full -z-10 transition-all duration-300 ${isActive
                    ? 'bg-teal-600/50 opacity-100 scale-100'
                    : 'bg-teal-600/50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      )}

      {/* Vertical capsule nav for 2xl+ */}
      <nav className="hidden 2xl:flex fixed top-1/2 left-[calc((100vw-80rem)/2-4rem)] -translate-y-1/2 z-50">
        <div className="relative bg-white/90 dark:bg-black/50 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg px-6 py-16 flex flex-col space-y-8 text-sm font-medium pointer-events-auto backdrop-blur-sm items-center">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative px-4 py-2 rounded-full transition-colors duration-300 text-gray-800 dark:text-white group-hover:text-white`}
              >
                <span
                  className={`absolute inset-0 rounded-full -z-10 transition-all duration-300 ${isActive
                    ? 'bg-teal-600/50 opacity-100 scale-100'
                    : 'bg-teal-600/50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
