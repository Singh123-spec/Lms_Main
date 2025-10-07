import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const MaterialUpload = () => {
    const [formData, setFormData] = useState({
        class: "",
        section: "",
        subject: "",
        chapter: "",
        description: "",
        file: null,
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Uploading:", formData);
        // Handle actual upload here
    };
    const [selected, setSelected] = useState(false);
    return (
        <div className="p-6 bg-gray-100">
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
                    <span className="text-blue-700 font-semibold">Material</span>
                </div>
            </div>
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                <Link
                    to="/teacher/classroom/materials"
                // className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-700  hover:text-white"
                >
                    <button
                        onClick={() => setSelected(!selected)}
                        className={`bg-blue-700 text-white border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center
        ${selected ? "bg-blue-700 text-white" : "hover:bg-blue-900 hover:text-white"}`}
                    >
                        Upload Materials
                    </button>
                </Link>

                <Link
                    to="/teacher/materials/view"
                     className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900  hover:text-white"
                    >
                       View Materials
                </Link>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow border p-6">
                <h2 className="text-lg font-semibold mb-6">Upload New Material</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Class
                            </label>
                            <select
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Please select Class</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Class Section
                            </label>
                            <select
                                name="section"
                                value={formData.section}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Please select Class Section</option>
                                <option value="A">Section A</option>
                                <option value="B">Section B</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Please select subject</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Chapter
                            </label>
                            <select
                                name="chapter"
                                value={formData.chapter}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Please select chapter</option>
                                <option value="1">Chapter 1</option>
                                <option value="2">Chapter 2</option>
                            </select>
                        </div>
                    </div>

                    {/* Description and File Upload */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Brief Description"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload File
                            </label>
                            <label className="border-2 border-dashed border-indigo-300 w-full h-32 flex flex-col items-center justify-center rounded-md cursor-pointer hover:bg-indigo-50 transition">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <FaUpload className="text-indigo-600 text-xl mb-1" />
                                <p className="text-sm text-gray-600">Drag & drop files here or click to browse</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Supports: PDF, DOCX, PPTX, MP4, JPG
                                </p>
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="file"
                            onChange={handleFileChange}
                            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
                        >
                            <FaUpload /> Upload Material
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MaterialUpload;
