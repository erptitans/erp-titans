"use client";

import { motion } from "framer-motion";
import { Wallet, Settings2, ShieldCheck } from "lucide-react";

const audiences = [
  {
    icon: Wallet,
    title: "CFOs & Controllers",
    description: "Focused on ROI, financial controls, and reporting accuracy.",
    tag: "Finance Leadership",
  },
  {
    icon: Settings2,
    title: "COOs & Operations Heads",
    description: "Focused on efficiency, optimization, and scalable workflows.",
    tag: "Operations Leadership",
  },
  {
    icon: ShieldCheck,
    title: "ERP Managers",
    description: "Responsible for system performance and user adoption across the organization.",
    tag: "System Ownership",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhoWeServe() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Who We Serve Best
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            We work with SMEs globally that value precision and long-term stability.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {audiences.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-transparent hover:border-[#003D82]/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Blue top border accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#003D82]" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#003D82]/5 text-[#003D82] flex items-center justify-center mb-8">
                <item.icon size={26} strokeWidth={1.5} />
              </div>
              
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-4">
                {item.tag}
              </div>
              
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {item.title}
              </h3>
              
              <p className="text-[#64748B] leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
