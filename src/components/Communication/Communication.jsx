import React, { useRef, useState } from "react";
import { FaPaperclip, FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Communication = () => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const [messages] = useState([
        { initials: "JD", name: "John Doe", time: "12m", text: "Question about tomorrow's assignment deadline" },
        { initials: "PS", name: "Parent - Sarah Johnson", time: "24m", text: "Meeting request about student progress" },
        { initials: "AM", name: "Admin - Principal", time: "Yesterday", text: "Staff meeting reminder for Friday" },
        { initials: "ES", name: "Class-10 Group", time: "2 days ago", text: "Clarification needed on chapter 5 exercises" }
    ]);

    const [selectedMessage, setSelectedMessage] = useState(messages[0]);
    const [newMessage, setNewMessage] = useState("");

    // ✅ Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ✅ Handle reply send
    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        alert(`Reply sent to ${selectedMessage.name}: ${newMessage}`);
        setNewMessage("");
    };

    return (
        <div className="p-6 bg-gray-100">
            {/* ====== Header ====== */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">Communication</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md "
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>Communication</span>
                    <span>/</span>
                    <span className="text-blue-700 font-semibold">Communication</span>
                </div>
            </div>

            {/* ====== Tabs ====== */}
            <div className="flex gap-2 mb-6">
                <Link to="/teacher/communication">
                    <button className="bg-blue-700 text-white border ml-4 border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900 hover:text-white">
                        Messages
                    </button>
                </Link>
                <Link to="/teacher/discussion" className="bg-white text-gray-700 border ml-4 border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900  hover:text-white">
                    Discussion Forum
                </Link>
            </div>

            {/* ====== Layout ====== */}
            <div className="flex flex-col md:flex-row h-[calc(100vh-150px)] bg-[#f9f9fb] border rounded-lg shadow-sm overflow-hidden">

                {/* ✅ Sidebar */}
                <div className="w-full md:w-[280px] bg-white border-r shadow-md flex-shrink-0">
                    <div className="px-4 py-2 border-b flex justify-between items-center">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-800">Messages</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded-full shadow hover:bg-blue-900"
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <div className="px-4 mt-2">
                        <input
                            type="text"
                            placeholder="Search messages"
                            className="w-full px-3 py-2 mb-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                        />
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedMessage(msg)}
                                className={`flex gap-3 px-3 py-3 rounded-md cursor-pointer 
              ${selectedMessage?.name === msg.name ? "bg-blue-100" : "hover:bg-blue-50"}`}
                            >
                                <div className="w-9 h-9 rounded-full bg-blue-300 text-[#21005D] flex items-center justify-center font-semibold">
                                    {msg.initials}
                                </div>
                                <div className="flex flex-col text-sm flex-1 min-w-0">
                                    <div className="font-medium text-[#1C1B1F] truncate">{msg.name}</div>
                                    <div className="text-gray-500 text-xs truncate">{msg.text}</div>
                                </div>
                                <div className="ml-auto text-xs text-gray-400">{msg.time}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ✅ Right side Chat */}
                <div className="flex-1 bg-white p-4 sm:p-6 overflow-y-auto">
                    {selectedMessage ? (
                        <>
                            {/* Chat Header */}
                            <div className="flex items-center gap-3 border-b pb-3">
                                <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center font-semibold">
                                    {selectedMessage.initials}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{selectedMessage.name}</h3>
                                    <p className="text-sm text-gray-500">{selectedMessage.time}</p>
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div className="mt-5 space-y-6">
                                <div className="bg-gray-50 border rounded-lg p-4 shadow-sm">
                                    <p className="text-xs text-gray-400 mb-3">Today, 10:15 AM</p>
                                    <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                                        <p>Hello {selectedMessage.name},</p>
                                        <p>This is a sample message content for <b>{selectedMessage.name}</b>.</p>
                                        <p>Thanks!</p>
                                    </div>
                                </div>
                            </div>

                            {/* Reply Box */}
                            <div className="border-t pt-4 p-4 mt-32">
                                <p className="text-sm text-gray-600 mb-2">Reply</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => fileInputRef.current.click()} className="text-[#1C1B1F] hover:text-blue-700">
                                        <FaPaperclip size={18} />
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                    />
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            placeholder={`Reply to ${selectedMessage.name}...`}
                                            className="w-full pl-4 pr-10 py-3 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700"
                                        >
                                            <IoMdSend size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                            Select a message to view conversation
                        </div>
                    )}
                </div>
            </div>

            {/* ====== Modal for New Message ====== */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                        <h2 className="text-lg font-bold mb-4">New Message</h2>

                        <label className="block text-sm font-medium mb-1">To</label>
                        <select className="w-full border rounded-md px-3 py-2 mb-3">
                            <option value="">Select recipient...</option>
                            <option value="student">Student</option>
                            <option value="parent">Parent</option>
                            <option value="teacher">Teacher</option>
                        </select>

                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject..."
                            className="w-full border rounded-md px-3 py-2 mb-3"
                        />

                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            placeholder="Type your message..."
                            className="w-full border rounded-md px-3 py-2 mb-3 h-24"
                        ></textarea>

                        {/* ✅ Attachments Section */}
                        <label className="block text-sm font-medium mb-2">Attachments</label>
                        <div
                            onClick={() => fileInputRef.current.click()}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mx-auto text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0L8 8m4-4l4 4"
                                />
                            </svg>
                            <p className="mt-2 text-gray-600">Drag & drop files here or click to browse</p>
                            <p className="text-xs text-gray-400">Supports PDF, DOCX, PPTX, MP4, JPG</p>
                            <input type="file" ref={fileInputRef} className="hidden" multiple />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 rounded-md border border-red-400 text-red-500 hover:bg-red-100"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Communication;
