import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AttendanceRecords = () => {
    const [records] = useState([
        { date: "Tue, Jul 22, 2025", present: 35, absent: 0, leave: 3 },
    ]);

    const navigate = useNavigate();
    const students = Array(5).fill({ rollNo: 1, name: "John Doe" });
    const [attendance, setAttendance] = useState(students.map(() => "Present"));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const toggleAttendance = (index, status) => {
        const updated = [...attendance];
        updated[index] = status;
        setAttendance(updated);
    };

    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
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
                    <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 hover:text-white ">
                        View Records
                    </button>
                </Link>
                <Link to="/teacher/classroom/leave">
                    <button className="px-5 py-2 bg-white text-white-700 border border-gray-300 rounded-lg shadow hover:bg-blue-800 hover:text-white">
                        Leave Request
                    </button>
                </Link>
            </div>

            {/* Table */}
            <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        View Records
                    </h2>

                    <div className="flex items-center gap-3">
                        {/* Date Picker */}
                        <input
                            type="date"
                            defaultValue="2025-07-22"
                            className="border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />

                        {/* Class Dropdown */}
                        <select
                            defaultValue="10"
                            className="border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                        >
                            <option value="9">Class - 9</option>
                            <option value="10">Class - 10</option>
                            <option value="11">Class - 11</option>
                            <option value="12">Class - 12</option>
                        </select>

                        {/* Section Dropdown */}
                        <select
                            defaultValue="A"
                            className="border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                        >
                            <option value="A">Section - A</option>
                            <option value="B">Section - B</option>
                            <option value="C">Section - C</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-700 text-white text-left text-sm">
                                <th className="py-3 px-6 font-semibold">DATE</th>
                                <th className="py-3 px-6 font-semibold">PRESENT</th>
                                <th className="py-3 px-6 font-semibold">ABSENT</th>
                                <th className="py-3 px-6 font-semibold">LEAVE</th>
                                <th className="py-3 px-6 font-semibold">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record, idx) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="py-3 px-6 text-sm text-gray-700">
                                        {record.date}
                                    </td>
                                    <td className="py-3 px-6 text-sm text-gray-700">
                                        {record.present}
                                    </td>
                                    <td className="py-3 px-6 text-sm text-gray-700">
                                        {record.absent}
                                    </td>
                                    <td className="py-3 px-6 text-sm text-gray-700">
                                        {record.leave}
                                    </td>
                                    <td className="py-3 px-6 text-sm text-gray-700">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex items-center px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-800 hover:text-white"
                                        >
                                            <AiOutlineEdit className="mr-2" /> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Edit Attendance - Tue, Jul 22, 2025
                            </h2>
                            <div className="overflow-x-auto rounded-lg">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-blue-700 text-white text-left text-sm">
                                            <th className="py-3 px-6 font-semibold">ROLL NO.</th>
                                            <th className="py-3 px-6 font-semibold">STUDENT NAME</th>
                                            <th className="py-3 px-6 font-semibold text-center">
                                                STATUS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student, idx) => (
                                            <tr
                                                key={idx}
                                                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                            >
                                                <td className="py-3 px-6 text-sm text-gray-700">
                                                    {student.rollNo}
                                                </td>
                                                <td className="py-3 px-6 text-sm text-gray-700">
                                                    {student.name}
                                                </td>
                                                <td className="py-3 px-6 text-sm text-gray-700 flex justify-center gap-3">
                                                    <button
                                                        onClick={() => toggleAttendance(idx, "Present")}
                                                        className={`flex items-center px-3 py-1 rounded-md border ${attendance[idx] === "Present"
                                                            ? "bg-green-50 border-green-500 text-green-600"
                                                            : "bg-white border-gray-300 text-gray-600"
                                                            }`}
                                                    >
                                                        <AiOutlineCheck className="mr-1" /> Present
                                                    </button>
                                                    <button
                                                        onClick={() => toggleAttendance(idx, "Absent")}
                                                        className={`flex items-center px-3 py-1 rounded-md border ${attendance[idx] === "Absent"
                                                            ? "bg-red-50 border-red-500 text-red-600"
                                                            : "bg-white border-gray-300 text-gray-600"
                                                            }`}
                                                    >
                                                        <AiOutlineClose className="mr-1" /> Absent
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Modal Actions */}
                            <div className="flex justify-end gap-4 mt-6 border-t pt-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setIsConfirmModalOpen(true)}
                                    className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirmation Modal */}
            {isConfirmModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Confirm changes ?
                                </h2>
                                <button
                                    onClick={() => setIsConfirmModalOpen(false)}
                                    className="text-gray-500 text-lg hover:text-gray-700"
                                >
                                    &times;
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-6">
                                Do you want to save these attendance edits? This action cannot
                                be undone.
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setIsConfirmModalOpen(false)}
                                    className="px-6 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        // ✅ Perform Save Logic Here if needed
                                        setIsConfirmModalOpen(false);
                                        setIsModalOpen(false);
                                    }}
                                    className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AttendanceRecords;
