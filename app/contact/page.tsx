import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Us | ERP Titans",
  description: "Get in touch with ERP Titans. Whether you have a quick question or need a deep-dive audit of your ERP system, our specialists are ready to assist.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
