import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
    const navigate = useNavigate();
    return (
        <div className="p-6 bg-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-500">My Profile</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    <button
                        onClick={() => navigate("/teacher/dashboard")}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <AiOutlineHome className="text-gray-600" size={15} />
                    </button>
                    <span>/</span>
                    <span>My profile</span>
                    <span>/</span>
                    <span className="text-blue-700 font-semibold">My profile</span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow border p-4 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="John Son"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg font-medium">John Son</p>
                            <p className="text-sm text-gray-500">johnson123@gmail.com</p>
                        </div>
                    </div>
                    <span className="text-xs text-white bg-blue-700 px-3 py-1 rounded-md">
                        Teacher
                    </span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow border p-4">
                <h3 className="text-lg font-semibold mb-4">Teacher Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">Moni Roya</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Mobile Number</p>
                        <p className="font-medium">+91 9858 586 589</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Email Id</p>
                        <p className="font-medium">johnson123@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Class</p>
                        <p className="font-medium">12</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Class Section</p>
                        <p className="font-medium">B</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Subject</p>
                        <p className="font-medium">English</p>
                    </div>
                </div>
            </div>
        </div>
    );
}