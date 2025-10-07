import React, { useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import { FaPaperclip } from "react-icons/fa";
import { BsPinAngleFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { FiFilter, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DiscussionForum = () => {
    const handleAttachmentClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const navigate = useNavigate();

    const [visibility, setVisibility] = useState('public'); // default is public

    const handleChange = (event) => {
        setVisibility(event.target.value);
        console.log("Selected Visibility:", event.target.value);
    };
    const fileInputRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="p-6 bg-gray-100">
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
            <div className="flex gap-2 mb-6">
                <Link to="/teacher/communication">
                    <button className="bg-white text-gray-700 border ml-4 border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900  hover:text-white">
                        Messages
                    </button>
                </Link>

                <Link to="/teacher/discussion" className="bg-blue-700 text-white border ml-4 border-gray-300 px-4 py-2 rounded-md text-sm flex items-center justify-center hover:bg-blue-900 hover:text-white">
                    Discussion Forum
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row h-screen font-sans">
                {/* Left Panel - Recent Questions */}
                <div className="sm:w-[30%] w-full bg-white p-4 border-r">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Recent Questions</h2>
                        <div className="relative inline-block text-left">
                            <button
                                onClick={toggleDropdown}
                                className="bg-blue-700 p-2 rounded-full hover:bg-blue-900"
                            >
                                <FiFilter className="text-white text-lg" />
                            </button>

                            {isOpen && (
                                <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <ul className="text-sm text-gray-700">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            All Questions
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            My Classes
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            Pinned
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Search forum"
                        className="w-full px-3 py-2 border mb-4 focus:outline-none focus:ring-2 rounded-full focus:ring-blue-700"
                    />
                    <div className="space-y-3">
                        {[
                            {
                                title: "Understanding Newton’s Laws",
                                desc: "Can someone explain the third law in...",
                                author: "Michael B. - Physics 101",
                                time: "Today, 9:30 AM",
                                badge: "2 new",
                            },
                            {
                                title: "Assignment 2 Question 5",
                                desc: "I'm stuck on the last part of question 5...",
                                author: "Sarah L. - Math 201",
                                time: "Yesterday, 4:15 PM",
                                alert: true,
                            },
                            {
                                title: "Recommended reading materials",
                                desc: "What books would you suggest for ad...",
                                author: "David K. - Literature 110",
                                time: "2 days ago",
                                badge: "2 new",
                            },
                            {
                                title: "Midterm exam topics",
                                desc: "What chapters will be covered in the...",
                                author: "Emma R. - Chemistry 150",
                                time: "3 days ago",
                                alert: true,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg p-3 shadow border hover:bg-gray-50 cursor-pointer"
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-sm text-gray-800">
                                        {item.title}
                                    </h3>
                                    {item.badge && (
                                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                    {item.alert && <span className="text-orange-500">📌</span>}
                                </div>
                                <p className="text-xs text-gray-500 truncate">{item.desc}</p>
                                <p className="text-xs text-gray-400 mt-1">{item.author}</p>
                                <p className="text-xs text-gray-400">{item.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Post Details */}
                <div className="sm:w-[70%] w-full bg-white p-6 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Understanding Newton’s Laws</h2>
                        <div className="bg-blue-700 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <FiBell className="text-white text-xl" />
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                        Posted by <span className="font-medium">Michael B.</span> in Physics 101
                    </p>

                    {/* Teacher's Answer */}
                    <div className="bg-[#FEF7FF] border-l-4 border-[#6750A4] p-4 rounded-md relative">
                        <p className="text-sm font-semibold text-gray-800">
                            Professor Smith (Teacher)
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                            Great question about Newton’s Third Law! Here’s a simple way to
                            understand it: “For every action, there is an equal and opposite
                            reaction.” When you push against a wall, the wall pushes back with
                            equal force. That’s why you don’t fall through!
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            I’ve attached a diagram that might help visualize this concept.
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-sm bg-gray-100 rounded-md px-3 py-2 w-fit">
                            <FiPaperclip /> newtons_laws_diagram.pdf
                        </div>
                        <div className="absolute top-2 right-2 text-gray-400 text-xs flex items-center gap-1">
                            <BsPinAngleFill className="text-[#6750A4]" /> Pinned Answer
                        </div>
                    </div>

                    {/* Student's Question */}
                    <div className="bg-[#f9f9e8] border-l-4 border-[#dedd9e] p-4 rounded-md relative mt-4">
                        <p className="text-sm font-semibold text-gray-800">
                            Michael B. (Student)
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                            Hi everyone,
                            <br />
                            I’m having trouble understanding Newton’s Third Law. The textbook
                            explanation is quite technical, and I was hoping someone could
                            explain it in simpler terms with maybe a real-world example?
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            Specifically, I’m confused about how the forces interact between two
                            objects. Any help would be appreciated!
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-sm bg-white rounded-md px-3 py-2 w-fit">
                            <FiPaperclip /> newtons_laws_diagram.pdf
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Today, 9:30 AM</p>
                    </div>

                    {/* Reply Box */}
                    <div className="mt-5 border-t pt-4">
                        <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Post a Reply</p>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="replyVisibility"
                                        value="public"
                                        checked={visibility === 'public'}
                                        onChange={handleChange}
                                        className="form-radio text-[#6750A4] focus:ring-[#6750A4]"
                                    />
                                    <span className="text-sm text-gray-800">
                                        Public <span className="text-gray-500">(Visible to class)</span>
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="replyVisibility"
                                        value="private"
                                        checked={visibility === 'private'}
                                        onChange={handleChange}
                                        className="form-radio text-gray-400 focus:ring-gray-400"
                                    />
                                    <span className="text-sm text-gray-800">
                                        Private <span className="text-gray-500">(Only to student)</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={handleAttachmentClick} className="text-[#1C1B1F] hover:text-blue-700">
                                <FaPaperclip size={18} />
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={(e) => console.log("Attached file:", e.target.files[0])}
                            />
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Type a message here..."
                                    className="w-full pl-4 pr-10 py-3 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700">
                                    <IoMdSend size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussionForum;