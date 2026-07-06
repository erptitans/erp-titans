"use client";

import { useState } from "react";
import { Search, Database, Zap, Code, Link, Users, DollarSign, Truck, Gauge, ShieldCheck } from "lucide-react";

const servicePillars = [
  {
    id: 1,
    title: "ERP Strategy & Transformation",
    tagline: "DIAGNOSE & ASSESS",
    description: "We help organizations design ERP strategies aligned with long-term business growth, operational maturity, and digital transformation goals.",
    icon: Search
  },
  {
    id: 2,
    title: "Odoo Implementation",
    tagline: "CLEANSE & TRANSFER",
    description: "End-to-end Odoo ERP implementation services designed to align technology with operational workflows.",
    icon: Database
  },
  {
    id: 3,
    title: "ERP Rescue & Recovery",
    tagline: "ELIMINATE MANUAL WORK",
    description: "This pillar extends the flagship ERP Rescue Program™ and focuses on stabilizing underperforming ERP systems.",
    icon: Zap
  },
  {
    id: 4,
    title: "Development & Customization",
    tagline: "TAILORED SOLUTIONS",
    description: "We build scalable ERP customizations that enhance business functionality while preserving long-term system maintainability.",
    icon: Code
  },
  {
    id: 5,
    title: "ERP Integration Services",
    tagline: "CONNECT YOUR STACK",
    description: "Modern ERP environments depend on seamless system integration. We build robust integration ecosystems.",
    icon: Link
  },
  {
    id: 6,
    title: "Data, BI & Analytics",
    tagline: "DRIVE ADOPTION",
    description: "ERP systems generate massive operational data. We transform that data into decision-ready intelligence.",
    icon: Users
  },
  {
    id: 7,
    title: "AI-Driven Intelligence",
    tagline: "REAL-TIME REPORTING",
    description: "We integrate AI models into ERP systems to enable predictive decision-making and operational optimization.",
    icon: DollarSign
  },
  {
    id: 8,
    title: "Managed Services (AMS)",
    tagline: "OPTIMIZE OPERATIONS",
    description: "We provide long-term ERP support that ensures systems remain stable, secure, and continuously improving.",
    icon: Truck
  },
  {
    id: 9,
    title: "Cloud & DevOps",
    tagline: "SPEED & SCALE",
    description: "Modern ERP systems require scalable cloud infrastructure. We design and manage ERP environments on leading cloud platforms.",
    icon: Gauge
  },
  {
    id: 10,
    title: "Digital Commerce",
    tagline: "ONGOING PARTNERSHIP",
    description: "We connect ERP operations directly with customer-facing systems to enable seamless order-to-delivery workflows.",
    icon: ShieldCheck
  }
];

export default function ServicePillars() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section className="py-10 lg:py-12 bg-[#F8FAFC]">
      <div className="max-w-[1400px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            The 10 Core Service Pillars
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Each pillar represents deep expertise and proven delivery excellence across every stage of your ERP evolution.
          </p>
        </div>

        {/* 10 Pillars Grid - 3D Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
          {servicePillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="group relative h-[220px] w-full [perspective:1000px] cursor-pointer"
              onClick={() => setFlippedId(flippedId === pillar.id ? null : pillar.id)}
              onMouseLeave={() => setFlippedId(null)}
            >
              <div 
                className={`w-full h-full transition-all duration-700 [transform-style:preserve-3d] rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-2 ${flippedId === pillar.id ? '[transform:rotateY(180deg)]' : 'lg:group-hover:[transform:rotateY(180deg)]'}`}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[24px] border border-gray-800 flex flex-col p-3 sm:p-4 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-400 z-10" />
                  
                  <div className="absolute top-4 right-4 text-gray-600/20 font-bold text-2xl font-mono">
                    {pillar.id.toString().padStart(2, '0')}
                  </div>

                  <div className="flex-grow flex flex-col items-center justify-center text-center mt-2">
                    <div className="w-10 h-10 rounded-[12px] bg-blue-500/10 flex items-center justify-center mb-3 shadow-inner border border-blue-500/20">
                      <pillar.icon className="text-blue-400" size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-bold text-[14px] leading-snug mb-1.5 px-2">
                      {pillar.title}
                    </h3>
                    <p className="text-blue-400 text-[9px] font-bold tracking-widest uppercase">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[24px] border border-gray-800 flex flex-col p-3 sm:p-4 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-400 to-blue-500 z-10" />
                  
                  <div className="flex-grow flex flex-col items-center justify-center text-center">
                    <p className="text-gray-200 text-xs leading-relaxed max-w-[90%]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Hint */}
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm border border-blue-100">
            💡 Tap or hover over any pillar to view full details
          </p>
        </div>

      </div>
    </section>
  );
}
