"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Truck, Zap } from "lucide-react";

export default function DistributionSolutions() {
  const cards = [
    {
      title: "Multi-Warehouse Management",
      items: ["Real-time Sync", "Auto Reorder Points", "Internal Transfers"]
    },
    {
      title: "Fulfillment Optimization",
      items: ["Smart Routing", "Split Shipments", "Status Tracking"]
    },
    {
      title: "Logistics Integration",
      items: ["Carrier API Sync", "Rate Shopping", "Returns Management"]
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Features Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 w-full"
          >
            <div className="mb-4">

              <h2 className="text-[40px] md:text-[48px] font-[800] text-[#003D82] leading-[1.1] mb-6">
                Optimized Supply<br />Chain Solutions
              </h2>
              <p className="text-[18px] text-[#64748B] font-medium leading-relaxed max-w-lg">
                We integrate your ERP with carrier systems, customer portals, and warehouse management systems for a seamless operation.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {cards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col w-full"
                >
                  <h4 className="text-[16px] font-[800] text-[#003D82] mb-5">{card.title}</h4>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[13px] text-[#64748B] font-medium">
                        <CheckCircle2 size={16} className="text-[#F97316] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Highlighted Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:ml-auto lg:pt-20"
          >
            {/* Highlighted Dark Blue Card */}
            <div className="bg-[#003D82] p-8 md:p-12 rounded-[32px] shadow-[0_20px_40px_-10px_rgba(0,61,130,0.3)] flex flex-col gap-8 w-full max-w-lg mx-auto lg:mx-0">
              <h3 className="text-[28px] font-[800] text-white leading-tight">
                Why Distributors Choose Us
              </h3>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[12px] bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0">
                    <Truck size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white mb-2">
                      Operational Focus
                    </h4>
                    <p className="text-[14px] text-white/80 font-medium leading-relaxed">
                      We optimize for what matters most: fast fulfillment and accurate inventory.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-[12px] bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0">
                    <Zap size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white mb-2">
                      Seamless Integration
                    </h4>
                    <p className="text-[14px] text-white/80 font-medium leading-relaxed">
                      Direct carrier system and customer portal integration for real-time updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
