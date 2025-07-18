import BookingModalTrigger from "@/components/ui/BookingModalTrigger";
import BookingModal from "@/components/ui/BookingModal";

export default function ContactHeader() {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        Have a question, project idea, or just want to say hi? Feel free to reach out via the form below or through my socials.
      </p>

      <p className="mt-6 text-base text-muted-foreground">
        Prefer a quick meeting instead? Book a time that works for you:
      </p>

      <div className="mt-4">
        <BookingModalTrigger />
      </div>

      <BookingModal />
    </div>
  );
}
