import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const ViewMaterials = () => {
    const [selected, setSelected] = useState(false);
    const [page, setPage] = useState(1);
    const totalPages = 10;

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const navigate = useNavigate();

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Material</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md"
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>Material</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Material</span>
                </div>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-6">
                <Link
                    to="/teacher/classroom/materials"
                    className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900 hover:text-white"
                >
                    Upload Materials
                </Link>

                <Link to="/teacher/materials/view">
                    <button
                        onClick={() => setSelected(!selected)}
                        className={`bg-blue-700 text-white border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center
                            ${selected ? "bg-blue-700 text-white" : "hover:bg-blue-900 hover:text-white"}`}
                    >
                        View Materials
                    </button>
                </Link>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="grid grid-cols-5 gap-4 mb-4">
                    <div className="flex flex-col">
                        <strong><label className="text-sm text-black mb-1">Class</label></strong>
                        <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                            <option>Select Class</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <strong><label className="text-sm text-black mb-1">Class Section</label></strong>
                        <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                            <option>Select Section</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <strong><label className="text-sm text-black mb-1">Subject</label></strong>
                        <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                            <option>Select Subject</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <strong><label className="text-sm text-black mb-1">Chapter</label></strong>
                        <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                            <option>Select Chapter</option>
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm w-full">
                            Search
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm pl-10"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-blue-700 text-white text-left">
                            <th className="px-4 py-2 font-medium">MATERIALS</th>
                            <th className="px-4 py-2 font-medium">CLASS</th>
                            <th className="px-4 py-2 font-medium">SUBJECT</th>
                            <th className="px-4 py-2 font-medium">CHAPTER</th>
                            <th className="px-4 py-2 font-medium">DESCRIPTION</th>
                            <th className="px-4 py-2 font-medium">UPLOADED</th>
                            <th className="px-4 py-2 font-medium">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {[1, 2, 3, 4].map((item, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="px-4 py-2">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-blue-700 flex items-center gap-2">
                                            <FaFilePdf style={{ color: "red", fontSize: "24px" }} />
                                            Quadratic Equations Notes.pdf
                                        </span>
                                        <span className="text-xs text-gray-500">2.4 MB</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2">Class - 10A</td>
                                <td className="px-4 py-2">Mathematics</td>
                                <td className="px-4 py-2">Algebra & Calculus</td>
                                <td className="px-4 py-2">
                                    Master quadratic equations, functions, and advanced calcul...
                                </td>
                                <td className="px-4 py-2">Oct 8, 2023</td>
                                <td className="px-4 py-2">
                                    <button
                                        className="w-9 h-9 flex items-center justify-center 
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

                {/* Footer */}
                <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-500 border-t">
                    <span>1-04 of 97</span>
                    <div className="flex items-center gap-2">
                        <span>Rows per page: 04 ▾</span>
                        <div className="flex items-center justify-center gap-4 bg-[#f9fbfc] p-2 rounded-md">
                            <button
                                onClick={handlePrev}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                                disabled={page === 1}
                            >
                                <FaChevronLeft size={12} />
                            </button>
                            <span className="text-sm font-medium text-gray-700">
                                {page} / {totalPages}
                            </span>
                            <button
                                onClick={handleNext}
                                className="w-8 h-8 rounded-2xl border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                                disabled={page === totalPages}
                            >
                                <FaChevronRight size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewMaterials;
