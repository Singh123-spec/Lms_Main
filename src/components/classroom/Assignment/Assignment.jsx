import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Assignment = () => {
    const [formData, setFormData] = useState({
        class: "",
        section: "",
        subject: "",
        chapter: "",
        title: "",
        dueDate: "",
        description: "",
        guidelines: "",
        file: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Uploading:", formData);
    };

    return (
        <div className="p-6 font-sans bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Assignment</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md"
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>Assignment</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Assignment</span>
                </div>
            </div>

            {/* Assignment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-80 relative">
                    {/* Left accent bar */}
                    <div className="absolute top-0 left-0 h-full w-1 bg-green-400 rounded-l-lg"></div>

                    {/* Top Row */}
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-gray-800 font-medium text-sm">
                            MATH301 - Linear Algebra
                        </h2>
                        <span className="text-xs text-green-500 font-medium bg-green-100">
                            Due in 5 days
                        </span>
                    </div>

                    {/* Submissions */}
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
                        <span>Submissions</span>
                        <span className="font-medium">13/20</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="bg-teal-400 h-2 rounded-full"
                            style={{ width: `${(13 / 20) * 100}%` }}
                        ></div>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-80 relative">
                    {/* Left accent bar */}
                    <div className="absolute top-0 left-0 h-full w-1 bg-red-400 rounded-l-lg"></div>

                    {/* Top Row */}
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-gray-800 font-medium text-sm">
                            MATH301-Linear Algebra
                        </h2>
                        <span className="text-xs text-red-600 font-medium bg-red-100">
                            Due in 2 days
                        </span>
                    </div>

                    {/* Submissions */}
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
                        <span>Submissions</span>
                        <span className="font-medium">8/20</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="bg-red-400 h-2 rounded-full"
                            style={{ width: `${(8 / 20) * 100}%` }}
                        ></div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-80 relative">
                    {/* Left accent bar */}
                    <div className="absolute top-0 left-0 h-full w-1 bg-green-400 rounded-l-lg"></div>

                    {/* Top Row */}
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-gray-800 font-medium text-sm">
                            MATH301 - Linear Algebra
                        </h2>
                        <span className="text-xs text-green-600 font-medium bg-green-100">
                            Due in 5 days
                        </span>
                    </div>

                    {/* Submissions */}
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
                        <span>Submissions</span>
                        <span className="font-medium">13/20</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="bg-teal-400 h-2 rounded-full"
                            style={{ width: `${(13 / 20) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <Link
                    to="/teacher/classroom/assignments"
                >
                    <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-700">Create Assignment</button>
                </Link>
                <Link
                    to="/teacher/classroom/assignments_view"
                >
                    <button className="px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white">View Assignments</button>
                </Link>
                <Link
                    to="/teacher/classroom/assignments_submission"
                >
                    <button className="px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg shadow hover:bg-blue-700 hover:text-white">Student Submissions</button>
                </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Create New Assignment</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                            <select name="class" value={formData.class} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full">
                                <option value="">Please select Class</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Class Section</label>
                            <select name="section" value={formData.section} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full">
                                <option value="">Please select Class Section</option>
                                <option value="A">Section A</option>
                                <option value="B">Section B</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <select name="subject" value={formData.subject} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full">
                                <option value="">Please select subject</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Chapter</label>
                            <select name="chapter" value={formData.chapter} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full">
                                <option value="">Please select chapter</option>
                                <option value="1">Chapter 1</option>
                                <option value="2">Chapter 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Assessment Title</label>
                            <input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="Please enter assessment title" className="border border-gray-300 p-2 rounded w-full" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                            <input name="dueDate" value={formData.dueDate} onChange={handleChange} type="date" className="border border-gray-300 p-2 rounded w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Brief Description" className="border border-gray-300 p-2 rounded w-full h-24" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Upload File</label>
                            <div className="border border-dashed border-gray-400 p-4 rounded flex items-center justify-center text-center text-gray-500 cursor-pointer hover:bg-gray-100">
                                <label className="w-full h-full flex flex-col items-center justify-center">
                                    <input type="file" onChange={handleFileChange} className="hidden" />
                                    <FaUpload className="text-blue-700 text-xl mb-1" />
                                    <p>Drag & drop files here or click to browse</p>
                                    <small className="text-gray-400">Supports PDF, DOCX, PPTX, MP4, JPG</small>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Submission Guidelines</label>
                        <textarea name="guidelines" value={formData.guidelines} onChange={handleChange} placeholder="submission guidelines" className="border border-gray-300 p-2 rounded w-full h-20" />
                    </div>

                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
                        <FaUpload className="inline mr-2" /> Upload assignment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Assignment;