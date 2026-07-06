"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Package } from "lucide-react";

export default function DistributionHero() {
  return (
    <section className="relative pt-32 lg:pt-36 pb-[80px] bg-[#F8FAFC] overflow-hidden flex items-center min-h-[calc(100vh-100px)]">
      {/* Background Ambient Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-orange-50/50 blur-[100px]" />
      </div>

      <div className="max-w-[1280px] max-w-full mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[600px] max-w-full"
          >

            
            {/* Headline */}
            <h1 className="text-[40px] md:text-[56px] font-[800] text-[#003D82] tracking-tight leading-[1.05]">
              Streamline Your <br className="hidden sm:block" />
              <span className="text-[#003D82]">
                Supply Chain.
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-[18px] text-[#475569] leading-relaxed mt-[24px] font-medium max-w-[540px] max-w-full">
              Specialized ERP recovery for distributors struggling with multi-warehouse operations, order fulfillment, and logistics coordination.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-[16px] mt-[32px]">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#003D82] text-white font-semibold hover:bg-[#003D82] transition-all shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] text-[15px]">
                Schedule Your Audit
              </Link>
              <Link href="/contact?schedule=true" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#003D82] font-semibold hover:bg-gray-50 transition-all shadow-sm border border-gray-200 text-[15px]">
                View Calendar
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full ml-auto"
          >
            {/* Main Image Container */}
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] h-[400px] lg:h-[450px] w-full">
              <Image
                src="/distribution.png"
                alt="Distribution ERP Solutions"
                fill
                className="object-cover rounded-[32px]"
                priority
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-[20px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0">
                <Package size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <p className="text-[28px] font-[800] text-[#003D82] leading-none mb-1">99.9%</p>
                <p className="text-[#64748B] text-[10px] font-bold uppercase tracking-wider">Stock Accuracy</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
