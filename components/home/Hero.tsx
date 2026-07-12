"use client";

import { ArrowRight, Check, Search, Wrench, Zap, TrendingUp, Activity, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-12 bg-[#F8FAFC]" id="home">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-left">


            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-[#003D82]">
              Fix Your Broken ERP. <br />
              <span className="text-[#003D82]">Scale Your Business.</span>
            </h1>

            <p className="text-xl text-[#475569] mb-10 leading-relaxed max-w-lg">
              Your ERP implementation didn&apos;t go as planned. We help SMEs globally recover from failed systems, fix broken processes, and finally unlock the ROI you were promised.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
              <Link href="/contact" className="bg-[#0F172A] hover:bg-[#003D82] text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-md">
                Get ERP Health Audit <ArrowRight size={18} />
              </Link>
              <a href="#process" className="bg-white border-2 border-[#CBD5E1] hover:border-[#94A3B8] text-[#0F172A] px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center">
                Learn Our Process
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-semibold text-[#475569]">
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[#003D82]" strokeWidth={3} />
                <span>ERP Recovery Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[#003D82]" strokeWidth={3} />
                <span>Global Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-[#003D82]" strokeWidth={3} />
                <span>Canadian Based</span>
              </div>
            </div>
          </div>

          {/* Right Visual - ERP Recovery Framework Card */}
          <div className="relative w-full hidden lg:block">
            {/* Soft background shadow/glow to separate from background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#003D82]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative bg-white border border-[#E2E8F0] p-8 lg:p-10 rounded-xl shadow-2xl z-10">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-6 mb-6">
                <div>
                  <h3 className="text-[#0F172A] font-bold text-xl tracking-tight">ERP Recovery Framework</h3>
                  <p className="text-[#64748B] text-sm mt-1">Our proven methodology for system optimization</p>
                </div>
                <div className="p-2 bg-[#003D82] rounded-lg text-white">
                  <Activity size={24} />
                </div>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#003D82] text-white flex items-center justify-center border border-[#003D82]">
                    <Search size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0F172A] font-semibold text-[15px] mb-1">Diagnose</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">Identify ERP bottlenecks and implementation failures.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#003D82] text-white flex items-center justify-center border border-[#003D82]">
                    <Wrench size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0F172A] font-semibold text-[15px] mb-1">Recover</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">Fix broken workflows and system inefficiencies.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#003D82] text-white flex items-center justify-center border border-[#003D82]">
                    <Zap size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0F172A] font-semibold text-[15px] mb-1">Optimize</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">Improve reporting, automation, and data integrity.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#003D82] text-white flex items-center justify-center border border-[#003D82]">
                    <TrendingUp size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#0F172A] font-semibold text-[15px] mb-1">Scale</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">Build a stable foundation for future growth.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics */}
              <div className="mt-8 pt-6 border-t border-[#F1F5F9] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] rounded-lg p-4 border border-[#E2E8F0]">
                  <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1">System Health</p>
                  <p className="text-2xl font-bold text-[#0F172A]">99.8% <span className="text-sm font-medium text-[#003D82]">Optimized</span></p>
                </div>
                <div className="bg-[#0F172A] rounded-lg p-4 border border-[#0F172A] text-white">
                  <div className="flex justify-between items-start">
                    <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-1">Average ROI</p>
                    <BarChart3 size={16} className="text-[#003D82]" />
                  </div>
                  <p className="text-2xl font-bold">4.8x</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

