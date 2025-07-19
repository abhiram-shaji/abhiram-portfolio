"use client";

import { useBookingModal } from "./BookingModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Video } from "lucide-react";

export default function BookingModal() {
  const { open, setOpen, step, setStep } = useBookingModal();

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) setStep("select");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto">
        {step === "select" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Book Your Free Appointment
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div
                onClick={() => setStep("google")}
                className="cursor-pointer border rounded-lg p-6 hover:bg-muted transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Google Meet</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Join a video call by selecting a time that works for you.
                </p>
              </div>

              <div
                onClick={() => setStep("phone")}
                className="cursor-pointer border rounded-lg p-6 hover:bg-muted transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Phone Call</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  We&apos;ll give you a call at your preferred time.
                </p>
              </div>
            </div>
          </>
        ) : step === "google" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                Choose a time for our Google Meet
              </DialogTitle>
            </DialogHeader>
            <div className="bg-white dark:bg-white rounded-md shadow-md ring-1 ring-gray-300">
              <iframe
                src="https://calendar.app.google/8K3DK5XKHTbJgvhX7"
                className="w-full h-[600px] border rounded-md"
                loading="lazy"
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                Choose a time for a Phone Call
              </DialogTitle>
            </DialogHeader>
            <div className="bg-white dark:bg-white rounded-md shadow-md ring-1 ring-gray-300">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ32_yQ80V6qntX-bKyuqajbEAQ_QLLsJe3FjQKe_6H0aB4jkcKHJc1Z-XyLon9qmCGjyYaUAKv7?gv=true"
                className="w-full h-[600px] border rounded-md"
                loading="lazy"
              ></iframe>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}