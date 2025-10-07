import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AssignmentCard = ({
  title,
  subtitle,
  description,
  due,
  actionLabel,
  actionColor,
  statusColor,
  statusLabel,
  statusBg,
  onClick, // add this prop!
}) => {
  const [isOpen, setIsOpen] = useState(false); // View Details modal
  const [isEditOpen, setIsEditOpen] = useState(false); // Edit Submission modal

  return (
    <div className="ml-10">
      <div
        className={`bg-white p-4 rounded-lg shadow-sm border-l-4 mb-4 ${statusColor} relative`}
      >
        {/* Status Badge */}
        <span
          className={`absolute top-4 right-4 px-2 py-0.5 text-xs rounded-full font-medium ${statusBg}`}
        >
          {statusLabel}
        </span>

        {/* Title & Description */}
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-base font-medium">{subtitle}</p>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        {/* Due Date */}
        {due && (
          <p className="text-sm text-orange-600 mt-2 flex items-center gap-1">
            📅 {due}
          </p>
        )}

        {/* Buttons */}
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={onClick} // Attach onClick here
            className={`${actionColor} text-white px-4 py-1.5 rounded-md text-sm`}
          >
            {actionLabel}
          </button>

          {/* View Details */}
          <div className="ml-auto">
            <button
              onClick={() => setIsOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors
      ${
        statusLabel === "Pending"
          ? "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          : statusLabel === "Submitted"
          ? "border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
          : statusLabel === "Graded"
          ? "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          : "border border-gray-400 text-gray-500 hover:bg-gray-200"
      }`}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path
                  fillRule="evenodd"
                  d="M.661 10.457A10.66 10.66 0 0110 4c4.685 0 8.711 3.23 9.339 6.457.067.337.067.663 0 1A10.66 10.66 0 0110 16c-4.685 0-8.711-3.23-9.339-6.457-.067-.337-.067-.663 0-1zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              View Details
            </button>
          </div>
        </div>

        {/* View Details Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative overflow-hidden">
              <div className="flex justify-between items-center border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Submission History
                </h2>
                <button
                  className="text-purple-500 hover:text-purple-700 text-2xl font-light"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="px-6 py-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {subtitle}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{title}</p>

                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md mb-6 flex items-center gap-2">
                  <FaCheckCircle className="text-green-600 text-xl" />
                  <span className="font-medium">
                    Graded: A <span className="font-normal">(95/100)</span>
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">
                      Submitted Files
                    </h4>
                    <span className="text-xs text-gray-500">
                      Submitted on June 10, 2023 at 3:24 PM
                    </span>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-white shadow rounded-md p-3">📄</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        research_paper.docx
                      </p>
                      <p className="text-xs text-gray-500">2.5 MB</p>
                    </div>
                    <a
                      href="#"
                      className="text-purple-600 hover:underline text-sm font-medium"
                    >
                      Download File
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Submission Notes
                  </h4>
                  <div className="border rounded-lg p-4 text-sm text-gray-700">
                    This is my original short story titled "The Midnight
                    Journey".
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 flex justify-end border-t">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsEditOpen(true);
                  }}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700"
                >
                  ✏ Edit Submission
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Submission Modal */}
        {isEditOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative overflow-hidden">
              <div className="flex justify-between items-center border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Edit Submission
                </h2>
                <button
                  className="text-purple-500 hover:text-purple-700 text-2xl font-light"
                  onClick={() => setIsEditOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="px-6 py-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {subtitle}
                  </h3>
                  <p className="text-sm text-gray-600">{title}</p>
                </div>

                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-md flex items-center gap-2">
                  ℹ <span>Current Submission: "The Midnight Journey"</span>
                </div>

                <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 text-center">
                  ☁️
                  <p className="text-lg font-medium text-gray-800">
                    Upload Revised Files
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Replace your current submission
                  </p>
                  <button className="border border-purple-500 text-purple-500 px-4 py-1 rounded hover:bg-purple-50">
                    Select File
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Submission Notes
                  </label>
                  <input
                    type="text"
                    placeholder="Explain what changes you made..."
                    className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-purple-300"
                  />
                </div>
              </div>

              <div className="px-6 py-4 flex gap-3 border-t">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
                  ✏ Update Submission
                </button>
                <button
                  className="border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm hover:bg-red-50"
                  onClick={() => setIsEditOpen(false)}
                >
                  × Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
