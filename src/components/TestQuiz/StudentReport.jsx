import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const StudentReport = () => {
    const navigate = useNavigate();
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correct: "Paris",
            studentAnswer: "Paris",
        },
        {
            question: "What is 5 × 7?",
            options: ["25", "35", "12", "42"],
            correct: "35",
            studentAnswer: "25",
        },
        {
            question: "Which city is the capital of Spain?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correct: "Madrid",
            studentAnswer: "Paris",
        },
        {
            question: "What is 9 × 4?",
            options: ["25", "36", "12", "42"],
            correct: "36",
            studentAnswer: "36",
        },
    ];

    const [startPage, setStartPage] = useState(1);
    const totalPages = 10;

    const visiblePages = [startPage, startPage + 1, startPage + 2, startPage + 3].filter(
        (page) => page <= totalPages
    );

    const handleNext = () => {
        if (startPage < totalPages) {
            setStartPage(startPage + 1);
        }
    };

    const handlePrev = () => {
        if (startPage > 1) {
            setStartPage(startPage - 1);
        }
    };

    return (
        <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Test/Quizzes</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md"
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>Test/Quizzes</span>
                    <span>/</span>
                    <span className="text-blue-600 font-semibold">Student Report</span>
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

            {/* Student Info */}
            <div className="bg-white rounded-lg shadow p-4">
                <p className="text-lg font-semibold">Student: John Doe</p>
                <p className="text-gray-500">
                    Grade 10 - A | Submitted: Oct 15, 2023 10:45 AM
                </p>
            </div>

            {/* Questions & Answers */}
            <div className="bg-white rounded-lg shadow p-4 relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-lg">Questions & Answers</h2>
                    <p className="text-sm text-gray-500">
                        Question 1 of 10 | Points: 5/5
                    </p>
                </div>

                {questions.map((q, idx) => {
                    const isCorrect = q.studentAnswer === q.correct;
                    return (
                        <div
                            key={idx}
                            className={`rounded-lg p-4 mb-4 relative border-l-4 ${
                                isCorrect
                                    ? "bg-green-50 border-green-500"
                                    : "bg-red-50 border-red-500"
                            }`}
                        >
                            <p className="font-medium mb-3">
                                {idx + 1}. {q.question}
                            </p>

                            {/* Options */}
                            <div className="flex gap-4 flex-wrap">
                                {q.options.map((opt, i) => (
                                    <label
                                        key={i}
                                        className={`flex items-center border rounded-lg px-4 py-2 cursor-pointer min-w-[200px] ${
                                            opt === q.studentAnswer
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-300 bg-white"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            disabled
                                            checked={opt === q.studentAnswer}
                                            className="mr-2 accent-blue-600"
                                        />
                                        {String.fromCharCode(65 + i)}) {opt}
                                    </label>
                                ))}
                            </div>

                            {/* Correct/Incorrect Status */}
                            <div className="absolute top-3 right-3 flex gap-2">
                                {isCorrect ? (
                                    <span className="flex items-center gap-1 border border-green-500 text-green-600 text-sm px-3 py-1 rounded-md bg-white">
                                        <FaCheck className="text-green-500" /> Correct
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 border border-red-500 text-red-500 text-sm px-3 py-1 rounded-md bg-white">
                                        <FaTimes className="text-red-500" /> Incorrect
                                    </span>
                                )}
                            </div>

                            {/* Feedback */}
                            {isCorrect ? (
                                <p className="text-green-600 mt-2 font-medium">
                                    Correct answer
                                </p>
                            ) : (
                                <>
                                    <p className="text-green-600 mt-2 font-medium">
                                        Correct answer: {q.correct}
                                    </p>
                                    <p className="text-red-500 text-sm">
                                        Student’s incorrect answer: {q.studentAnswer}
                                    </p>
                                </>
                            )}
                        </div>
                    );
                })}

                {/* Pagination */}
                <div className="flex justify-end items-center gap-2 mt-4">
                    <button
                        onClick={handlePrev}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                        disabled={startPage === 1}
                    >
                        Prev
                    </button>

                    {visiblePages.map((n, idx) => (
                        <button
                            key={idx}
                            className={`hover:bg-blue-800 hover:text-white px-3 py-1 rounded ${
                                n === startPage
                                    ? "bg-blue-600 text-white"
                                    : "border border-gray-300 hover:bg-blue-800 hover:text-white"
                            }`}
                        >
                            {n}
                        </button>
                    ))}

                    <button
                        onClick={handleNext}
                        disabled={startPage >= totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Bottom Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Grade Summary */}
                <div className="w-full bg-white rounded-xl shadow p-4">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800">Grade Summary</h2>
                    <hr className="my-2" />

                    {/* Points */}
                    <p className="text-sm text-blue-600 mb-3">85 out of 100 points</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
                        <div
                            className="bg-green-600 h-3 rounded-full"
                            style={{ width: "85%" }}
                        ></div>
                    </div>

                    {/* Correct / Incorrect */}
                    <div className="flex justify-between px-4">
                        <div className="text-center">
                            <p className="text-black font-medium">Correct</p>
                            <p className="text-black text-lg font-semibold">8</p>
                        </div>
                        <div className="text-center">
                            <p className="text-black font-medium">Incorrect</p>
                            <p className="text-black text-lg font-semibold">2</p>
                        </div>
                    </div>
                </div>

                {/* Overall Feedback */}
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="font-semibold mb-2">Overall Feedback</p>
                    <p className="text-sm text-gray-500 mb-2">General Comments</p>
                    <textarea
                        className="w-full border rounded-lg p-2 text-sm text-gray-600 mb-4"
                        rows="4"
                        defaultValue="Good work overall, but you could improve on the algebraic expressions section. Pay attention to the order of operations in your calculations."
                    ></textarea>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                        Send Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentReport;
