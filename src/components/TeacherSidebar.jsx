import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import {
    FaClipboardList,
    FaChevronDown,
    FaChevronUp,
    FaTimes,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import logo from "../assets/mindvex.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [classroomOpen, setClassroomOpen] = useState(false);

    // const menuItems = [
    //     { label: "Materials", to: "/teacher/classroom/materials" },
    //     { label: "Assignments", to: "/teacher/classroom/assignments" },
    //     { label: "Attendance", to: "/teacher/classroom/attendance" },
    // ];
    const menuItems = [
        {
            label: "Materials",
            to: ["/teacher/classroom/materials", "/teacher/materials/view"]
        },
        {
            label: "Assignments",
            to: ["/teacher/classroom/assignments", "/teacher/classroom/assignments_view", "/teacher/classroom/assignments_submission"]
        },
        {
            label: "Attendance",
            to: ["/teacher/classroom/attendance", "/teacher/classroom/record", "/teacher/classroom/leave"]
        },
    ];


    return (
        <>
            {/* Sidebar toggle button (top right corner) */}
            <button
                className="fixed top-4 right-4 z-50 bg-black border shadow-md p-2 rounded-full hover:bg-gray-100 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaArrowLeft size={18} /> : <FaArrowRight size={18} />}
            </button>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`fixed md:static top-0 left-0 h-full bg-white border-r w-70 p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:translate-x-0 z-40`}
            >
                {/* Logo and close button */}
                <div className="flex items-center justify-between mb-19">
                    <img
                        src={logo}
                        alt="Mindvex LMS"
                        className="w-40 h-12 object-contain"
                    />
                    <button
                        className="md:hidden text-2xl text-gray-600 hover:text-red-600"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Sidebar menu */}
                <ul className="space-y-2 text-gray-600 mt-10">
                    {/* Dashboard */}
                    <li>
                        <Link
                            to="/teacher/dashboard"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/teacher/dashboard"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <MdDashboard size={20} /> Dashboard
                        </Link>
                    </li>

                    {/* Classroom dropdown */}
                    <li>
                        <div
                            className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
                                ${["/teacher/classroom", "/teacher/materials/view"]
                                    .some(path => currentPath.startsWith(path))
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "text-gray-600 hover:text-blue-700"
                                }`}
                            onClick={() => setClassroomOpen(!classroomOpen)}
                        >
                            <div className="flex items-center gap-2">
                                <FaIdCard size={20} className="text-4xl" />
                                Classroom Management
                            </div>
                            <div className="ml-2">
                                {classroomOpen ? (
                                    <FaChevronUp className="w-4 h-4 ml-auto text-blue-700" />
                                ) : (
                                    <FaChevronDown className="w-4 h-4 ml-auto" />
                                )}
                            </div>
                        </div>

                        {classroomOpen && (
                            <nav className="ml-6 mt-4 relative border-l border-gray-200">
                                {menuItems.map((item) => {
                                    const isActive = item.to.some((path) => currentPath.startsWith(path));

                                    return (
                                        <Link
                                            key={item.label}
                                            to={item.to[0]}   // first one as main navigation link
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center mt-6 first:mt-0 relative"
                                        >
                                            {/* Active dot */}
                                            {isActive && (
                                                <span className="w-3 h-3 rounded-full bg-blue-600 absolute -left-1.5"></span>
                                            )}
                                            <span
                                                className={`pl-5 font-medium ${isActive ? "text-blue-700" : "text-gray-400 hover:text-blue-600"
                                                    }`}
                                            >
                                                {item.label}
                                            </span>
                                        </Link>
                                    );
                                })}

                            </nav>
                        )}
                    </li>

                    {/* Test/Quizzes */}
                    <li>
                        <Link
                            to="/teacher/tests"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
            ${["/teacher/tests", "/teacher/tests/view", "/teacher/tests/report"]
                                    .some(path => currentPath.startsWith(path))
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaClipboardList size={20} /> Test/Quizzes
                        </Link>
                    </li>

                    {/* Communication */}
                    <li>
                        <Link
                            to="/teacher/communication"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md
                                ${["/teacher/communication", "/teacher/discussion"]
                                    .some(path => currentPath.startsWith(path))
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <BiMessageDetail size={24} /> Communication
                        </Link>
                    </li>

                    {/* Performance Analytics */}
                    <li>
                        <Link
                            to="/teacher/analytics"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md
                                ${["/teacher/analytics", "/teacher/analytics/chart"]
                                    .some(path => currentPath.startsWith(path))
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {/* <FaCalendarAlt size={20} /> Performance Analytics */}
                            <MdMonitor size={23} className="text-3xl" />
                            <FaChartLine className="absolute text-sm text-purple-600" /> Performance Analytics
                        </Link>
                    </li>

                    {/* Syllabus */}
                    <li>
                        <Link
                            to="/teacher/syllabus"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/teacher/syllabus"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaBookOpen size={20} title="Syllabus" /> My Syllabus
                        </Link>
                    </li>
                </ul>
            </div >
        </>
    );
};

export default Sidebar;
