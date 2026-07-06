"use client";

import { motion } from "framer-motion";
import { TrendingDown, Coins, EyeOff, ArrowDownRight } from "lucide-react";

export default function CostOfInaction() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const costs = [
    {
      title: "Lost Productivity",
      description: "Employees spend hours finding workarounds, entering double data, and fighting the system instead of doing their jobs.",
      icon: <TrendingDown size={24} strokeWidth={2} />,
    },
    {
      title: "Increased Operational Costs",
      description: "You're paying high licensing fees for a system that isn't delivering value, while operational efficiency plummets.",
      icon: <Coins size={24} strokeWidth={2} />,
    },
    {
      title: "Poor Visibility",
      description: "Management cannot trust the reports. Financial closes take weeks instead of days, delaying critical decisions.",
      icon: <EyeOff size={24} strokeWidth={2} />,
    },
    {
      title: "Missed Growth Opportunities",
      description: "Instead of scaling the business, your leadership team is bogged down trying to stabilize basic IT infrastructure.",
      icon: <ArrowDownRight size={24} strokeWidth={2} />,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0F172A] relative overflow-hidden" id="cost">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] max-w-full h-[500px] bg-[#003D82]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] max-w-full h-[500px] bg-[#1E293B] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-12 max-w-3xl">

          <motion.h2 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#B91C1C] mb-4 tracking-tight"
          >
            The Cost of Doing Nothing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#94A3B8] leading-relaxed"
          >
            A broken ERP doesn&apos;t just stay broken—it drains your resources every single day you ignore it.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {costs.map((cost, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#1E293B]/50 backdrop-blur-sm p-6 min-h-[180px] border border-[#334155] rounded-2xl hover:bg-[#003D82] hover:border-[#475569] transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#003D82] flex items-center justify-center mb-4 border border-[#334155] shrink-0">
                {cost.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {cost.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed font-medium line-clamp-3">
                {cost.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
