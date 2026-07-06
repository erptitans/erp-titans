"use client";

import { motion } from "framer-motion";
import { Check, Shield, UserCheck, Globe, Layers, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ErpRescueProgram() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Featured Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#003D82]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[32px] p-8 sm:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,61,130,0.3)] group">
              
              {/* Shield Watermark */}
              <Shield className="absolute -top-12 -right-12 w-64 h-64 text-white/[0.03] -rotate-12 pointer-events-none" />



              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                ERP Rescue Program™
              </h2>

              <p className="text-[#94A3B8] text-[17px] leading-relaxed mb-10 max-w-lg">
                Our specialized intervention for organizations with stalled, failed, or underperforming ERP implementations. We don&apos;t just patch symptoms; we fix the foundation.
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  "Root Cause Diagnostic Audit",
                  "Data Integrity Restoration",
                  "Process Realignment",
                  "User Adoption Training"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} className="text-blue-400" />
                    </div>
                    <span className="text-gray-200 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-full bg-[#003D82] text-white font-semibold hover:bg-[#003D82]/90 transition-all shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] hover:shadow-[0_6px_20px_rgba(0,61,130,0.23)]">
                Request Recovery Audit <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Content + Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeUpVariants} className="mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-5">
                Why ERP Titans?
              </h3>
              <p className="text-[#475569] text-[17px] leading-relaxed max-w-xl">
                Most ERP failures aren&apos;t software problems—they&apos;re execution problems. We combine deep technical knowledge of Odoo and other platforms with senior-level business process expertise.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Senior Lead Only", desc: "No junior consultants. You work with experts.", icon: UserCheck, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { title: "Global Delivery", desc: "Supporting clients across North America & Europe.", icon: Globe, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
                { title: "Platform Agnostic", desc: "Odoo experts, but we fix all major ERP ecosystems.", icon: Layers, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
                { title: "Outcome Focused", desc: "We measure success by your business performance.", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUpVariants}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-[20px] border border-gray-200 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${card.bg} ${card.border} group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon size={22} strokeWidth={2} className={card.color} />
                  </div>
                  <h4 className="text-[#0F172A] font-bold text-base mb-2">{card.title}</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed flex-grow">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
