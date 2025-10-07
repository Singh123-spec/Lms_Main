import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PerformanceAnalytics = () => {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  const data = [
    {
      subject: "Mathematics",
      grade: "A",
      attendance: "95%",
      assignments: "12/13",
      reportColor: "bg-green-500",
      reportPercent: "80%",
      status: "Excellent",
    },
    {
      subject: "Science",
      grade: "B+",
      attendance: "88%",
      assignments: "11/13",
      reportColor: "bg-indigo-600",
      reportPercent: "60%",
      status: "Good",
    },
    {
      subject: "English",
      grade: "A+",
      attendance: "98%",
      assignments: "12/13",
      reportColor: "bg-red-500",
      reportPercent: "40%",
      status: "Needs Help",
    },
    {
      subject: "Hindi",
      grade: "A",
      attendance: "95%",
      assignments: "12/13",
      reportColor: "bg-green-500",
      reportPercent: "80%",
      status: "Excellent",
    },
    {
      subject: "Computer",
      grade: "B+",
      attendance: "88%",
      assignments: "11/13",
      reportColor: "bg-indigo-600",
      reportPercent: "60%",
      status: "Good",
    },
    {
      subject: "English",
      grade: "A+",
      attendance: "98%",
      assignments: "12/13",
      reportColor: "bg-red-500",
      reportPercent: "40%",
      status: "Needs Help",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
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
          <span className="text-blue-700 font-semibold">Performance analytics</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("student")}
          className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-800 hover:text-white ${activeTab === "student"
            ? "bg-blue-700 text-white"
            : "bg-slate-200 text-gray-600"
            }`}
        >
          Student Report
        </button>
        <Link to="/teacher/analytics/chart">
          <button
            onClick={() => setActiveTab("class")}
            className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-800 hover:text-white ${activeTab === "class"
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-600"
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



      {/* Table */}
      <div className="overflow-auto bg-white rounded shadow">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-blue-700 text-white text-sm">
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Grade</th>
              <th className="px-4 py-3 font-medium">Attendance</th>
              <th className="px-4 py-3 font-medium">Assignments</th>
              <th className="px-4 py-3 font-medium">Report</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 font-medium text-gray-700">{row.subject}</td>
                <td className="px-4 py-3">{row.grade}</td>
                <td className="px-4 py-3">{row.attendance}</td>
                <td className="px-4 py-3">{row.assignments}</td>
                <td className="px-4 py-3 w-56">
                  <div className="w-full h-2 bg-gray-300 rounded">
                    <div
                      className={`h-2 ${row.reportColor} rounded`}
                      style={{ width: row.reportPercent }}
                    />
                  </div>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-700">
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
