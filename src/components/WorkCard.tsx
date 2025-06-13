'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface WorkCardProps {
  company: string;
  role: string;
  logo: string;
  onMoreInfo: () => void;
}

export default function WorkCard({ company, role, logo, onMoreInfo }: WorkCardProps) {
  return (
    <div className="flex justify-between items-center rounded-lg border p-6 shadow-md bg-card text-card-foreground">
      <div>
        <h3 className="text-xl font-semibold mb-1">{company}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        <Button onClick={onMoreInfo}>More Info</Button>
      </div>
      <div className="w-16 h-16 ml-4 flex-shrink-0 relative">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
