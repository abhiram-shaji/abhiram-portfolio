'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  logo: string;
  alt?: string;
  linkText: string;
  link: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  logo,
  alt,
  linkText,
  link,
  github,
}: ProjectProps) {
  return (
    <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
      {/* Full background image */}
      <Image
        src={logo}
        alt={alt || title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay content */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white p-4 z-10">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mb-3">{description}</p>
        <div className="flex gap-3 flex-wrap">
          <Link href={link} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="sm">
              {linkText}
            </Button>
          </Link>
          {github && (
            <Link href={github} target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="border border-white/30"
              >
                GitHub
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
