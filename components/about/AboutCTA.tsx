"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0F172A] overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[600px] max-w-full h-[600px] bg-[#003D82]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] max-w-full h-[500px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
            Ready to Fix Your ERP?
          </h2>
          <p className="text-xl text-[#94A3B8] mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether your ERP project is stalled, underperforming, or needs modernization, our team is ready to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#003D82] text-white hover:bg-[#003D82] px-8 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5 shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
            >
              Book Free Audit
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-[#334155] text-white hover:bg-[#1E293B] hover:border-[#475569] px-8 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
