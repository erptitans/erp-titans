"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Globe, Settings2, X, Check } from "lucide-react";

export default function WhyERP() {
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

  const features = [
    {
      title: "Trust-Based Approach",
      description: "We build relationships with SMEs who value expertise, accountability, and long-term results.",
      icon: <ShieldCheck size={24} strokeWidth={2} />,
    },
    {
      title: "Proven Recovery Track Record",
      description: "Specialized in fixing broken ERP implementations and recovering lost value.",
      icon: <Activity size={24} strokeWidth={2} />,
    },
    {
      title: "Canadian Expertise, Global Reach",
      description: "Headquartered in Canada, with the infrastructure to serve clients anywhere.",
      icon: <Globe size={24} strokeWidth={2} />,
    },
    {
      title: "Recovery Focused",
      description: "We specialize in fixing underperforming ERP systems.",
      icon: <Settings2 size={24} strokeWidth={2} />,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="why-us">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] max-w-full h-[600px] bg-[#003D82]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Context & Feature Cards */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
                Why ERP Titans?
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-xl">
                We&apos;re specialists, not generic implementers. We understand the nuances of ERP recovery on a global scale.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E2E8F0] hover:border-[#003D82]/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#475569] flex items-center justify-center mb-3 group-hover:bg-[#003D82] group-hover:text-[#003D82] transition-colors duration-300 border border-[#E2E8F0] group-hover:border-[#003D82]">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1.5">{feature.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Comparison Card */}
          <motion.div 
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="relative rounded-3xl p-[2px] bg-gradient-to-b from-[#003D82]/20 via-[#E2E8F0] to-[#F8FAFC] shadow-2xl h-full"
            >
              <div className="bg-white rounded-[22px] p-6 md:p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6 text-center">Why We&apos;re Different</h3>

                {/* Section 1: ERP Titans */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] flex-grow bg-[#003D82]"></div>
                    <span className="text-xs font-bold text-[#003D82] uppercase tracking-wider">ERP Titans (Recovery Specialists)</span>
                    <div className="h-[1px] flex-grow bg-[#003D82]"></div>
                  </div>
                  <ul className="space-y-3 bg-[#003D82]/5 p-5 rounded-2xl border border-[#003D82]/20">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#003D82] flex items-center justify-center text-white shadow-sm">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#0F172A] font-semibold text-sm">ERP Recovery Specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#003D82] flex items-center justify-center text-white shadow-sm">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#0F172A] font-semibold text-sm">Business Process Alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#003D82] flex items-center justify-center text-white shadow-sm">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#0F172A] font-semibold text-sm">Optimization Focused</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#003D82] flex items-center justify-center text-white shadow-sm">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#0F172A] font-semibold text-sm">Long-Term Business Outcomes</span>
                    </li>
                  </ul>
                </div>

                {/* Section 2: Generic ERP Consultants */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] flex-grow bg-[#E2E8F0]"></div>
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Generic ERP Consultants</span>
                    <div className="h-[1px] flex-grow bg-[#E2E8F0]"></div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <X size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#475569] font-medium text-sm">Focus on Software Installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <X size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#475569] font-medium text-sm">Generalist Industry Knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <X size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#475569] font-medium text-sm">One-Size-Fits-All Approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <X size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#475569] font-medium text-sm">Project Completion Focused</span>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
