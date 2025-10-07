import React, { useState } from "react";
import { FaPlus, FaFolderPlus } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function CreateTestQuiz() {
    const [formData, setFormData] = useState({
        class: "",
        section: "",
        subject: "",
        chapter: "",
        title: "",
        type: "",
        duration: "",
        dateTime: "",
    });

    const [questions, setQuestions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, questions });
    };

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { type: "question", text: "", options: ["", "", "", ""], correct: "" }
        ]);
    };

    const handleAddImage = () => {
        setQuestions([
            ...questions,
            { type: "image", image: null }
        ]);
    };
    const handleRemoveQuestion = (index) => {
        setQuestions((prev) => prev.filter((_, i) => i !== index));
    };


    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        if (updated[index].type === "question") {
            if (field === "text" || field === "correct") {
                updated[index][field] = value;
            } else if (field.startsWith("option")) {
                const optIndex = parseInt(field.replace("option", ""), 10);
                updated[index].options[optIndex] = value;
            }
        } else if (updated[index].type === "image" && field === "image") {
            updated[index].image = value;
        }
        setQuestions(updated);
    };
    const navigate = useNavigate();

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
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white bg-whute">
                        Creating Test/Quizzes
                    </button>
                </Link>
                <Link to="/teacher/tests/view">
                    <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-900 hover:text-white">
                        View Test/Quizzes
                    </button>
                </Link>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6 space-y-6"
            >
                <h2 className="text-lg font-semibold text-gray-700 border-b pb-3">
                    Create New Test/Quizzes
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-black-600 mb-1">Class</label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        >
                            <option className="outline-dotted" value="">Please select Class</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Class Section</label>
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        >
                            <option value="">Please select Class Section</option>
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Subject</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        >
                            <option value="">Please select subject</option>
                            <option value="maths">Mathematics</option>
                            <option value="science">Science</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Chapter</label>
                        <select
                            name="chapter"
                            value={formData.chapter}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        >
                            <option value="">Please select chapter</option>
                            <option value="1">Chapter 1</option>
                            <option value="2">Chapter 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Assessment Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Please enter assessment title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Assessment Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        >
                            <option value="">Select Type</option>
                            <option value="mcq">MCQ</option>
                            <option value="written">Written</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Start Date & Time</label>
                        <div className="relative">
                            <input
                                type="datetime-local"
                                name="dateTime"
                                value={formData.dateTime}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500 pr-10"
                            />
                            <FiCalendar className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-black-600 mb-1">Duration (minutes)</label>
                        <input
                            type="number"
                            name="duration"
                            placeholder="e.g., 60"
                            value={formData.duration}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Render Questions */}
                {questions.map((q, index) => (
                    <div
                        key={index}
                        className="relative p-4 border-l-4 border-blue-600 bg-gray-50 rounded-lg mb-4 space-y-3"
                    >
                        {/* ❌ Cross Button */}
                        <button
                            type="button"
                            onClick={() => handleRemoveQuestion(index)}
                            className="absolute top-1 right-1 text-blue-600 hover:text-red-600"
                        >
                            ✖
                        </button>

                        {q.type === "question" && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter question text"
                                    value={q.text}
                                    onChange={(e) => handleQuestionChange(index, "text", e.target.value)}
                                    className="w-full border text-black rounded-lg px-3 py-2"
                                />
                                <div className="flex gap-2">
                                    {q.options.map((opt, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            placeholder={`Option ${String.fromCharCode(65 + i)}`}
                                            value={opt}
                                            onChange={(e) =>
                                                handleQuestionChange(index, `option${i}`, e.target.value)
                                            }
                                            className="border rounded-lg px-3 py-2 flex-1"
                                        />
                                    ))}
                                </div>
                                <label className="block text-sm text-black-600 mt-2 mb-1">
                                    Correct Answer
                                </label>
                                <select
                                    value={q.correct}
                                    onChange={(e) => handleQuestionChange(index, "correct", e.target.value)}
                                    className="border rounded-lg px-3 py-2 w-full"
                                >
                                    <option value="">Select Correct Answer</option>
                                    <option value="A">Option A</option>
                                    <option value="B">Option B</option>
                                    <option value="C">Option C</option>
                                    <option value="D">Option D</option>
                                </select>
                            </>
                        )}

                        {q.type === "image" && (
                            <>
                                <label className="block font-medium text-gray-700 mb-1">
                                    Upload Image
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        handleQuestionChange(index, "image", e.target.files[0])
                                    }
                                    className="w-full"
                                />
                            </>
                        )}
                    </div>
                ))}

                {/* Add Buttons */}
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={handleAddQuestion}
                        className="flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100"
                    >
                        <FaPlus /> Add Questions
                    </button>
                    <button
                        type="button"
                        onClick={handleAddImage}
                        className="flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100"
                    >
                        <FaFolderPlus /> Add Images
                    </button>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-900"
                >
                    <FaPlus /> Create test/quizze
                </button>
            </form>
        </div>
    );
}
