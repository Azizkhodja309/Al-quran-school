import React, { useState } from "react";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const importantDates: Record<string, {
  label: string;
  color: string;
  range?: number;
}> = {
  "2025-8-18": { label: "First day of academic school year", color: "bg-emerald-100 text-emerald-800 border border-emerald-200" },
  "2025-10-20": { label: "Fall break", color: "bg-amber-200 text-amber-800 border border-amber-200", range: 4 },
  "2025-10-21": { label: "Fall break", color: "bg-amber-200 text-amber-800 border border-amber-200", range: 4 },
  "2025-10-22": { label: "Fall break", color: "bg-amber-200 text-amber-800 border border-amber-200", range: 4 },
  "2025-10-23": { label: "Fall break", color: "bg-amber-200 text-amber-800 border border-amber-200", range: 4 },
  "2025-10-24": { label: "Fall break", color: "bg-amber-200 text-amber-800 border border-amber-200", range: 4 },
  "2025-12-29": { label: "Winter break", color: "bg-sky-100 text-sky-800 border border-sky-200", range: 5 },
  "2025-12-30": { label: "Winter break", color: "bg-sky-100 text-sky-800 border border-sky-200", range: 5 },
  "2025-12-31": { label: "Winter break", color: "bg-sky-100 text-sky-800 border border-sky-200", range: 5 },
  "2026-1-1": { label: "Winter break", color: "bg-sky-100 text-sky-800 border border-sky-200", range: 5 },
  "2026-1-2": { label: "Winter break", color: "bg-sky-100 text-sky-800 border border-sky-200", range: 5 },
  "2026-3-16": { label: "Spring break", color: "bg-rose-100 text-rose-800 border border-rose-200", range: 5 },
  "2026-3-17": { label: "Spring break", color: "bg-rose-100 text-rose-800 border border-rose-200", range: 5 },
  "2026-3-18": { label: "Spring break", color: "bg-rose-100 text-rose-800 border border-rose-200", range: 5 },
  "2026-3-19": { label: "Spring break", color: "bg-rose-100 text-rose-800 border border-rose-200", range: 5 },
  "2026-3-20": { label: "Spring break", color: "bg-rose-100 text-rose-800 border border-rose-200", range: 5 },
  "2026-5-22": { label: "Last day of school", color: "bg-teal-100 text-teal-800 border border-teal-200" },
  "2026-5-25": { label: "Summer break", color: "bg-green-200 text-sky-800 border border-green-400", range: 4 },
  "2026-5-26": { label: "Summer break", color: "bg-green-200 text-sky-800 border border-green-400", range: 4 },
  "2026-5-27": { label: "Summer break", color: "bg-green-200 text-sky-800 border border-green-400", range: 4 },
  "2026-5-28": { label: "Summer break", color: "bg-green-200 text-sky-800 border border-green-400", range: 4 },
  "2026-5-29": { label: "Summer break", color: "bg-green-200 text-sky-800 border border-green-400", range: 4 }
};

const CalendarGrid: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<{
    date: string;
    event?: string;
  } | null>(null);

  const monthsToRender = [
    { year: 2025, month: 7 }, { year: 2025, month: 8 }, { year: 2025, month: 9 }, { year: 2025, month: 10 },
    { year: 2025, month: 11 }, { year: 2026, month: 0 }, { year: 2026, month: 1 }, { year: 2026, month: 2 },
    { year: 2026, month: 3 }, { year: 2026, month: 4 }, { year: 2026, month: 5 }, { year: 2026, month: 6 }
  ];

  const generateMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days: { day: number | null; className: string; tooltip?: string }[] = [];
    const firstDayIndex = date.getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ day: null, className: "" });
    }

    for (let day = 1; day <= lastDate; day++) {
      const dateKey = `${year}-${month + 1}-${day}`;
      const isSunday = new Date(year, month, day).getDay() === 0;
      let className = isSunday ? "text-green-700 font-medium" : "";
      let tooltip = "";

      const event = importantDates[dateKey];
      if (event) {
        className += ` ${event.color} font-medium`;
        tooltip = event.label;

        if (event.range) {
          const prevKey = `${year}-${month + 1}-${day - 1}`;
          const nextKey = `${year}-${month + 1}-${day + 1}`;
          if (!importantDates[prevKey]) className += " rounded-l-full";
          if (!importantDates[nextKey] || day === lastDate) className += " rounded-r-full";
        } else {
          className += " rounded-full";
        }
      }

      days.push({ day, className, tooltip });
    }

    while (days.length < 42) {
      days.push({ day: null, className: "" });
    }

    return days;
  };

  const handleDateClick = (day: number | null, month: number, year: number, event?: string) => {
    if (!day) return;
    const dateStr = `${monthNames[month]} ${day}, ${year}`;
    setSelectedDate({ date: dateStr, event: event || "No special events" });
  };

  return (
    <div className="p-4 min-h-screen">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-800 mb-2">2025/26 School Calendar</h1>
        <h2 className="text-2xl font-semibold text-emerald-700">AL-QUR'AN ISLAMIC SCHOOL</h2>
      </header>

      {selectedDate && (
        <div className="mb-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200 shadow-sm">
          <h3 className="text-lg font-semibold text-emerald-800">{selectedDate.date}</h3>
          <p className="text-emerald-700">{selectedDate.event}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {monthsToRender.map(({ year, month }, index) => {
          const days = generateMonth(year, month);
          return (
            <div key={index} className="border border-green-500 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mt-0">
                <h3 className="text-lg font-bold text-center mb-3 bg-emerald-800 text-white rounded-t-xl border-green-500 border-b-2">
                  {monthNames[month]} {year}
                </h3>
              </div>
              <div className="grid grid-cols-7 text-sm text-center font-semibold mb-2 -mt-3 p-1 text-green-700 bg-gray-300 w-full">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 text-lg gap-1 mb-2 m-1">
                {days.map(({ day, className, tooltip }, i) => (
                  <div key={i} className="relative group">
                    <div
                      className={`h-6 flex items-center justify-center ${day === null ? "text-amber-200" : "cursor-pointer hover:bg-amber-100"} ${className}`}
                      onClick={() => handleDateClick(day, month, year, tooltip)}
                    >
                      {day || ""}
                    </div>
                    {tooltip && (
                      <div className="absolute z-10 bottom-full mb-1 left-1/2 -translate-x-1/2 
                        whitespace-nowrap bg-green-600 text-white text-xs px-2 py-1 rounded 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <h3 className="text-lg font-semibold mb-3 text-emerald-800">Important Dates Legend</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries({
            "bg-emerald-100 text-emerald-800 border-emerald-200": "First day of school",
            "bg-amber-200 text-amber-800 border-amber-200": "Fall break",
            "bg-sky-100 text-sky-800 border-sky-200": "Winter break",
            "bg-rose-100 text-rose-800 border-rose-200":"Spring break",
            "bg-teal-100 text-teal-800 border-teal-200": "Last day of school",
            "bg-green-200 text-sky-800 border border-green-400": "Summer break"
          }).map(([color, label]) => (
            <div key={label} className="flex items-center">
              <div className={`w-4 h-4 rounded-full mr-2 ${color}`}></div>
              <span className="text-amber-900">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
