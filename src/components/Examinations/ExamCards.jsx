import React from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";

const subjectColors = {
  Mathematics: "border-orange-500 text-orange-500",
  Science: "border-indigo-500 text-indigo-500",
  History: "border-teal-500 text-teal-500",
};

const iconColors = {
  Mathematics: "text-orange-500",
  Science: "text-indigo-500",
  History: "text-teal-500",
};

const ExamCards = ({ subject, date, time, duration }) => {
  const borderColor = subjectColors[subject] || "border-gray-300";
  const iconColor = iconColors[subject] || "text-gray-500";

  return (
    <div
      className={`border-l-4 ${borderColor} bg-white rounded-md shadow p-4 hover:bg-purple-50 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out ml-6`}
    >
      <h3 className="font-semibold text-base text-gray-800">{subject}</h3>

      <div className="mt-2 flex justify-between text-sm text-gray-600">
        {/* Date Section */}
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">Date</span>
          <div className="flex items-center gap-2 mt-1">
            <FaRegCalendarAlt className={`${iconColor}`} />
            <span>{date}</span>
          </div>
        </div>

        {/* Time Section */}
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">Time</span>
          <div className="flex items-center gap-2 mt-1">
            <FaRegClock className={`${iconColor}`} />
            <span>{time}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <span className="font-medium text-gray-500">Duration</span>
        <div className="flex items-center gap-2 mt-1">
          <BsClockHistory className={`mr-2 ${iconColor}`} />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
