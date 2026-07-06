"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield, Sparkles, TrendingUp, Earth } from "lucide-react";

const values = [
  {
    title: "Trust Over Cost",
    description: "Relationships built on transparency, not just price.",
    icon: Shield,
  },
  {
    title: "Specialization",
    description: "Deep focus on recovery, not being everything to everyone.",
    icon: Sparkles,
  },
  {
    title: "Results First",
    description: "We measure success by real business outcomes.",
    icon: TrendingUp,
  },
  {
    title: "Global Reach",
    description: "Canadian-based expertise with the infrastructure to serve you anywhere.",
    icon: Earth,
  },
];

export default function AboutIntro() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-[1200px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight"
          >
            We Are ERP Recovery <br className="hidden md:block" /> Specialists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#64748B] leading-relaxed"
          >
            We bridge the gap between business reality and ERP capability. Our team of senior consultants, developers, and architects fix broken implementations and build scalable foundations for SME growth.
          </motion.p>
        </div>

        {/* Two Column Layout: Story (40%) + Values (60%) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* Left: Our Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 border-l-4 border-l-[#003D82] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#003D82]" size={26} strokeWidth={2.5} />
              <h2 className="text-2xl font-bold text-[#0F172A]">Our Story</h2>
            </div>
            
            <div className="space-y-6 text-[#64748B] text-[15px] leading-relaxed flex-grow">
              <p>
                ERP Titans was founded with a clear mission: to help SMEs recover from failed ERP implementations and unlock the true value of their systems.
              </p>
              <p>
                We&apos;ve seen too many companies burnt by generic ERP implementers who promised the world but delivered systems that didn&apos;t match their business needs.
              </p>
              <p>
                We decided to do things differently. We focus exclusively on ERP recovery—fixing broken implementations and helping companies scale.
              </p>
            </div>
          </motion.div>

          {/* Right: Core Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[60%] flex flex-col"
          >
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center lg:text-left">Our Core Values</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 flex-grow">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-transparent hover:border-[#003D82]/20 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group"
                >
                  {/* Top blue border accent */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#003D82]" />
                  
                  <div className="w-14 h-14 rounded-full bg-[#003D82]/5 text-[#003D82] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#003D82] group-hover:text-white transition-all duration-300">
                    <val.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[17px] font-bold text-[#0F172A] mb-3">
                    {val.title}
                  </h3>
                  
                  <p className="text-[#64748B] text-[14px] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
