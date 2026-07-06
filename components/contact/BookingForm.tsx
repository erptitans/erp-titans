"use client";

import { motion } from "framer-motion";
import { User, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface BookingFormProps {
  disabled: boolean;
  selectedDate: Date | null;
  selectedTime: string | null;
  onSuccess: () => void;
}

export default function BookingForm({ disabled, selectedDate, selectedTime, onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time first.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add date and time to the data payload
    data.selectedDate = selectedDate.toDateString();
    data.selectedTime = selectedTime;

    try {
      const res = await fetch("/api/book-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.error || "Failed to send booking");
      }

      onSuccess();
      (e.target as HTMLFormElement).reset();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`transition-all duration-300 ${disabled ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
      {/* Divider */}
      <div className="w-full h-px bg-gray-100 my-8"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
          <div className="flex items-center gap-2 mb-6">
            <User size={16} className="text-[#003D82]" />
            <h4 className="text-[15px] font-bold text-[#003D82]">Your Details</h4>
          </div>
          
          <form className="space-y-5" onSubmit={handleAuditSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-[#003D82] mb-2">
                  Full Name <span className="text-[#003D82]">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="John Doe" 
                  className="w-full h-[48px] px-4 rounded-[12px] bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20] outline-none transition-all text-[#003D82] placeholder:text-[#94A3B8] text-sm" 
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#003D82] mb-2">
                  Email Address <span className="text-[#003D82]">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@company.com" 
                  className="w-full h-[48px] px-4 rounded-[12px] bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20] outline-none transition-all text-[#003D82] placeholder:text-[#94A3B8] text-sm" 
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-bold text-[#003D82] mb-2">
                  Phone Number <span className="text-[#003D82]">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000" 
                  className="w-full h-[48px] px-4 rounded-[12px] bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20] outline-none transition-all text-[#003D82] placeholder:text-[#94A3B8] text-sm" 
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#003D82] mb-2">
                  Company Name <span className="text-[#003D82]">*</span>
                </label>
                <input 
                  type="text" 
                  name="companyName"
                  required
                  placeholder="Acme Corp" 
                  className="w-full h-[48px] px-4 rounded-[12px] bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20] outline-none transition-all text-[#003D82] placeholder:text-[#94A3B8] text-sm" 
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting || disabled}
                className={`w-full h-[56px] flex items-center justify-center gap-2 rounded-xl bg-[#003D82] text-white font-bold transition-all text-[15px] ${isSubmitting ? "opacity-75 pointer-events-none" : "hover:bg-[#003D82] hover:-translate-y-0.5"}`}
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Confirm ERP Health Audit <ArrowRight size={18} /></>
                )}
              </button>
            </div>
          </form>
        </motion.div>
    </div>
  );
}
