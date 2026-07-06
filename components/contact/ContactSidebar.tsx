"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

interface ContactSidebarProps {
  activeTab: string;
}

export default function ContactSidebar({ activeTab }: ContactSidebarProps) {
  return (
    <motion.div 
      className="lg:col-span-4 space-y-6 w-full lg:w-[280px]"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Info Cards */}
      <div className="bg-transparent space-y-6">
        {/* Email Us */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#003D82]/5 text-[#003D82] flex items-center justify-center shrink-0 border border-[#003D82]/10">
            <Mail size={20} />
          </div>
          <div className="pt-1">
            <h4 className="text-sm font-bold text-[#0F172A] mb-1">Email Us</h4>
            <p className="text-sm text-[#64748B]">sales@erptitans.com</p>
          </div>
        </div>

        {/* Our Location */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#003D82]/5 text-[#003D82] flex items-center justify-center shrink-0 border border-[#003D82]/10">
            <MapPin size={20} />
          </div>
          <div className="pt-1">
            <h4 className="text-sm font-bold text-[#0F172A] mb-1">Our Location</h4>
            <p className="text-sm text-[#64748B]">Canada (Serving Globally)</p>
          </div>
        </div>

        {/* Response Time Card */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 mt-2 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Clock size={18} className="text-[#003D82]" />
            <h4 className="text-sm font-bold text-[#0F172A]">Mountain Time (Canada)</h4>
          </div>
          <p className="text-sm text-[#64748B] leading-relaxed">
            {activeTab === "message" ? (
              <>We typically respond within 24 hours. For urgent recovery, please mention <strong>&apos;URGENT&apos;</strong> in your message.</>
            ) : (
              <>All appointments are scheduled in Canada Time (Mountain Time). Please adjust if you are in a different time zone.</>
            )}
          </p>
        </div>
      </div>

      <div className="pt-6 pb-2">
        <div className="w-full h-px bg-gray-200"></div>
      </div>

      {/* Benefits List */}
      <div>
        <h4 className="text-base font-bold text-[#0F172A] mb-5">Why partner with us?</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm text-[#64748B] font-medium">Free initial consultation</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm text-[#64748B] font-medium">Direct access to ERP specialists</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm text-[#64748B] font-medium">Transparent recovery roadmap</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-sm text-[#64748B] font-medium">No-obligation ERP health audit</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
