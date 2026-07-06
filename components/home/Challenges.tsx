"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, Clock, Users, PackageX, GitMerge, Settings } from "lucide-react";

export default function Challenges() {
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

  const symptoms = [
    {
      title: "Teams Still Using Excel",
      description: "Employees revert to manual spreadsheets because the ERP is too hard to use or lacks functionality.",
      icon: <FileSpreadsheet size={24} strokeWidth={2} />,
    },
    {
      title: "Reporting Delays",
      description: "It takes days to assemble reports, meaning decisions are made on outdated or inaccurate data.",
      icon: <Clock size={24} strokeWidth={2} />,
    },
    {
      title: "Poor User Adoption",
      description: "Staff avoid the system, leading to shadow IT, workarounds, and massive data silos.",
      icon: <Users size={24} strokeWidth={2} />,
    },
    {
      title: "Inventory Inaccuracies",
      description: "Physical stock doesn't match system records, causing stockouts or excess holding costs.",
      icon: <PackageX size={24} strokeWidth={2} />,
    },
    {
      title: "Process Bottlenecks",
      description: "Workflows are slower now than before the implementation, destroying operational efficiency.",
      icon: <GitMerge size={24} strokeWidth={2} />,
    },
    {
      title: "Customization Issues",
      description: "Heavy customizations have made the system brittle, impossible to upgrade, and expensive to maintain.",
      icon: <Settings size={24} strokeWidth={2} />,
    },
  ];

  return (
    <section className="pt-2 pb-8 md:pt-8 md:pb-10 bg-[#F8FAFC] relative overflow-hidden" id="challenges">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">

          <motion.h2 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight"
          >
            Is Your ERP Showing These Signs?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#475569] leading-relaxed"
          >
            Most ERP problems don&apos;t start with the software—they start with misaligned processes and poor implementation.
          </motion.p>
        </div>

        {/* 6-Card Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {symptoms.map((symptom, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-white p-6 min-h-[220px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-[#003D82]/30 transition-all duration-300 flex flex-col items-start"
              style={{ borderRadius: "20px" }}
            >
              {/* Subtle hover glow inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003D82]/0 to-[#003D82]/0 group-hover:from-[#003D82]/[0.02] group-hover:to-transparent transition-colors duration-300 pointer-events-none" style={{ borderRadius: "20px" }}></div>
              
              <div className="w-12 h-12 rounded-[14px] bg-[#003D82] text-white flex items-center justify-center mb-5 border border-[#003D82] group-hover:bg-[#003D82] group-hover:text-white group-hover:border-[#003D82] transition-colors duration-300 shadow-sm shrink-0">
                {symptom.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#003D82] transition-colors duration-300">
                {symptom.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed font-medium">
                {symptom.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
