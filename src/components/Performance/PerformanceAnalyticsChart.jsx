import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip as RechartsTooltip,
} from "recharts";

const barData = [
  { name: "MIDTERM", score: 35 },
  { name: "FINAL", score: 20 },
  { name: "ASSIGNMENT", score: 30 },
  { name: "QUIZ", score: 42 },
];

const pieData = [
  { name: "Present", value: 85 },
  { name: "Absent", value: 15 },
];

const COLORS = ["#4CAF50", "#EF5350", "#42A5F5", "#FF9800", "#9C27B0"];

const PerformanceAnalyticsChart = () => {
  const [activeTab, setActiveTab] = useState("class");

  const stats = [
    { metric: "Class Avg.", midterm: "75%", final: "82%", assignments: "88%" },
    { metric: "Highest", midterm: "98%", final: "100%", assignments: "100%" },
    { metric: "Lowest", midterm: "50%", final: "55%", assignments: "60%" },
  ];
  const navigate = useNavigate();

  // Custom Tooltip for Recharts
  const renderBarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="px-3 py-2 bg-gray-700 text-white rounded-lg shadow-lg relative">
          <p className="font-semibold">{label}</p>
          <p>Average score (%): {payload[0].value}</p>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-700 rotate-45"></div>
        </div>
      );
    }
    return null;
  };

  const renderPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="px-3 py-2 bg-gray-700 text-white rounded-lg shadow-lg relative">
          <p className="font-semibold">{payload[0].name}</p>
          <p>Value: {payload[0].value}%</p>
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-700 rotate-45"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto bg-gray-100">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-500">Performance Analytics</h1>
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <button
            onClick={() => navigate("/teacher/dashboard")}
            className="p-2 rounded-md "
          >
            <AiOutlineHome className="text-gray-600" size={15} />
          </button>
          <span>/</span>
          <span>Performance analytics</span>
          <span>/</span>
          <span className="text-blue-700 font-semibold">
            Performance analytics
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <Link to="/teacher/analytics">
          <button
            onClick={() => setActiveTab("student")}
            className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-800 hover:text-white ${
              activeTab === "student"
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Student Report
          </button>
        </Link>
        <Link to="/teacher/analytics/chart">
          <button
            onClick={() => setActiveTab("class")}
            className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-800 hover:text-white ${
              activeTab === "class"
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Class Analytics
          </button>
        </Link>
      </div>

        {/* Filters */}
      <div className="flex flex-wrap items-end gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <strong>
            <label className="block text-sm text-gray-600 mb-1">Class</label>
          </strong>
          <select className="border rounded px-4 py-2 text-sm w-full">
            <option>Please select Class</option>
          </select>
        </div>
      
        <div className="flex-1 min-w-[200px]">
          <strong>
            <label className="block text-sm text-gray-600 mb-1">Section</label>
          </strong>
          <select className="border rounded px-4 py-2 text-sm w-full">
            <option>Please select Section</option>
          </select>
        </div>
      
        <div className="flex-1 min-w-[200px]">
          <strong>
            <label className="block text-sm text-gray-600 mb-1">Students</label>
          </strong>
          <select className="border rounded px-4 py-2 text-sm w-full">
            <option>Please select Students</option>
          </select>
        </div>
      
        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-900">
            <FaFilter /> Apply Filters
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Exam & Assignment Averages
          </h3>
          <BarChart width={400} height={250} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip content={renderBarTooltip} />
            <Bar dataKey="score">
              {barData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Attendance Rate</h3>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <RechartsTooltip content={renderPieTooltip} />
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="bg-white shadow rounded-lg p-6 mt-8 border">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Summary Statistics
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white text-left">
                <th className="p-3">METRIC</th>
                <th className="p-3">MIDTERM</th>
                <th className="p-3">FINAL</th>
                <th className="p-3">ASSIGNMENTS</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((row, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } text-gray-700`}
                >
                  <td className="p-3 font-medium">{row.metric}</td>
                  <td className="p-3">{row.midterm}</td>
                  <td className="p-3">{row.final}</td>
                  <td className="p-3">{row.assignments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalyticsChart;
