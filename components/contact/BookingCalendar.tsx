"use client";

import { useState } from "react";
import { 
  addMonths, 
  subMonths, 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isWeekend, 
  getDay,
  isBefore,
  startOfDay,
  isSameDay
} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

interface BookingCalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function BookingCalendar({ selectedDate, onSelectDate }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [direction, setDirection] = useState(0);

  const handlePrevMonth = () => {
    setDirection(-1);
    setCurrentMonth(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setDirection(1);
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Filter out weekends
  const weekdays = daysInMonth.filter(day => !isWeekend(day));
  
  // Group by week (a new week starts when day of week is Monday, i.e. getDay() === 1)
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  
  weekdays.forEach((day) => {
    if (getDay(day) === 1 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const today = startOfDay(new Date());

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 30 : -30,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 30 : -30,
        opacity: 0
      };
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="flex items-start gap-2">
          <CalendarIcon size={14} className="text-[#003D82] mt-0.5" />
          <div className="text-[13px] font-bold text-[#003D82] leading-tight">
            Select<br/>a Date
          </div>
        </div>
        <div className="flex items-center gap-3 text-[13px] font-bold text-[#003D82]">
          <button 
            type="button"
            onClick={handlePrevMonth}
            className="text-[#003D82] hover:opacity-70 transition-opacity p-1"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="min-w-[80px] text-center">{format(currentMonth, 'MMMM yyyy')}</span>
          <button 
            type="button"
            onClick={handleNextMonth}
            className="text-[#003D82] hover:opacity-70 transition-opacity p-1"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden min-h-[180px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentMonth.toISOString()}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col gap-3 w-full"
          >
            {weeks.map((week, wIndex) => (
              <div key={wIndex} className="flex w-full shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-[16px]">
                {week.map((dayObj, dIndex) => {
                  const past = isBefore(dayObj, today);
                  const isSelected = selectedDate ? isSameDay(selectedDate, dayObj) : false;
                  const isFirst = dIndex === 0;
                  const isLast = dIndex === week.length - 1;
                  
                  let containerClass = "flex flex-col items-center justify-center py-2 px-1 border-y border-r flex-1 cursor-pointer transition-all duration-200 ";
                  
                  if (isFirst) {
                    containerClass += "border-l rounded-l-[16px] ";
                  }
                  if (isLast) {
                    containerClass += "rounded-r-[16px] ";
                  }
                  
                  if (isSelected) {
                    containerClass += "bg-[#003D82] border-[#003D82] text-white z-10 ";
                  } else if (past) {
                    containerClass += "bg-[#F8FAFC] border-[#F1F5F9] text-[#CBD5E1] cursor-not-allowed ";
                  } else {
                    containerClass += "bg-white border-[#003D82]/20] text-[#003D82] hover:bg-[#003D82]/5] ";
                  }

                  return (
                    <button
                      type="button"
                      key={dayObj.toISOString()}
                      onClick={() => !past && onSelectDate(dayObj)}
                      disabled={past}
                      className={containerClass}
                    >
                      <span className={`text-[9px] font-bold mb-1 uppercase tracking-widest ${isSelected ? 'text-white' : past ? 'text-[#CBD5E1]' : 'text-[#94A3B8]'}`}>
                        {format(dayObj, 'EEE')}
                      </span>
                      <span className={`text-lg font-bold leading-none ${isSelected ? 'text-white' : past ? 'text-[#CBD5E1]' : 'text-[#003D82]'}`}>
                        {format(dayObj, 'd')}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
