"use client";

import { Clock } from "lucide-react";

interface TimeSlotPickerProps {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  disabled: boolean;
}

export default function TimeSlotPicker({ selectedTime, onSelectTime, disabled }: TimeSlotPickerProps) {
  const timeSlots = [
    "08:00", "08:30", "09:00", 
    "09:30", "10:00", "10:30", 
    "11:00", "11:30", "12:00", 
    "12:30"
  ];

  return (
    <div className={`transition-all duration-300 w-full pl-0 md:pl-4 ${disabled ? "opacity-40 pointer-events-none" : "opacity-100"}`}>
      <div className="flex flex-row items-center gap-2 mb-6 h-[34px]">
        <Clock size={14} className="text-[#003D82]" />
        <div className="text-[13px] font-bold text-[#003D82] leading-tight">
          Select a Time (MT)
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {timeSlots.map(time => {
          const isSelected = selectedTime === time;
          return (
            <button
              type="button"
              key={time}
              onClick={() => onSelectTime(time)}
              className={`
                py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 border shadow-[0_2px_8px_rgba(0,0,0,0.02)]
                ${isSelected 
                  ? "bg-[#003D82] border-[#003D82] text-white"
                  : "bg-white border-[#003D82]/20] text-[#003D82] hover:bg-[#003D82]/5] hover:border-[#003D82]/30]"
                }
              `}
            >
              {time}
            </button>
          );
        })}
      </div>
      
      <p className="text-[11px] text-[#94A3B8] italic font-medium text-center">
        All times are in Canada (Mountain Time)
      </p>
    </div>
  );
}
