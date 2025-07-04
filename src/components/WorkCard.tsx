'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Modal from '@/components/Modal';

interface WorkCardProps {
  company?: string;
  role?: string;
  logo?: string;
  alt?: string;
  modalContent?: React.ReactNode;
  isCTA?: boolean;
}

export default function WorkCard({
  company,
  role,
  logo,
  alt,
  modalContent,
  isCTA = false,
}: WorkCardProps) {
  if (isCTA) {
    return (
      <div className="rounded-lg border p-6 shadow-md bg-card text-card-foreground hover:bg-muted transition-colors">
        <Link
          href="/projects"
          className="flex justify-between items-center w-full h-full group"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              Check out other projects
            </h3>
            <p className="text-muted-foreground">Explore more of what I’ve built</p>
          </div>
          <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-start sm:items-center rounded-lg border p-6 shadow-md bg-card text-card-foreground">
      {/* Left Side: Text */}
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-1">{company}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        {modalContent && (
          <Modal
            title={`${company} — ${role}`}
            trigger={<Button>More Info</Button>}
          >
            {modalContent}
          </Modal>
        )}
      </div>

      {/* Right Side: Logo */}
      <div className="w-16 h-16 ml-4 flex-shrink-0 relative rounded-full overflow-hidden border border-muted">
        <Image
          src={logo || ''}
          alt={alt || `${company} logo`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
