// Dashboard.jsx
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaFileMedical, FaMapMarkerAlt, FaUpload, FaUserGraduate } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function TeacherDashboard() {
    const [today, setToday] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const now = new Date();

        // Indian Standard format: Tuesday, 5 August 2025
        const options = { weekday: "long", day: "numeric", month: "long" };
        const formattedDate = now.toLocaleDateString("en-IN", options);

        setToday(formattedDate);
    }, []);

    const links = [
        { name: "Attendance marking", icon: <FiFileText className="text-blue-700 text-4xl" />, path: "/teacher/classroom/attendance" },
        { name: "Assignment grading", icon: <FaUserGraduate className="text-blue-700 text-4xl" />, path: "/teacher/classroom/assignments_view" },
        { name: "Create Assignment", icon: <FaFileMedical className="text-blue-700 text-4xl" />, path: "/teacher/classroom/assignments" },
        { name: "Uploading materials", icon: <FaUpload className="text-blue-700 text-4xl" /> },
    ];
    const scheduleData = [
        { time: "08:00 AM - 09:00 AM", subject: "Mathematics - Class 6A", room: "Room 204", status: "Completed", color: "green" },
        { time: "09:45 - 11:15", subject: "Physics - Grade 11B", room: "Room 312", status: "Completed", color: "green" },
        { time: "13:15 - 14:45", subject: "Mathematics - Grade 9C", room: "Room 204", status: "Completed", color: "green" },
        { time: "15:00 - 16:30", subject: "Mathematics - Class 6A", room: "Room 204", status: "Upcoming", color: "orange" },
        { time: "13:15 - 14:45", subject: "Mathematics - Grade 9C", room: "Room 204", status: "Upcoming", color: "orange" },
        { time: "15:00 - 16:30", subject: "Mathematics - Class 6A", room: "Room 204", status: "Upcoming", color: "orange" },
    ];

    const colorClasses = {
        green: {
            border: "border-green-500",
            text: "text-green-600",
            badge: "bg-green-500",
        },
        orange: {
            border: "border-orange-500",
            text: "text-orange-600",
            badge: "bg-orange-500",
        },
    };
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            {/* <Sidebar /> */}

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Navbar */}
                {/* <Navbar /> */}
                {/* Breadcrumb Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold text-gray-500">Dashboard</h1>
                    <div className="flex items-center text-sm text-gray-600 space-x-2">
                        <button
                            onClick={() => navigate("/teacher/dashboard")}
                            className="p-2 rounded-md"
                        >
                            <AiOutlineHome className="text-gray-600" size={15} />
                        </button>
                        <span>/</span>
                        <span>Dashboard</span>
                        <span>/</span>
                        <span className="text-blue-700 font-semibold">Default</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    {/* Today's Schedule */}
                    <section className="lg:col-span-2 bg-white p-4 rounded-lg shadow ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-gray-700">Today's Schedule</h2>
                            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">
                                {today}
                            </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 ">
                            {scheduleData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`hover:bg-purple-50 cursor-pointer transform hover:scale-105 
                                   transition duration-300 ease-in-out bg-white p-4 rounded-lg shadow border-l-4 ${colorClasses[item.color].border}`}
                                >
                                    {/* Top Row: Time + Status */}
                                    <div className="flex justify-between items-center hover:bg-purple-50 cursor-pointer transform hover:scale-105 
                                   transition duration-300 ease-in-out">
                                        <span className={`text-sm font-semibold ${colorClasses[item.color].text}`}>
                                            {item.time}
                                        </span>
                                        <span className={`px-3 py-1 text-xs rounded text-white ${colorClasses[item.color].badge}`}>
                                            {item.status}
                                        </span>
                                    </div>

                                    {/* Subject */}
                                    <h3 className="mt-2 font-medium text-gray-700">{item.subject}</h3>

                                    {/* Room */}
                                    <div className="flex items-center gap-2 mt-1 text-gray-600">
                                        <FaMapMarkerAlt className="text-black text-sm" />
                                        <span className="text-sm">{item.room}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Pending Tasks */}
                    <section className="p-4 rounded-lg shadow bg-white">
                        <h2 className="font-semibold text-gray-700 mb-4">Pending Tasks</h2>
                        <div className="space-y-4 ">
                            {[
                                { title: "Grade Physics Test", detail: "Grade 11B - Due Today", btn: "Go to Grade", color: "red" },
                                { title: "Submit Attendance", detail: "Mathematics 10A - Yesterday", btn: "Submit Now", color: "blue" },
                                { title: "Prepare Exam Questions", detail: "Mid-term Exams - Due Friday", btn: "Start", color: "orange" },
                                { title: "Grade Physics Test", detail: "Grade 11B - Due 10-Feb", btn: "Go to Grade", color: "red" },
                                { title: "Submit Attendance", detail: "Mathematics 10A - Yesterday", btn: "Submit Now", color: "blue" },
                            ].map((task, idx) => (
                                <div
                                    key={idx}
                                    className={`hover:bg-purple-50 cursor-pointer transform hover:scale-105 
                                   transition duration-300 ease-in-out flex justify-between items-center p-4 bg-white rounded-lg shadow border-l-4 
        ${task.color === "red" ? "border-red-500" : ""} 
        ${task.color === "blue" ? "border-blue-500" : ""} 
        ${task.color === "orange" ? "border-orange-500" : ""}`}
                                >
                                    <div>
                                        <p className="font-medium text-gray-700">{task.title}</p>
                                        <p className="text-xs text-gray-500">{task.detail}</p>
                                    </div>
                                    <button
                                        className={`px-3 py-1 text-sm rounded font-semibold 
          ${task.color === "red" ? "text-red-600 border border-red-500" : ""} 
          ${task.color === "blue" ? "text-blue-600 border border-blue-500" : ""} 
          ${task.color === "orange" ? "text-orange-600 border border-orange-500" : ""}`}
                                    >
                                        {task.btn}
                                    </button>
                                </div>
                            ))}
                        </div>

                    </section>
                </div>

                {/* Quick Links */}
                <section className="bg-white p-4 rounded-lg shadow mt-6 ">
                    <h2 className="font-semibold text-gray-700 mb-4">Quick Links</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {links.map((link, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate(link.path)}
                                className="flex flex-col items-center justify-center border rounded-lg py-6 
                                   hover:bg-purple-50 cursor-pointer transform hover:scale-105 
                                   transition duration-300 ease-in-out bg-white"
                            >
                                <div className="mb-2">{link.icon}</div>
                                <p className="text-sm font-medium text-center">{link.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
