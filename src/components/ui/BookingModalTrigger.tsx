"use client";

import { useBookingModal } from "./BookingModalContext";
import { Button } from "@/components/ui/button";

export default function BookingModalTrigger() {
  const { setOpen } = useBookingModal();

  return (
    <Button variant="destructive" onClick={() => setOpen(true)}>
      Book A Meeting
    </Button>
  );
}
