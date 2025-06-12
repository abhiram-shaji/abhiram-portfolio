// components/Modal.tsx
'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ModalProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ trigger, title, children }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground space-y-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
