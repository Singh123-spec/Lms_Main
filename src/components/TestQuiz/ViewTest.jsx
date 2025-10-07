import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewTest() {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const data = Array(97).fill({
        name: "John Doe",
        title: "Research Paper on Climate Change",
        type: "MCQ",
        date: "Jul 21, 2025, 12:31 PM",
        duration: "60 Min",
    });
    const navigate = useNavigate();
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);
    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-100">
            {/* Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Test/Quizzes</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md "
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>Test/Quizzes</span>
                    <span>/</span>
                    <span className="text-blue-700 font-semibold">Test/Quizzes</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                <Link to="/teacher/tests">
                    <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                        Creating Test/Quizzes
                    </button>
                </Link>
                <Link to="/teacher/tests/view">
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                        View Test/Quizzes
                    </button>
                </Link>
            </div>
            <div className="flex gap-4 mb-4">
                <select className="border rounded-md px-4 py-2 text-gray-600">
                    <option>All class</option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                </select>
                <select className="border rounded-md px-4 py-2 text-gray-600">
                    <option>All class section</option>
                    <option>Section A</option>
                    <option>Section B</option>
                    <option>Section C</option>
                    <option>Section D</option>
                    <option>Section E</option>
                </select>
                <select className="border rounded-md px-4 py-2 text-gray-600">
                    <option>Chapter</option>
                    <option>Chapter-1</option>
                    <option>Chapter-2</option>
                    <option>Chapter-3</option>
                    <option>Chapter-4</option>
                    <option>Chapter-5</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border rounded-lg bg-white">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="py-3 px-6">NAME</th>
                            <th className="py-3 px-6">ASSESSMENT TITLE</th>
                            <th className="py-3 px-6">ASSESSMENT TYPE</th>
                            <th className="py-3 px-6">START DATE & TIME</th>
                            <th className="py-3 px-6">DURATION</th>
                            <th className="py-3 px-6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="py-3 px-6">{row.name}</td>
                                <td className="py-3 px-6">{row.title}</td>
                                <td className="py-3 px-6">{row.type}</td>
                                <td className="py-3 px-6">{row.date}</td>
                                <td className="py-3 px-6">{row.duration}</td>
                                <td className="py-3 px-6">
                                    <Link to="/teacher/tests/report">
                                        <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-purple-50">
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <span>
                    {startIndex + 1}-{Math.min(startIndex + rowsPerPage, data.length)} of{" "}
                    {data.length}
                </span>

                <div className="flex items-center gap-4">
                    <div>
                        Rows per page:{" "}
                        <select
                            className="border rounded px-2 py-1"
                            value={rowsPerPage}
                            onChange={(e) => {
                                setRowsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            {[10, 20, 30].map((n) => (
                                <option key={n} value={n}>
                                    {n}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-2 bg-white">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="p-2 border rounded disabled:opacity-50"
                        >
                            &lt;
                        </button>
                        <span>
                            {currentPage}/{totalPages}
                        </span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="p-2 border rounded disabled:opacity-50"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ViewTest;
