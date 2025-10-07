import React, { useState } from "react";
import AssignmentTabs from "./AssignmentTabs";
import AssignmentCard from "./AssignmentCards";
import { FaHome, FaEdit } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Assignment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitModalOpen, setisSubmitModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Assignments");
  const navigate = useNavigate();

  // const handleActionClick = (label) => {
  //   if (label === "Submit Now") {
  //     setIsModalOpen(true);
  //   }
  // };

  const renderContent = () => {
    switch (activeTab) {
      case "Pending":
        return (
          <AssignmentCard
            title={
              <div className="pb-2 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-lg tracking-wide">
                  CS401 - Advanced Programming
                </h3>
              </div>
            }
            subtitle="Final Project Submission"
            description="Build a complete web application using React and Node.js."
            due="Due in 2 days (Jul 20, 2023)"
            statusColor="border-orange-500"
            statusLabel="Pending"
            statusBg="bg-orange-100 text-orange-600"
            actionColor="bg-indigo-500"
            actionLabel={
              <span className="flex items-center gap-2">
                <HiOutlineUpload className="text-white text-lg" />
                Submit
              </span>
            }
            onClick={() => setisSubmitModalOpen(true)}
          />
        );
      case "Submitted":
        return (
          <AssignmentCard
            title={
              <div className="pb-2 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-lg tracking-wide">
                  MATH301 - Linear Algebra
                </h3>
              </div>
            }
            subtitle="Chapter 5 Exercises"
            description="Submit all solutions from chapter 5."
            statusColor="border-indigo-500"
            statusLabel="Submitted"
            statusBg="bg-indigo-100 text-indigo-600"
            actionColor="bg-indigo-500"
            actionLabel={
              <div className="flex items-center gap-2">
                <FaEdit className="w-4 h-4" /> Edit Submission
              </div>
            }
          />
        );
      case "Graded":
        return (
          <div className="bg-white rounded-lg shadow-md border-l-4 border-teal-500 p-6 ml-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  ENG201 - Technical Writing
                </h2>
                <span className="bg-teal-100 text-teal-600 text-sm font-medium px-3 py-1 rounded-full">
                  Graded
                </span>
              </div>

              {/* Assignment Info */}
              <div className="mb-4">
                <h3 className="text-gray-700 font-medium">
                  Research Paper Draft
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Submit a draft of your research paper (min. 5 pages) with
                  proper citations.
                </p>
               <p class="text-teal-500 font-semibold mt-2">A (95/100)</p>
              </div>

              {/* Instructor Feedback */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Instructor"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Adrian Demian</p>
                  <p className="text-xs text-gray-500 mb-1">
                    ENG201 Instructor
                  </p>
                  <p className="text-gray-600 text-sm">
                    Excellent work! Your thesis is clear and well-supported. The
                    organization could be slightly improved in section 3.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                <FaEdit className="w-4 h-4" /> View Submission
              </button>
            </div>
        );
      default:
        return (
          <>
            <AssignmentCard
              title={
                <div className="pb-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-lg tracking-wide">
                    CS401 - Advanced Programming
                  </h3>
                </div>
              }
              subtitle="Final Project Submission"
              description="Build a complete web application using React and Node.js."
              due="Due in 2 days (Jul 20, 2023)"
              statusColor="border-orange-500"
              statusLabel="Pending"
              statusBg="bg-orange-100 text-orange-600"
              actionColor="bg-indigo-500"
              actionLabel={
                <span className="flex items-center gap-2">
                  <HiOutlineUpload className="text-white text-lg" />
                  Submit Now
                </span>
              }
              onClick={() => setisSubmitModalOpen(true)}
            />
            <AssignmentCard
              title={
                <div className="pb-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-lg ">
                    MATH301 - Linear Algebra
                  </h3>
                </div>
              }
              subtitle="Chapter 5 Exercises"
              description="Submit all solutions from chapter 5."
              statusColor="border-indigo-500"
              statusLabel="Submitted"
              statusBg="bg-indigo-100 text-indigo-600"
              actionColor="bg-indigo-500"
              actionLabel={
                <div className="flex items-center gap-2">
                  <FaEdit className="w-4 h-4" /> Edit Submission
                </div>
              }
            />
            <div className="bg-white rounded-lg shadow-md border-l-4 border-teal-500 p-6 ml-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  ENG201 - Technical Writing
                </h2>
                <span className="bg-teal-100 text-teal-600 text-sm font-medium px-3 py-1 rounded-full">
                  Graded
                </span>
              </div>

              {/* Assignment Info */}
              <div className="mb-4">
                <h3 className="text-gray-700 font-medium">
                  Research Paper Draft
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Submit a draft of your research paper (min. 5 pages) with
                  proper citations.
                </p>
                <p className="text-teal-500 font-semibold mt-2">A (95/100)</p>
              </div>

              {/* Instructor Feedback */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Instructor"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Adrian Demian</p>
                  <p className="text-xs text-gray-500 mb-1">
                    ENG201 Instructor
                  </p>
                  <p className="text-gray-600 text-sm">
                    Excellent work! Your thesis is clear and well-supported. The
                    organization could be slightly improved in section 3.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                <FaEdit className="w-4 h-4" /> View Submission
              </button>
            </div>
          </>
        );
    }
  };

  return (
    // <div className="p-6">
    //   {/* Header */}
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-2xl font-semibold">Assignment</h2>

    <div className="p-6 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Assignment</h2>

        <div className="flex items-center  text-sm text-gray-500 gap-2">
          <button onClick={() => navigate("/")} className="p-2 rounded-md ">
            <FiHome className="text-xl text-gray-600" size={17} />
          </button>
          <span>/</span>
          <span>Assignment</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">Assignment</span>
        </div>
      </div>
      <AssignmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}

      {/* Tabs */}
      {/* <div className="bg-gray-100">
        <AssignmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="bg-gray-100 min-h-screen flex flex-col ml-20 mr-20">
          {renderContent()}
        </div>
      </div> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Edit Submission
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-light"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 space-y-6">
              {/* Title + Subtitle */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Research Paper Draft
                </h3>
                <p className="text-sm text-gray-600">
                  ENG201 - Technical Writing
                </p>
              </div>

              {/* Current Submission */}
              <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-md flex items-center gap-2">
                <span className="text-lg">ℹ</span>
                <span className="font-medium">
                  Current Submission:{" "}
                  <span className="font-normal">
                    "The Midnight Journey" (short_story.docx)
                  </span>
                </span>
              </div>

              {/* File Upload */}
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 text-center">
                <div className="text-purple-500 text-3xl mb-2">☁️</div>
                <p className="text-lg font-medium text-gray-800">
                  Upload Revised Files
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Replace Your Current Submission With New Files
                </p>
                <button className="border border-purple-500 text-purple-500 px-4 py-1 rounded hover:bg-purple-50">
                  Select File
                </button>
              </div>

              {/* Submission Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Submission Notes
                </label>
                <input
                  type="text"
                  placeholder="Explain what changes you made and why..."
                  className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-purple-300"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex gap-3 border-t">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
                Update Submission
              </button>
              <button
                className="border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm hover:bg-red-50"
                onClick={() => setIsModalOpen(false)}
              >
                × Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Submit Assignment
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-light"
                onClick={() => setisSubmitModalOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 space-y-6">
              {/* Title + Subtitle */}
              <div>
                <h3 className="text-lg  text-gray-900">
                  Final Project Submission
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  CS401 - Advanced Programming
                </p>
              </div>

              {/* Submission Requirements */}
              <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 px-4 py-3 rounded-md text-sm">
                <strong>Submission Requirements:</strong> PDF, DOCX, or ZIP file
                (max 10MB). Include all source code and documentation.
              </div>

              {/* File Upload */}
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 text-center">
                <div className="text-purple-500 text-3xl mb-2">☁️</div>
                <p className="text-lg font-medium text-gray-800">
                  Drag & Drop Files Here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or click to browse files
                </p>
                <button className="border border-purple-500 text-purple-500 px-4 py-1 rounded hover:bg-purple-50">
                  Select File
                </button>
              </div>

              {/* Submission Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Submission Notes
                </label>
                <input
                  type="text"
                  placeholder="Add any comments for your instructor..."
                  className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-purple-300"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex gap-3 border-t">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
                Submit Assignment
              </button>
              <button
                className="border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm hover:bg-red-50"
                onClick={() => setisSubmitModalOpen(false)}
              >
                × Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment;
