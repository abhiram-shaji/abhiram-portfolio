'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: [string, string, Record<string, unknown>]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-R858YCWC8P', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
