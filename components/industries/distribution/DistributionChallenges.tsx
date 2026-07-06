"use client";

import { motion } from "framer-motion";
import { Globe, PackageOpen, Truck, Users, BarChart4, PieChart } from "lucide-react";

const challenges = [
  {
    icon: Globe,
    title: "Multi-Warehouse Chaos",
    description: "Inventory visibility across locations is a nightmare. Stock levels are inaccurate, and transfers are manual."
  },
  {
    icon: PackageOpen,
    title: "Order Fulfillment Delays",
    description: "Orders aren't automatically routed. Manual picking and packing processes cause constant errors."
  },
  {
    icon: Truck,
    title: "Logistics Disconnects",
    description: "Shipping, tracking, and carrier management aren't integrated. Manual processes create delays."
  },
  {
    icon: Users,
    title: "Customer Order Visibility",
    description: "Customers can't track orders in real-time. Your team can't provide accurate status updates."
  },
  {
    icon: BarChart4,
    title: "Inventory Imbalances",
    description: "Slow-moving inventory piles up while fast-moving items are out of stock elsewhere."
  },
  {
    icon: PieChart,
    title: "Reporting Gaps",
    description: "No visibility into warehouse performance or logistics costs. Decisions are based on guesswork."
  }
];

export default function DistributionChallenges() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-[40px] md:text-[48px] font-[800] text-[#003D82] leading-[1.1] mb-6">
            Distribution Bottlenecks
          </h2>
          <p className="text-[18px] text-[#64748B] font-medium">
            We fix the operational gaps that slow down your fulfillment and hurt customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#F8FAFC] border border-gray-100 flex items-center justify-center mb-4 text-[#003D82]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-[16px] font-bold text-[#003D82] mb-2">
                  {challenge.title}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-snug font-medium">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
