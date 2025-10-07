import React, { useState } from "react";
import ExamTabs from "./ExamTabs";
import ExamCard from "./ExamCards";
import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

const finalExamData = [
  {
    subject: "Mathematics",
    date: "24 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "Science",
    date: "25 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "History",
    date: "26 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "Mathematics",
    date: "24 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "Science",
    date: "25 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "History",
    date: "26 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
];

const midtermExamData = [
  {
    subject: "Mathematics",
    date: "24 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "Science",
    date: "25 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
  {
    subject: "History",
    date: "26 July 2025",
    time: "09:00 AM - 12:00 PM",
    duration: "3 hours",
  },
];

const resultsData = [
  {
    title: "Final Exam",
    status: "Passed",
    date: "24 July 2025",
    time: "09:00 AM - 12:00 PM",
    percentage: "85%",
    grade: "A",
    marksObtained: "85%",
    maxMarks: "100%",
    classRank: "3",
    remarks: "Excellent",
  },
  {
    title: "Midterm Exam",
    status: "Passed",
    date: "24 July 2025",
    time: "09:00 AM - 12:00 PM",
    percentage: "85%",
    grade: "A",
    marksObtained: "85%",
    maxMarks: "100%",
    classRank: "3",
    remarks: "Excellent",
  },
];

const certificatesData = [
  { title: "Midterm Exam Certificate", issued: "Jun 15, 2023", grade: "A" },
  { title: "Midterm Exam Certificate", issued: "Jun 15, 2023", grade: "A" },
  { title: "Midterm Exam Certificate", issued: "Jun 15, 2023", grade: "A" },
];

const Examinations = () => {
  const [activeTab, setActiveTab] = useState("Exam Schedule");

  const renderResults = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
      {resultsData.map((result, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 border-l-4 border-l-teal-500"
        >
          {/* Top Row: Status + Date and Time on one line */}
          <div className="flex items-center text-sm text-gray-500 font-medium gap-2 truncate">
            <span>{result.date}</span>
            <span>•</span>
            <span>{result.time}</span>
          </div>

          {/* Title Row */}
          <div className="flex items-center mb-4">
            <HiOutlineDocumentText className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">
              {result.title}
            </h3>
          </div>

          {/* Percentage + Progress */}
          <div className="text-center mb-6">
            <p className="text-base font-bold text-gray-800 mb-2">
              {result.percentage} ({result.grade})
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full bg-teal-500"
                style={{ width: result.percentage }}
              ></div>
            </div>
          </div>

          {/* Details Section */}
          <div className="text-sm text-gray-700 space-y-2">
            <div className="flex justify-between border-b border-gray-300 pb-1">
              <span className="font-medium">Marks Obtained</span>
              <span className="font-semibold text-gray-800">
                {result.marksObtained}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-1">
              <span className="font-medium">Max Marks</span>
              <span className="font-semibold text-gray-800">
                {result.maxMarks}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-1">
              <span className="font-medium">Class Rank</span>
              <span className="font-semibold text-gray-800">
                {result.classRank}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-1">
              <span className="font-medium">Remarks</span>
              <span className="font-semibold text-gray-800">
                {result.remarks}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 justify-center">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 flex items-center gap-2 transition">
              <FaEye size={14} /> View
            </button>
            <button className="bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 flex items-center gap-2 transition">
              <FaDownload size={14} /> Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
      {certificatesData.map((cert, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 border-l-4 border-l-teal-500"
        >
          <HiOutlineDocumentText className="text-indigo-600 text-5xl mx-auto mb-3" />
          <h3 className="text-lg font-medium">{cert.title}</h3>
          <div className="flex justify-between text-sm mt-3 text-gray-500">
            <span>
              <strong className="text-gray-700">Issued:</strong> {cert.issued}
            </span>
            <span
              className="text-sm font-semibold px-4 py-1 rounded-full"
              style={{ backgroundColor: "#DBFEE0", color: "#38c2b6" }}
            >
              Grade:{cert.grade}
            </span>
          </div>
          <div className="flex gap-3 mt-4 justify-center">
            <button className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-600 flex items-center gap-1">
              <FaEye size={14} /> View
            </button>
            <button className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-600 flex items-center gap-1">
              <FaDownload size={14} /> Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Results":
        return renderResults();
      case "Certificates":
        return renderCertificates();
      default:
        return (
          <div className="space-y-8 p-4 bg-gray-100 -ml-8 -mr-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 ml-4">
                Final Exam
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {finalExamData.map((exam, index) => (
                  <ExamCard key={index} {...exam} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 ml-4">Midterm Exam</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {midtermExamData.map((exam, index) => (
                  <ExamCard key={index} {...exam} />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold ml-2">
          Examinations and Results
        </h2>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <FiHome className="text-xl text-gray-600" />
          <span>/</span>
          <span>Examinations and Results</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">
            Examinations and Results
          </span>
        </div>
      </div>
      <ExamTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Examinations;
