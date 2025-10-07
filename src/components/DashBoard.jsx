import React from "react";
import { FiHome } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const results = [
    { subject: "Mathematics", score: 95, grade: "A+", color: "bg-teal-400" },
    { subject: "Science", score: 84, grade: "B", color: "bg-orange-400" },
    { subject: "English", score: 74, grade: "C", color: "bg-purple-500" },
    { subject: "History", score: 12, grade: "E", color: "bg-red-400" },
  ];

  const schedule = [
    {
      time: "09:00",
      subject: "Science",
      color: "border-purple-600 text-purple-600",
    },
    {
      time: "10:00",
      subject: "English Grammar",
      color: "border-teal-600 text-teal-600",
    },
    {
      time: "11:00",
      subject: "English",
      color: "border-orange-500 text-orange-500",
    },
    {
      time: "12:00",
      subject: "Mathematics",
      color: "border-red-500 text-red-500",
    },
    {
      time: "13:00",
      subject: "Science",
      color: "border-purple-600 text-purple-600",
    },
    {
      time: "14:00",
      subject: "English",
      color: "border-red-600 text-red-600",
    },
    {
      time: "14:00",
      subject: "English Grammer",
      color: "border-orange-500 text-orange-500",
    },
  ];

  const assignments = [
    {
      title: "Math Homework",
      subtitle: "Chapter 5: Quadratic Equations",
      due: "Due Tomorrow",
      dueDate: "Oct 15",
      badgeColor: "bg-red-100 text-red-600",
      borderColor: "border-red-400",
    },
    {
      title: "Science Project",
      subtitle: "Solar System Model Presentation",
      due: "Due in 3 days",
      dueDate: "Oct 17",
      badgeColor: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-500",
    },
    {
      title: "English Reading",
      subtitle: "To Kill a Mockingbird Chapters 1-5",
      due: "Due in 7 days",
      dueDate: "Oct 21",
      badgeColor: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-400",
    },
    {
      title: "History Essay",
      subtitle: "World War II Causes and Effects",
      due: "Due in 5 days",
      dueDate: "Oct 19",
      badgeColor: "bg-green-100 text-green-600",
      borderColor: "border-green-400",
    },
    {
      title: "English Reading",
      subtitle: "To Kill a Mockingbird Chapters 1-5",
      due: "Due in 7 days",
      dueDate: "Oct 21",
      badgeColor: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-400",
    },
    {
      title: "Science Project",
      subtitle: "Solar System Model Presentation",
      due: "Due in 3 days",
      dueDate: "Oct 17",
      badgeColor: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-500",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <FiHome className="text-xl text-gray-600" />
          <span>/</span>
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">Default</span>
        </div>
      </div>

      {/* Today's Schedule & Test Results */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Schedule */}
        <div className="bg-white p-6 rounded-xl shadow relative overflow-hidden">
          {/* Header */}

          {/* Vertical stripes with fade effect */}
          <div className="absolute inset-0 z-0 flex pointer-events-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-1/4"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(to top, rgba(243, 244, 246, 0.6), rgba(243, 244, 246, 0))"
                      : "linear-gradient(to bottom, rgba(243, 244, 246, 0.6), rgba(243, 244, 246, 0))",
                }}
              />
            ))}
          </div>

          {/* Ladder sche<div className="bg-white p-6 rounded-xl shadow relative overflow-hidden">
  {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold -ml-2">Today's Schedule</h2>
            <div className="relative ">
              <select className="block  text-sm font-semibold text-gray-800  rounded-lg px-4 py-2  bg-white focus:outline-none   cursor-pointer">
                <option>&nbsp;&nbsp;Today</option>
                <option>&nbsp;&nbsp;Week</option>
              </select>
              {/* <IoChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-indigo-600 pointer-events-none" /> */}
            </div>
          </div>

          {/* Vertical stripes with fade effect */}
          <div className="absolute inset-0 z-0 flex pointer-events-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`h-full w-1/4`}
                style={{
                  background:
                    i === 1 || i === 2
                      ? "linear-gradient(to bottom, rgba(243, 244, 246, 0), rgba(243, 244, 246, 0.6))"
                      : "transparent",
                }}
              />
            ))}
          </div>

          {/* Ladder schedule */}
          <div className="relative z-10 pl-4 overflow-x-auto">
            <div className="flex flex-col min-w-max">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-center gap-4 mb-6">
                  {/* Time */}
                  <div className="w-16 text-sm text-gray-500">{item.time}</div>

                  {/* Subject pill with ladder shift */}
                  <div
                    className={`px-3 py-2 border-2 rounded-full font-medium text-base whitespace-nowrap ${item.color}`}
                    style={{
                      transform: `translateX(${i * 60}px)`, // shift step by step (ladder)
                    }}
                  >
                    {item.subject}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Results (unchanged) */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Test Results</h2>
            <div className="relative ">
              <select className="block  text-sm font-semibold text-gray-800  rounded-lg px-4 py-2  bg-white focus:outline-none   cursor-pointer">
                 <option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Test Result</option>
                <option>Assignment Result</option>
              </select>
              {/* <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 pointer-events-none" /> */}
            </div>
          </div>
          <hr className="mb-4" />
          <div className="space-y-5">
            {results.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {item.subject}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {item.score}% ({item.grade})
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-right">
            <button
              className="text-white text-sm px-4 py-2 rounded-lg hover:opacity-90"
              style={{ backgroundColor: "#544EBE" }}
            >
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Upcoming Assignments
          </h3>
          <button
            className="text-white text-sm px-4 py-2 rounded-lg hover:opacity-90"
            style={{ backgroundColor: "#544EBE" }}
          >
            View All Assignments
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {assignments.map((a, i) => (
            <div
              key={i}
              className={`rounded-lg border-l-4 ${a.borderColor} bg-white shadow-sm p-4 hover:bg-purple-50 cursor-pointer transform hover:scale-105 
                                   transition duration-300 ease-in-out`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800">{a.title}</h4>
                  <p className="text-sm text-gray-600">{a.subtitle}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${a.badgeColor}`}>
                  {a.due}
                </span>
              </div>
              <div className="flex items-center mt-3 text-sm text-gray-600">
                <FaRegCalendarAlt className="mr-2" />
                Due {a.dueDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
