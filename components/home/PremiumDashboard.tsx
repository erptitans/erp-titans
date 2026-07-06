"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Package,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Activity,
  Server,
  Database,
  RefreshCw,
  ShieldCheck,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- Mock Data ---

const performanceData = [
  { month: "Jan", performance: 65 },
  { month: "Feb", performance: 68 },
  { month: "Mar", performance: 75 },
  { month: "Apr", performance: 82 },
  { month: "May", performance: 80 },
  { month: "Jun", performance: 88 },
  { month: "Jul", performance: 90 },
  { month: "Aug", performance: 92 },
  { month: "Sep", performance: 94 },
  { month: "Oct", performance: 95 },
  { month: "Nov", performance: 98 },
  { month: "Dec", performance: 99 },
];

const productionData = [
  { name: "Mfg", current: 85, target: 90 },
  { name: "Inv", current: 98, target: 95 },
  { name: "Supply", current: 92, target: 90 },
  { name: "Fin", current: 99, target: 100 },
  { name: "QA", current: 96, target: 95 },
];

const inventoryData = [
  { name: "Raw Materials", value: 45 },
  { name: "WIP", value: 20 },
  { name: "Finished Goods", value: 35 },
];

const COLORS = ["#003D82", "#003D82", "#003D82"];

const activityFeed = [
  { time: "10:42 AM", action: "Inventory Synced ✓" },
  { time: "09:15 AM", action: "Production Updated ✓" },
  { time: "08:30 AM", action: "Purchase Orders Approved ✓" },
  { time: "Yesterday", action: "Sales Forecast Generated ✓" },
  { time: "Yesterday", action: "ERP Health Check Completed ✓" },
  { time: "Yesterday", action: "Security Audit Passed ✓" },
];

const healthStatus = [
  { name: "Database Health", icon: Database },
  { name: "API Response", icon: Activity },
  { name: "Warehouse Sync", icon: RefreshCw },
  { name: "Production Status", icon: Package },
  { name: "Integrations", icon: Server },
  { name: "Security", icon: ShieldCheck },
];

const sparklineData1 = [{ v: 10 }, { v: 15 }, { v: 12 }, { v: 20 }, { v: 18 }, { v: 25 }, { v: 30 }];
const sparklineData2 = [{ v: 50 }, { v: 40 }, { v: 45 }, { v: 35 }, { v: 30 }, { v: 20 }, { v: 15 }];
const sparklineData3 = [{ v: 100 }, { v: 120 }, { v: 110 }, { v: 130 }, { v: 140 }, { v: 150 }, { v: 160 }];
const sparklineData4 = [{ v: 20 }, { v: 22 }, { v: 25 }, { v: 24 }, { v: 28 }, { v: 30 }, { v: 35 }];

// --- Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[16px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
}
const KPICard = ({ title, value, icon: Icon, trend }: KPICardProps) => (
  <div className="flex flex-col bg-white rounded-[12px] p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full justify-center">
    <div className="flex justify-between items-start mb-1.5">
      <div className="w-7 h-7 rounded-full bg-[#003D82] text-white flex items-center justify-center shrink-0">
        <Icon size={14} strokeWidth={2.5} />
      </div>
      {trend && (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-green-50 text-green-600'}`}>
          {trend}
        </span>
      )}
    </div>
    <p className="text-[#64748B] text-[10px] font-semibold uppercase tracking-wider mb-0.5">{title}</p>
    <h4 className="text-lg font-extrabold text-[#0F172A] leading-none">{value}</h4>
  </div>
);

