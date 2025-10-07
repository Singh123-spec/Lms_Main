import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LeaveRequestTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const data = [
        { name: "Susan", leaveDate: "08 May 2024 - 19 May 2024", appliedOn: "02 May 2024", status: "Pending" },
        { name: "Lisa", leaveDate: "08 May 2024 - 19 May 2024", appliedOn: "02 May 2024", status: "Pending" },
        { name: "Gifford", leaveDate: "08 May 2024 - 19 May 2024", appliedOn: "02 May 2024", status: "Approved" },
        { name: "Julie", leaveDate: "08 May 2024 - 19 May 2024", appliedOn: "02 May 2024", status: "Approved" },
        { name: "Joann", leaveDate: "08 May 2024 - 19 May 2024", appliedOn: "02 May 2024", status: "Approved" },
    ];

    const getStatusClasses = (status) => {
        if (status === "Pending") return "bg-blue-100 text-blue-600";
        if (status === "Approved") return "bg-green-100 text-green-600";
        return "bg-gray-100 text-gray-600";
    };
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 shadow-sm rounded-lg p-4">
            {/* Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Attendance</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md"
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>Attendance</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Attendance</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
                <Link to="/teacher/classroom/attendance">
                    <button className="px-5 py-2 bg-white text-white-700 border border-gray-300 rounded-lg shadow hover:bg-blue-800 hover:text-white">
                        Mark Attendance
                    </button>
                </Link>
                <Link to="/teacher/classroom/record">
                    <button className="px-5 py-2 bg-white text-white-700 border border-gray-300 rounded-lg shadow hover:bg-blue-800 hover:text-white">
                        View Records
                    </button>
                </Link>
                <Link to="/teacher/classroom/leave">
                    <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 hover:text-white ">
                        Leave Request
                    </button>
                </Link>
            </div>
            {/* Table Container */}
            <div className="bg-white shadow-sm rounded-lg p-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Leave Request</h2>
                    <div className="flex gap-2 mt-3 md:mt-0">
                        <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600">
                            <option>Class - 6</option>
                            <option>Class - 7</option>
                            <option>Class - 8</option>
                            <option>Class - 9</option>
                            <option>Class - 10</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600">
                            <option>Section - A</option>
                            <option>Section - B</option>
                            <option>Section - C</option>
                            <option>Section - D</option>
                            <option>Section - E</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-700 text-white text-sm">
                                <th className="py-3 px-4 text-left font-medium">SUBMITTED BY</th>
                                <th className="py-3 px-4 text-left font-medium">LEAVE DATE</th>
                                <th className="py-3 px-4 text-left font-medium">APPLIED ON</th>
                                <th className="py-3 px-4 text-left font-medium">STATUS</th>
                                <th className="py-3 px-4 text-left font-medium">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                                    <td className="py-3 px-4 text-gray-800">{row.name}</td>
                                    <td className="py-3 px-4 text-gray-600">{row.leaveDate}</td>
                                    <td className="py-3 px-4 text-gray-600">{row.appliedOn}</td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-3 py-1 rounded-md text-xs font-medium ${getStatusClasses(
                                                row.status
                                            )}`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 flex gap-2">
                                        <button
                                            className="p-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
                                            onClick={() => {
                                                setSelectedRequest(row);
                                                setShowModal(true);
                                            }}
                                        >
                                            <FaEye size={14} />
                                        </button>
                                        <button
                                            className="w-8 h-8 flex items-center justify-center 
                 border border-red-400 rounded-md
                 text-red-400 hover:bg-red-50"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedRequest && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Leave Request</h3>

                        <p className="text-sm mb-2">
                            <span className="font-semibold">Submitted By :</span>{" "}
                            <span className="text-gray-600">{selectedRequest.name}</span>
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-semibold">Applied On :</span>{" "}
                            <span className="text-gray-600">{selectedRequest.appliedOn}</span>
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-semibold">No of Days :</span>{" "}
                            {selectedRequest.days}
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-semibold">Leave :</span>{" "}
                            <span className="text-gray-600">{selectedRequest.leaveDate}</span>
                        </p>
                        <p className="text-sm mb-4">
                            <span className="font-semibold">Reason :</span>{" "}
                            <span className="text-gray-600">{selectedRequest.reason}</span>
                        </p>

                        {/* Status radio buttons */}
                        <div className="mb-4">
                            <span className="font-semibold">Status:</span>
                            <div className="flex gap-6 mt-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="status" className="accent-blue-600" /> Approved
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="status" className="accent-blue-600" /> Disapproved
                                </label>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between border-t pt-4">
                            <button
                                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
                                onClick={() => setShowModal(false)}
                            >
                                Submit
                            </button>
                            <button
                                className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaveRequestTable;
