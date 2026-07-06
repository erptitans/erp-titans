"use client";

import { ArrowRight, Check, MapPin, RefreshCw, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section id="services" className="relative pt-24 pb-10 lg:pt-28 lg:pb-12 bg-[#F8FAFC] overflow-hidden">
      {/* Background Ambient Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#003D82]/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#003D82]/5 blur-[100px]" />
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side Content */}
          <div className="max-w-2xl">

            
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-6">
              Comprehensive ERP <br className="hidden sm:block" />
              <span className="text-[#003D82]">Lifecycle Support</span>
            </h1>
            
            <p className="text-xl text-[#475569] leading-relaxed mb-8 font-medium">
              From Strategy to Recovery to Scale — We own the entire ERP journey for SMEs globally.
            </p>

            <div className="bg-white/80 backdrop-blur-md border-l-4 border-[#003D82] p-6 rounded-r-2xl mb-10 shadow-sm">
              <p className="text-[#334155] italic text-lg leading-relaxed">
                &quot;End-to-End ERP Services Built for Stability, Scalability, and Strategic Growth. Whether you&apos;re implementing Odoo for the first time or fixing a broken deployment, we ensure measurable business outcomes.&quot;
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#003D82] text-white font-semibold hover:bg-[#003D82]/90 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5">
                Explore Services
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0F172A] font-semibold hover:bg-gray-50 transition-all shadow-sm border border-gray-200 hover:border-gray-300 hover:shadow-md">
                Book ERP Audit <ArrowRight size={18} className="text-[#003D82]" />
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Journey Card */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto">
            {/* Main Card */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10">
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">The ERP Journey</h3>
                <p className="text-sm text-[#64748B]">Our proven methodology for success</p>
              </div>

              {/* Journey Nodes */}
              <div className="relative space-y-6 mb-10">
                {/* Vertical Connecting Line */}
                <div className="absolute left-[1.75rem] top-[2rem] bottom-[2rem] w-0.5 bg-gradient-to-b from-[#003D82]/10 via-[#003D82]/20 to-[#003D82]/10" />

                {[
                  { icon: MapPin, label: "Strategy", desc: "Blueprint & Planning", color: "text-[#003D82]", bg: "bg-[#003D82]/5", border: "border-[#003D82]/20" },
                  { icon: Settings, label: "Implementation", desc: "Deployment & Training", color: "text-[#003D82]", bg: "bg-[#003D82]/5", border: "border-[#003D82]/20" },
                  { icon: RefreshCw, label: "Recovery", desc: "Rescue & Optimization", color: "text-[#003D82]", bg: "bg-[#003D82]/5", border: "border-[#003D82]/20" },
                  { icon: TrendingUp, label: "Scale", desc: "Growth & Automation", color: "text-[#003D82]", bg: "bg-[#003D82]/5", border: "border-[#003D82]/20" }
                ].map((step, idx) => (
                  <div 
                    key={idx}
                    className="relative flex items-center gap-5 bg-white p-3 pr-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 transition-all group z-10"
                  >
                    <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center shrink-0 border shadow-inner ${step.bg} ${step.color} ${step.border} group-hover:scale-105 transition-transform duration-300`}>
                      <step.icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-base mb-0.5">{step.label}</h4>
                      <p className="text-[#64748B] text-xs font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Checklist */}
              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                  {[
                    "ERP Recovery",
                    "Odoo Implementation",
                    "Managed Services",
                    "Digital Transformation"
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#003D82]/5 border border-[#003D82]/20 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#003D82]" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] font-semibold text-[#334155] tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Glow Behind Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#003D82]/15 to-[#003D82]/5 blur-3xl rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