interface SparklineProps {
  title: string;
  data: { v: number }[];
  color: string;
}
const SparklineWidget = ({ title, data, color }: SparklineProps) => (
  <div className="bg-gray-50/50 rounded-[10px] p-4 flex items-center justify-between h-full">
    <div>
      <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide mb-1">{title}</p>
      <h5 className="text-lg font-bold text-[#0F172A]">{data[data.length - 1].v}</h5>
    </div>
    <div className="w-24 h-12">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default function PremiumDashboard() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = 3;

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mounted && !isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [mounted, isHovered, totalSlides]);

  if (!mounted) return <div className="h-[600px] w-full bg-gray-50 animate-pulse rounded-[24px]" />;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div 
      className="w-full bg-[#F8FAFC] rounded-[24px] shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 font-sans relative overflow-hidden lg:h-[650px] flex flex-col group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Slider Container */}
      <motion.div 
        className="flex w-full h-full"
        animate={{ x: `-${currentSlide * 100}%` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        
        {/* Slide 1: Core Performance */}
        <div className="w-full h-full flex-shrink-0 p-4 sm:p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mb-2">
            <KPICard title="Efficiency" value="98%" icon={TrendingUp} trend="+35%" />
            <KPICard title="Inventory" value="98%" icon={Package} trend="+12%" />
            <KPICard title="Cost Red." value="42%" icon={DollarSign} trend="-42%" />
            <KPICard title="Downtime" value="-70%" icon={Clock} trend="-70%" />
            <KPICard title="Delivery" value="96%" icon={CheckCircle} trend="+18%" />
            <KPICard title="Satisfaction" value="4.9/5" icon={Star} trend="+0.4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 flex-grow">
            <Card className="lg:col-span-2 p-5 flex flex-col h-full">
              <div className="mb-2">
                <h3 className="text-sm font-bold text-[#0F172A]">Operational Performance (12 Mo)</h3>
                <p className="text-[11px] text-[#64748B]">Composite efficiency and output metric</p>
              </div>
              <div className="flex-grow w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#003D82" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#003D82" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: "#94A3B8" }} dy={5} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: "#94A3B8" }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', padding: '6px 12px' }}
                      itemStyle={{ color: '#0F172A', fontWeight: 'bold', fontSize: '12px' }}
                      labelStyle={{ fontSize: '11px', color: '#64748B' }}
                    />
                    <Area type="monotone" dataKey="performance" stroke="#003D82" strokeWidth={3} fillOpacity={1} fill="url(#colorPerf)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-5 flex flex-col h-full">
              <div className="mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">System Health</h3>
                  <p className="text-[11px] text-[#64748B]">Live environment status</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="flex-grow flex flex-col justify-between space-y-2">
                {healthStatus.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2.5">
                      <item.icon size={16} className="text-[#64748B] group-hover:text-[#003D82] transition-colors" />
                      <span className="text-xs font-semibold text-[#334155]">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Optimal</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Slide 2: Operations & Inventory */}
        <div className="w-full h-full flex-shrink-0 p-4 sm:p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 h-full">
            <Card className="p-5 lg:col-span-2 flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-[#0F172A]">Department Targets</h3>
                <p className="text-[11px] text-[#64748B]">Current vs Target performance</p>
              </div>
              <div className="flex-grow w-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productionData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94A3B8" }} dy={5} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94A3B8" }} />
                    <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '6px 12px' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', paddingTop: '15px' }} />
                    <Bar dataKey="current" fill="#003D82" radius={[4, 4, 0, 0]} name="Current" maxBarSize={40} />
                    <Bar dataKey="target" fill="#CBD5E1" radius={[4, 4, 0, 0]} name="Target" maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="flex flex-col gap-4 lg:gap-6">
              <Card className="p-5 flex-grow flex flex-col">
                <div className="mb-2">
                  <h3 className="text-sm font-bold text-[#0F172A]">Inventory Value</h3>
                </div>
                <div className="flex-grow w-full flex items-center justify-center relative min-h-[160px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={inventoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {inventoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '4px 8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
                    <span className="text-2xl font-extrabold text-[#0F172A] leading-none">$4.2M</span>
                    <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider mt-1">Total Value</span>
                  </div>
                </div>
              </Card>

              <Card className="p-5 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-[#0F172A] mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                    <span className="text-xs text-[#64748B] font-medium">Active Work Orders</span>
                    <span className="text-sm font-bold text-[#0F172A]">2,104</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                    <span className="text-xs text-[#64748B] font-medium">Inventory Turnover</span>
                    <span className="text-sm font-bold text-[#0F172A]">8.4x</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-[#64748B] font-medium">Monthly Revenue</span>
                    <span className="text-sm font-bold text-[#003D82]">$1.2M</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Slide 3: Activity & Metrics */}
        <div className="w-full h-full flex-shrink-0 p-4 sm:p-6 lg:p-8 flex flex-col gap-4 lg:gap-6">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 h-full">
            <Card className="p-5 lg:col-span-1 flex flex-col h-full">
              <div className="mb-6 flex items-center gap-2">
                <FileText size={16} className="text-[#64748B]" />
                <h3 className="text-sm font-bold text-[#0F172A]">Activity Feed</h3>
              </div>
              <div className="relative pl-3 space-y-6 before:absolute before:inset-y-0 before:left-[15px] before:w-[2px] before:bg-gray-100 flex-grow">
                {activityFeed.map((item, idx) => (
                  <div key={idx} className="relative z-10 flex gap-3.5">
                    <div className="w-2 h-2 rounded-full bg-[#003D82] mt-1 shrink-0 ring-4 ring-white shadow-sm" />
                    <div>
                      <p className="text-[12px] font-bold text-[#334155] leading-tight mb-1">{item.action}</p>
                      <p className="text-[10px] font-semibold text-[#94A3B8]">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="lg:col-span-2 grid grid-rows-2 gap-4 lg:gap-6 h-full">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 h-full">
                <SparklineWidget title="Revenue Growth" data={sparklineData1} color="#003D82" />
                <SparklineWidget title="Defect Rate" data={sparklineData2} color="#10B981" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 h-full">
                <SparklineWidget title="Orders Processed" data={sparklineData3} color="#8B5CF6" />
                <SparklineWidget title="Customer Acq." data={sparklineData4} color="#F59E0B" />
              </div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-all z-10 opacity-100 hover:bg-gray-50 hover:scale-105"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="text-[#0F172A]" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center transition-all z-10 opacity-100 hover:bg-gray-50 hover:scale-105"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="text-[#0F172A]" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx 
                ? 'w-6 h-1.5 bg-[#003D82]' 
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
