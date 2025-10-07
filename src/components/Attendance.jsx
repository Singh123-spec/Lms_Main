import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaStickyNote,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";

const Attendance = () => {
  const [openMonth, setOpenMonth] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const toggleMonth = (month) => {
    setOpenMonth(openMonth === month ? null : month);
  };

  const januaryDays = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31

  // Status for styling (replace with your actual data)
  const dayStatus = {
    2: "present",
    3: "present",
    4: "present",
    5: "present",
    6: "leave",
    7: "present",
    9: "present",
    10: "present",
    11: "absent",
    12: "absent",
    13: "present",
    14: "present",
    16: "present",
    17: "present",
    18: "present",
    19: "present",
    20: "present",
    21: "present",
    23: "present",
    24: "present",
    25: "present",
    26: "present",
    27: "leave",
    28: "present",
    30: "present",
    31: "present",
    // add absents, holidays etc
  };

  const getBgClass = (status) => {
    if (status === "present") return "bg-green-100";
    if (status === "absent") return "bg-red-100";
    if (status === "leave") return "bg-yellow-100";
    return "bg-gray-100";
  };

  const getEmoji = (status) => {
    if (status === "present") return "✅";
    if (status === "absent") return "❌";
    if (status === "leave") return "⚠️";
    return "";
  };

  // Jan 1, 2025 is Wednesday → 0=Sun, 1=Mon, etc
  // But in your example, Jan 1 is Monday, so:
  const startDay = 0; // Monday

  // Build full grid with empty slots before first date
  const daysWithPadding = [...Array(startDay).fill(null), ...januaryDays];

  // Split into weeks of 7 days
  const weeks = [];
  for (let i = 0; i < daysWithPadding.length; i += 7) {
    weeks.push(daysWithPadding.slice(i, i + 7));
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-semibold text-gray-800">Attendance</h2>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <FiHome className="text-xl text-gray-600" />
          <span>/</span>
          <span>Attendance</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">Attendance</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="bg-gray-50 px-8 py-10 rounded-xl -ml-10 -mr-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Overall */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-indigo-500 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800">Overall</h2>
              <FaStickyNote className="text-indigo-500 text-lg" />
            </div>
            <p className="text-sm text-gray-500">89%</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-indigo-500 h-2 rounded-full"
                style={{ width: "89%" }}
              ></div>
            </div>
            <p className="text-gray-700 mt-2 font-medium text-sm">
              Attendance: 89%
            </p>
          </div>

          {/* Present */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800">Present</h2>
              <FaCheckCircle className="text-green-500 text-lg" />
            </div>
            <p className="text-sm text-gray-500">85%</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="text-gray-700 mt-2 font-medium text-sm">
              Present: 190 / Total: 200
            </p>
          </div>

          {/* Absent */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800">Absent</h2>
              <FaTimesCircle className="text-red-500 text-lg" />
            </div>
            <p className="text-sm text-gray-500">10%</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "10%" }}
              ></div>
            </div>
            <p className="text-gray-700 mt-2 font-medium text-sm">Absent: 10</p>
          </div>

          {/* Holidays */}
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-teal-400 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800">Holidays</h2>
              <FaCalendarAlt className="text-teal-400 text-lg" />
            </div>
            <p className="text-sm text-gray-500">100%</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-teal-400 h-2 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="text-gray-700 mt-2 font-medium text-sm">
              Holidays: 103
            </p>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="bg-gray-50 px-8 py-6 rounded-xl -ml-10 -mr-10 ">
        <h2 className="text-lg font-semibold mb-2 -mt-4">Attendance</h2>
        {months.map((month, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition mb-4"
          >
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none text-gray-700 font-medium"
              onClick={() => toggleMonth(month)}
            >
              <span>{month}</span>
              <span className="text-gray-500">
                {openMonth === month ? "▲" : "▼"}
              </span>
            </button>

            {openMonth === month && month === "January" && (
              <div className="px-5 pb-5 border-t">
                {/* Calendar Popup */}
                <div className="p-5 bg-gray-50 rounded-lg shadow-inner">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">
                      January Attendance
                    </h3>
                    <button className="bg-yellow-100 text-yellow-400 px-3 py-1 rounded text-sm font-medium">
                      Leave Request
                    </button>
                  </div>

                  {/* Calendar Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                      <thead>
                        <tr>
                          {[
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                          ].map((day) => (
                            <th
                              key={day}
                              className="p-3 text-white text-base font-semibold"
                              style={{ backgroundColor: "#544EBE" }}
                            >
                              {day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {weeks.map((week, wIdx) => (
                          <tr key={wIdx}>
                            {week.map((day, dIdx) => {
                              if (!day) {
                                return (
                                  <td
                                    key={dIdx}
                                    className="p-2 bg-gray-100"
                                  ></td>
                                );
                              }
                              const status = dayStatus[day];
                              return (
                                <td
                                  key={dIdx}
                                  className={`p-2 ${getBgClass(status)}`}
                                >
                                  {day} {getEmoji(status)}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Calendar Legend */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm bg-green-500"></span>
                      <span>Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm bg-red-500"></span>
                      <span>Absent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm bg-yellow-500"></span>
                      <span>Leave</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm bg-gray-300"></span>
                      <span>Weekend</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-sm border-2 border-purple-600"></span>
                      <span>Today</span>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
                    <span
                      className="px-3 py-2 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: "#1B9A3F" }}
                    >
                      Total Present: 15
                    </span>
                    <span
                      className="px-3 py-2 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: "#FF4D4D" }}
                    >
                      Total Absent: 2
                    </span>
                    <span
                      className="px-3 py-2 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: "#21C4A5" }}
                    >
                      Total Holidays: 3
                    </span>
                    <span
                      className="px-3 py-2 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: "#6D5CDA" }}
                    >
                      Attendance percentage: 70%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {openMonth === month && month !== "January" && (
              <div className="px-5 py-3 text-gray-500 border-t">
                Attendance details for {month} will be shown here.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
