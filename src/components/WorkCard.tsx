'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface WorkCardProps {
  company?: string;
  role?: string;
  logo?: string;
  onMoreInfo?: () => void;
  isCTA?: boolean;
}

export default function WorkCard({
  company,
  role,
  logo,
  onMoreInfo,
  isCTA = false,
}: WorkCardProps) {
  if (isCTA) {
    return (
      <Link
        href="/projects"
        className="flex justify-between items-center rounded-lg border p-6 shadow-md bg-card text-card-foreground hover:bg-muted transition-colors group"
      >
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            Check out personal projects
          </h3>
          <p className="text-muted-foreground">Explore more of what I've built</p>
        </div>
        <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition" />
      </Link>
    );
  }

  return (
    <div className="flex justify-between items-center rounded-lg border p-6 shadow-md bg-card text-card-foreground">
      <div>
        <h3 className="text-xl font-semibold mb-1">{company}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        <Button onClick={onMoreInfo}>More Info</Button>
      </div>

      {/* Circular Logo */}
      <div className="w-16 h-16 ml-4 flex-shrink-0 relative rounded-full overflow-hidden border border-muted">
        <Image
          src={logo || ''}
          alt={`${company} logo`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
