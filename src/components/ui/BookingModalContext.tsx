"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Step = "select" | "google" | "phone";

interface BookingModalContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  step: Step;
  setStep: Dispatch<SetStateAction<Step>>;
}

const BookingModalContext = createContext<BookingModalContextType | null>(null);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) throw new Error("useBookingModal must be used within provider");
  return context;
};

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("select");

  return (
    <BookingModalContext.Provider value={{ open, setOpen, step, setStep }}>
      {children}
    </BookingModalContext.Provider>
  );
}
