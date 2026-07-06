"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Proven Expertise",
    description: "Years of experience across industries and ERP platforms.",
    icon: CheckCircle,
    stat: "50+ ERP Projects",
  },
  {
    title: "Measurable Results",
    description: "Tangible business outcomes and ROI-focused delivery.",
    icon: Sparkles,
    stat: "Up to 4.8x ROI",
  },
  {
    title: "Seamless Integration",
    description: "Services designed to work together harmoniously.",
    icon: ArrowRight,
    stat: "End-to-End Support",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-10 lg:py-14 bg-white overflow-hidden">
      {/* Subtle blue gradient glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[400px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1100px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
        >

          
          {/* Large Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Why Clients Choose ERP Titans
          </h2>
          
          {/* Supporting Text */}
          <p className="text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Deep ERP expertise, measurable outcomes, and long-term business partnerships.
          </p>
        </motion.div>

        {/* 3-Column Premium Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-center bg-white rounded-[24px] p-6 lg:p-7 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300 h-full min-h-[220px] cursor-pointer relative overflow-hidden"
            >
              {/* Accent Line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Large Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100/50 group-hover:scale-110 group-hover:bg-blue-100/50 transition-all duration-300 shadow-sm shrink-0">
                <reason.icon size={24} className="text-blue-600" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {reason.title}
              </h3>
              
              <p className="text-[#64748B] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
