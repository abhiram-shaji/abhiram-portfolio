// components/ActivePill.tsx
'use client';

import { motion } from 'framer-motion';

export default function ActivePill() {
  return (
    <motion.div
      layoutId="active-pill"
      className="absolute inset-0 rounded-full bg-teal-600/10 border border-teal-600 shadow-[0_8px_24px_rgba(13,148,136,0.3)]"
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  );
}
