import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaBell } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ setIsSidebarOpen }) => {
  const [dateTime, setDateTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const optionsDate = { day: "numeric", month: "short", year: "numeric" };
      const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
      const dateStr = now.toLocaleDateString("en-IN", optionsDate);
      const timeStr = now.toLocaleTimeString("en-IN", optionsTime);
      setDateTime(`${timeStr} | ${dateStr}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const notifications = [
    {
      id: 1,
      date: "8th March, 2022",
      title: "School Reopens After Break",
      time: "1 day ago",
      desc: "All classes will resume on Monday",
      color: "bg-purple-500",
    },
    {
      id: 2,
      date: "8th March, 2022",
      title: "Parent-Teacher Meetings",
      time: "Today",
      desc: "Schedule for the upcoming parent-teacher meetings has been published.",
      tag: "New",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      date: "20th Sep, 2022",
      title: "Mathematics Competition",
      time: "12:00 PM",
      desc: "Inter-school mathematics competition registration is now open for grades 9–12.",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-white px-6 py-3 shadow">
      {/* Left: Hamburger + Greeting */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <FaBars />
        </button>
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold text-blue-600">
            Hello John Doe
          </h2>
          <p className="text-sm text-blue-500">{dateTime}</p>
        </div>
      </div>

      {/* Middle: Search */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search Anything"
            className="border rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Right: Bell + Profile + Options */}
      <div className="flex items-center gap-6 relative">
        {/* Bell Notification */}
        <div className="relative">
          <FaBell
            className="text-xl text-gray-600 cursor-pointer"
            // onClick={() => setShowNotifications(!showNotifications)}
          />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>

          {/* Notification Popup */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-[360px] bg-white shadow-xl rounded-xl p-4 z-50 flex flex-col">
              <h2 className="text-lg font-bold mb-4">Notification</h2>

              {/* Notification List */}
              <div className="flex-1 overflow-y-auto max-h-72 pr-2">
                {notifications.map((item) => (
                  <div
                    className="relative border-l-2 border-dotted border-gray-300 pl-6 mb-6"
                    key={item.id}
                  >
                    <span
                      className={`absolute left-[-7px] top-1 w-4 h-4 rounded-full ${item.color}`}
                    ></span>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5">
                        {item.date}
                      </span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    {item.tag && (
                      <span className="inline-block mt-1 text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-md font-medium">
                        {item.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* See All Button */}
              <div className="flex justify-end mt-2">
                <Link
                  to="/notifications"
                  className=" text-blue-500 px-4 py-2 rounded-lg hover:text-blue-800"
                >
                  See All
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile Picture */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
        />

        {/* Role Text */}
        <div className="text-sm text-gray-700 font-medium">
          <strong>John Doe </strong>
          <br /> Student
        </div>

        {/* Options Menu */}
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <IoChevronDown className="text-gray-500" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
              <Link to="/profile">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  My Profile
                </button>
              </Link>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
