import React, { useState } from "react";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import {  FiHome } from "react-icons/fi";

const tabs = [
  { key: "all", label: "All Notice" },
  { key: "important", label: "Important" },
  { key: "attendance", label: "Attendance" },
  { key: "event", label: "Event" },
];

const notices = [
  {
    type: "important",
    tagColor: "bg-red-100 text-red-500",
    borderColor: "border-red-400",
    tag: "Important",
    title: "Midterm Examination Schedule Update",
    description:
      "The midterm examinations scheduled for November 1–5 have been postponed to November 8–12 due to unforeseen circumstances. Please check the portal.",
    date: "Oct 25, 2023",
    dateColor: "text-orange-500",
  },
  {
    type: "attendance",
    tagColor: "bg-orange-100 text-orange-500",
    borderColor: "border-orange-400",
    tag: "Attendance",
    title: "Attendance Shortage Warning",
    description:
      "Students with attendance below 75% in any subject are requested to meet their respective faculty advisors immediately to discuss remedial measures.",
    date: "Oct 20, 2023",
    dateColor: "text-orange-500",
  },
  {
    type: "event",
    tagColor: "bg-blue-100 text-blue-500",
    borderColor: "border-blue-400",
    tag: "Event",
    title: "Annual Science Fair Registration Open",
    description:
      "Registrations for the Annual Science Fair to be held on November 20 are now open. Interested students should submit their project proposals by November 5.",
    date: "Oct 18, 2023",
    dateColor: "text-purple-500",
  },
  {
    type: "important",
    tagColor: "bg-red-100 text-red-500",
    borderColor: "border-red-400",
    tag: "Important",
    title: "Midterm Examination Schedule Update",
    description:
      "The midterm examinations scheduled for November 1–5 have been postponed to November 8–12 due to unforeseen circumstances. Please check the portal.",
    date: "Oct 25, 2023",
    dateColor: "text-orange-500",
  },
];

export default function NoticePage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNotices =
    activeTab === "all" ? notices : notices.filter((n) => n.type === activeTab);

  return (
    <div className="p-6 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Notice</h2>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <FiHome className="text-xl text-gray-600" />
          <span>/</span>
          <span>Notice</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">Notice</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
              activeTab === tab.key
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700 border border-gray-200 shadow-sm"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notice List */}
      <div className="grid grid-cols-1 gap-4 ">
        {filteredNotices.map((notice, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-4 flex justify-between items-start border-l-4 ${notice.borderColor}`}
          >
            {/* Left side */}
            <div>
              <span
                className={`text-xs px-2 py-1 rounded ${notice.tagColor} font-medium`}
              >
                {notice.tag}
              </span>
              <h3 className="text-lg font-semibold mt-2">{notice.title}</h3>
              <p className="text-gray-600 mt-1">{notice.description}</p>
            </div>

            {/* Right side (date) */}
            <div
              className={`text-sm flex items-center gap-1 ${
                notice.dateColor ? notice.dateColor : "text-gray-500"
              }`}
            >
              <FaCalendarAlt /> {notice.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
