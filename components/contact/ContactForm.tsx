"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Calendar, 
  Send,
  Loader2,
  CheckCircle2
} from "lucide-react";
import ContactSidebar from "./ContactSidebar";
import BookingCalendar from "./BookingCalendar";
import TimeSlotPicker from "./TimeSlotPicker";
import BookingForm from "./BookingForm";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("message");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (searchParams.get("schedule") === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab("meeting");
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [searchParams]);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.error || "Failed to send");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            How Can We Help?
          </h1>
          <p className="text-lg text-[#64748B] leading-relaxed mb-8">
            Whether you have a quick question or need a deep-dive audit of your ERP system, our specialists are ready to assist.
          </p>

          {/* Toggle Buttons */}
          <div className="inline-flex items-center p-1.5 bg-white rounded-full shadow-sm border border-gray-200 relative">
            <button
              onClick={() => setActiveTab("message")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${
                activeTab === "message"
                  ? "text-[#003D82]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <MessageSquare size={16} /> Send a Message
            </button>
            <button
              onClick={() => setActiveTab("meeting")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${
                activeTab === "meeting"
                  ? "text-[#003D82]"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Calendar size={16} /> Let&apos;s Discuss Your ERP
            </button>
            {/* Animated Tab Background */}
            <div 
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#F8FAFC] rounded-full shadow-sm border border-gray-100 transition-transform duration-300 ease-out z-0"
              style={{ transform: activeTab === "message" ? "translateX(0%)" : "translateX(100%)", left: "6px" }}
            />
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDEBAR (30%) */}
          <ContactSidebar activeTab={activeTab} />

          {/* RIGHT CONTACT FORM (70%) */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              
              {/* ====================================================== */}
              {/* MESSAGE FORM */}
              {/* ====================================================== */}
              {activeTab === "message" && (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                >
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-24"
                    >
                      <div className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="text-[#22C55E]" size={40} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[28px] font-bold text-[#003D82] mb-3">
                        ✓ Message Sent Successfully
                      </h3>
                      <p className="text-[#64748B] text-[16px] leading-relaxed">
                        Thank you for reaching out.<br/>
                        Our team will contact you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Send Us a Message</h3>
                      
                      <form className="space-y-6" onSubmit={handleContactSubmit}>
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Full Name <span className="text-[#003D82]">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Email Address <span className="text-[#003D82]">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Phone Number <span className="text-[#003D82]">*</span>
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Company Name <span className="text-[#003D82]">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="companyName"
                          required
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Industry <span className="text-[#003D82]">*</span>
                        </label>
                        <select name="industry" required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] appearance-none">
                          <option value="" disabled>Select Industry</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="distribution">Distribution</option>
                          <option value="cannabis">Cannabis</option>
                          <option value="retail">Retail</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="construction">Construction</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Current ERP System
                        </label>
                        <input 
                          type="text" 
                          name="erpSystem"
                          placeholder="e.g. Odoo, SAP, NetSuite"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        How can we help? <span className="text-[#003D82]">*</span>
                      </label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your current ERP challenges..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:border-[#003D82] focus:bg-white focus:ring-2 focus:ring-[#003D82]/20 outline-none transition-all text-[#0F172A] placeholder:text-gray-400 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#003D82] text-white font-semibold hover:bg-[#003D82] transition-all shadow-md hover:shadow-lg ${isSubmitting ? "opacity-75 pointer-events-none" : "hover:-translate-y-0.5"}`}
                      >
                        {isSubmitting ? (
                          <>Sending... <Loader2 size={16} className="ml-1 animate-spin" /></>
                        ) : (
                          <>Send Message <Send size={16} className="ml-1" /></>
                        )}
                      </button>
                    </div>
                  </form>
                  </motion.div>
                  )}
                </motion.div>
              )}


              {/* ====================================================== */}
              {/* MEETING FORM */}
              {/* ====================================================== */}
              {activeTab === "meeting" && (
                <motion.div
                  key="meeting"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100"
                >
                  {isBookingSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="text-[#22C55E]" size={40} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[28px] font-bold text-[#003D82] mb-3">
                        ✓ Message Sent Successfully
                      </h3>
                      <p className="text-[#64748B] text-[16px] leading-relaxed">
                        Thank you for scheduling your ERP Health Audit.<br/>
                        Check your email for the Microsoft Teams link!
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-[22px] font-bold text-[#003D82] mb-8">Book Your ERP Health Audit</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <BookingCalendar 
                          selectedDate={selectedDate} 
                          onSelectDate={setSelectedDate} 
                        />
                        
                        <TimeSlotPicker 
                          selectedTime={selectedTime} 
                          onSelectTime={setSelectedTime} 
                          disabled={!selectedDate} 
                        />
                      </div>
                      
                      <BookingForm 
                        disabled={!selectedTime} 
                        selectedDate={selectedDate}
                        selectedTime={selectedTime}
                        onSuccess={() => setIsBookingSuccess(true)}
                      />
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
