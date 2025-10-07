
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
   FaThLarge,   // Dashboard
  FaBook,      // Courses
  FaClipboardList, // Test
  FaTasks,     // Assignments
  FaCalendarCheck, // Examination and Results
  FaRegListAlt,    // Attendance
  FaBell,     // Notice
  FaTimes,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import logo from "../assets/mindvex.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [classroomOpen, setClassroomOpen] = useState(false);


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
                            to="/"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <MdDashboard size={20} /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/courses"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaBook size={20} /> Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Test"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/Test"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaClipboardList size={20} /> Test
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Assignment"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/Assignment"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTasks size={20} /> Assignment
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Examinations"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/Examinations"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaCalendarCheck size={20} /> Examination and Results
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Attendance"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/Attendance"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaRegListAlt size={20} /> Attendance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Notice"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md 
                                ${currentPath === "/Notice"
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "hover:bg-blue-100 hover:text-blue-700"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <FaBell size={20} /> Notice
                        </Link>
                    </li>

                   
                </ul>
            </div >
        </>
    );
};

export default Sidebar;