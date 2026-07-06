"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-[#0F172A] overflow-hidden" id="audit">
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] max-w-full h-[500px] bg-[#003D82]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] max-w-full h-[400px] bg-[#003D82]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 leading-relaxed">
            Whether you need a new implementation or a rescue mission, our team is ready to deliver.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#003D82] text-white hover:bg-[#003D82] px-8 py-4 rounded-sm font-medium transition-colors shadow-lg text-center">
              Book a Consultation
            </Link>
            <Link href="/contact" className="bg-transparent border border-[#334155] text-white hover:bg-[#003D82] px-8 py-4 rounded-sm font-medium transition-colors text-center">
              Schedule ERP Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
