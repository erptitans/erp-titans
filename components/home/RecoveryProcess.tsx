"use client";

import { motion } from "framer-motion";
import { Stethoscope, Search, Map, TrendingUp } from "lucide-react";

export default function RecoveryProcess() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const steps = [
    {
      step: "01",
      title: "ERP Health Audit",
      description: "A comprehensive diagnostic of your current system, processes, and alignment gaps. Low risk, high value.",
      icon: <Stethoscope size={24} strokeWidth={2} />,
    },
    {
      step: "02",
      title: "Root Cause Analysis",
      description: "We don't just patch symptoms. We dig deep to identify exactly why the implementation failed.",
      icon: <Search size={24} strokeWidth={2} />,
    },
    {
      step: "03",
      title: "Recovery Roadmap",
      description: "A pragmatic, phased action plan to stabilize operations and recover lost value without massive disruption.",
      icon: <Map size={24} strokeWidth={2} />,
    },
    {
      step: "04",
      title: "Optimization & Scale",
      description: "Once stabilized, we optimize workflows, reporting, and adoption to finally achieve the promised ROI.",
      icon: <TrendingUp size={24} strokeWidth={2} />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden" id="process">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">

          <motion.h2 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight"
          >
            The Path to Recovery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#475569] leading-relaxed"
          >
            We use a structured, predictable framework to turn failing systems into growth engines.
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[3rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#003D82]/10 via-[#003D82]/40 to-[#003D82]/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step Icon / Number */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E2E8F0] relative group transition-transform duration-300 hover:scale-105 hover:border-[#003D82]">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs font-bold shadow-md">
                  {step.step}
                </div>
                <div className="text-[#003D82] group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#475569] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
