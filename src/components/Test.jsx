import React, { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
const testData = [
  {
    date: 16,
    subject: "Math",
    color: "bg-red-100 hover:bg-red-200",
    text: "text-red-500 hover:text-red-700 cursor-pointer",
    topic: "Linear Equations & Quadratic Functions",
    testDate: "July 15, 2025 (Wednesday)",
    time: "10:00 AM – 11:30 AM",
    score: 42,
    total: 50,
    grade: "Excellent (A)",
    percentage: 84,
  },
  {
    date: 21,
    subject: "Science",
    color: "bg-red-100",
    text: "text-red-500 cursor-pointer",
    topic: "Physics & Chemistry Basics",
    testDate: "July 21, 2025 (Monday)",
    time: "8:00 AM – 9:00 AM",
    score: 38,
    total: 50,
    grade: "Very Good (B+)",
    percentage: 76,
  },
  {
    date: 22,
    subject: "English",
    color: "bg-green-100",
    text: "text-green-600 cursor-pointer",
    topic: "Grammar & Essay Writing",
    testDate: "July 22, 2025 (Tuesday)",
    time: "9:00 AM – 10:30 AM",
    score: 45,
    total: 50,
    grade: "Excellent (A+)",
    percentage: 90,
  },
  {
    date: 23,
    subject: "History",
    color: "bg-yellow-100",
    text: "text-yellow-600 cursor-pointer",
    topic: "World War II & Modern History",
    testDate: "July 23, 2025 (Wednesday)",
    time: "11:00 AM – 12:00 PM",
    score: 40,
    total: 50,
    grade: "Good (B)",
    percentage: 80,
  },
];

const Test = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  const renderDays = () => {
    const days = [];
    const totalDays = 31;
    const startDay = 3; // Wednesday

    // Empty slots before day 1
    for (let i = 0; i < startDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="p-2 border rounded-md text-center text-sm text-gray-700 bg-gray-50 h-24 flex items-center justify-center"
        ></div>
      );
    }

    // Actual days
    for (let i = 1; i <= totalDays; i++) {
      const test = testData.find((t) => t.date === i);
      if (test) {
        days.push(
          <div
            key={i}
            onClick={() => setSelectedTest(test)}
            className={`p-2 border ${test.color} rounded-md text-sm cursor-pointer text-center h-24 flex flex-col items-center justify-center`}
          >
            <p className={`font-semibold ${test.text}`}>{i}</p>
            <p className={`text-base font-semibold ${test.text}`}>{test.subject}</p>

            <p className="text-[10px] text-gray-500">{test.time}</p>
          </div>
        );
      } else {
        days.push(
          <div
            key={i}
            className="p-2 border rounded-md text-center text-sm text-gray-700 bg-gray-50 h-24 flex items-center justify-center"
          >
            <span className="font-bold text-black">{i}</span>
          </div>
        );
      }
    }
    return days;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Test</h2>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <FiHome className="text-xl text-gray-600" />
          <span>/</span>
          <span>Test</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">Test</span>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div
        className="flex items-center justify-between text-white px-4 py-2 rounded-t-md"
        style={{ backgroundColor: "#544EBE" }}
      >
        <button className="flex items-center gap-2 text-base font-medium px-4 py-2 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
          <FaAngleDoubleLeft /> Previous Year
        </button>
        <h3 className="text-lg font-semibold">2025</h3>
        <button className="flex items-center gap-2 text-base font-medium px-4 py-2 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
          Next Year <FaAngleDoubleRight />
        </button>
      </div>

      <div className="flex border rounded-b-md overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/5 p-4 border-r bg-white">
          <select className="w-full border rounded px-2 py-1 mb-4 text-gray-600 font-medium">
            <option>January</option>
          </select>

          <div>
            <h4 className="text-md font-medium mb-3">Quick Stats</h4>
            <ul className="text-sm space-y-4">
              <li className="flex justify-between items-center border-b pb-2 text-sm text-gray-600">
                Completed Tests
                <span className="bg-red-200 text-red-800 px-2 rounded-full">
                  19
                </span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 text-sm text-gray-600">
                Current Tests
                <span className="bg-green-200 text-green-800 px-2 rounded-full text-xs font-medium">
                  2
                </span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 text-sm text-gray-600">
                Upcoming Tests
                <span className="bg-yellow-200 text-yellow-800 px-2 rounded-full">
                  2
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="w-4/5 p-4 bg-white">
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div
                key={d}
                className="font-medium text-white p-2 rounded"
                style={{ backgroundColor: "#544EBE" }}
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
        </div>
      </div>

      {/* Modal */}
      {selectedTest && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl w-80 shadow-lg overflow-hidden animate-[fadeIn_0.3s_ease]">
            {/* Header */}
            <div className="bg-purple-700 text-white p-4">
              <h2 className="text-lg font-bold">{selectedTest.subject} Test</h2>
              <p className="text-sm">{selectedTest.topic}</p>
            </div>

            {/* Body */}
            <div className="p-4">
              {/* Topic */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded">
                  <FaBook className="text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Topic</p>
                  <p className="text-sm font-medium">{selectedTest.topic}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded">
                  <FaCalendarAlt className="text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Date</p>
                  <p className="text-sm font-medium">{selectedTest.testDate}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded">
                  <FaClock className="text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Time</p>
                  <p className="text-sm font-medium">{selectedTest.time}</p>
                </div>
              </div>

              {/* Score */}
              <div className="bg-green-50 text-center py-4 rounded-lg mb-3">
                <p className="text-green-600 text-2xl font-bold">
                  {selectedTest.score}
                </p>
                <p className="text-gray-500 text-sm">
                  out of {selectedTest.total} points
                </p>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  {selectedTest.grade}
                </span>
              </div>

              {/* Progress Bar */}
              <p className="text-sm text-gray-500 mb-1">Your Score</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${selectedTest.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-700">
                {selectedTest.percentage}%
              </p>
            </div>

            {/* Footer */}
            <div className="p-3 border-t">
              <button
                onClick={() => setSelectedTest(null)}
                className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;

// import React, { useState } from "react";

// const testData = [
//   {
//     date: 16,
//     subject: "Math",
//     color: "bg-red-200", // Adjusted for lighter red
//     text: "text-red-700", // Adjusted for darker text
//     topic: "Linear Equations & Quadratic Functions",
//     testDate: "July 15, 2025 (Wednesday)",
//     time: "8:00 AM – 9:00 AM", // Changed time to match image
//     score: 42,
//     total: 50,
//     grade: "Excellent (A)",
//     percentage: 84,
//   },
//   {
//     date: 21,
//     subject: "Science",
//     color: "bg-pink-200", // Adjusted for pink
//     text: "text-pink-700", // Adjusted for darker text
//     topic: "Physics & Chemistry Basics",
//     testDate: "July 21, 2025 (Monday)",
//     time: "8:00 AM – 9:00 AM",
//     score: 38,
//     total: 50,
//     grade: "Very Good (B+)",
//     percentage: 76,
//   },
//   {
//     date: 22,
//     subject: "English",
//     color: "bg-green-200", // Adjusted for lighter green
//     text: "text-green-700", // Adjusted for darker text
//     topic: "Grammar & Essay Writing",
//     testDate: "July 22, 2025 (Tuesday)",
//     time: "8:00 AM – 9:00 AM", // Changed time to match image
//     score: 45,
//     total: 50,
//     grade: "Excellent (A+)",
//     percentage: 90,
//   },
//   {
//     date: 23,
//     subject: "History",
//     color: "bg-yellow-200", // Adjusted for lighter yellow
//     text: "text-yellow-700", // Adjusted for darker text
//     topic: "World War II & Modern History",
//     testDate: "July 23, 2025 (Wednesday)",
//     time: "8:00 AM – 9:00 AM", // Changed time to match image
//     score: 40,
//     total: 50,
//     grade: "Good (B)",
//     percentage: 80,
//   },
// ];

// const Test = () => {
//   const [selectedTest, setSelectedTest] = useState(null);

//   const renderDays = () => {
//     const days = [];
//     // Adjust start day to match the second image (July 2025 starts on a Wednesday)
//     // Adding 2 empty divs for Sun, Mon
//     for (let i = 0; i < 2; i++) {
//         days.push(
//             // Reduced padding from p-2 to p-1
//             <div key={`empty-${i}`} className="p-1 aspect-square flex items-center justify-center"></div>
//         );
//     }

//     for (let i = 1; i <= 31; i++) {
//       const test = testData.find((t) => t.date === i);
//       if (test) {
//         days.push(
//           <div
//             key={i}
//             onClick={() => setSelectedTest(test)}
//             // Reduced padding from p-2 to p-1
//             className={`p-1 border border-gray-200 rounded-lg text-center text-sm cursor-pointer hover:shadow-md transition-shadow ${test.color} aspect-square flex flex-col items-center justify-center`}
//           >
//             <p className={`font-semibold text-base ${test.text}`}>{i}</p>
//             <p className={`text-xs ${test.text} font-medium`}>{test.subject}</p>
//             <p className="text-xs text-gray-600">{test.time}</p>
//           </div>
//         );
//       } else {
//         days.push(
//           <div
//             key={i}
//             // Reduced padding from p-2 to p-1
//             className="p-1 border border-gray-200 rounded-lg text-center text-sm text-gray-700 bg-gray-50 aspect-square flex items-center justify-center"
//           >
//             {i}
//           </div>
//         );
//       }
//     }
//     return days;
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">Test</h2>
//         <div className="flex items-center space-x-2 text-sm text-gray-500">
//           {/* Inline SVG for Home icon */}
//           <svg className="text-lg text-gray-600 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
//           </svg>
//           <span>/</span>
//           <span>Test</span>
//           <span>/</span>
//           <span className="text-indigo-700 font-semibold">Test</span>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         {/* Calendar Navigation */}
//         <div
//           className="flex items-center justify-between text-white px-6 py-3 rounded-t-xl"
//           style={{ backgroundColor: "#4D47A3" }}
//         >
//           {/* Previous Year Button with rectangle */}
//           <button className="flex items-center gap-2 text-base font-medium px-4 py-2 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
//             {/* Updated Inline SVG for Previous Year to match the image more closely */}
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//               <path d="M11.354 1.646a.5.5 0 010 .708L6.707 7.5l4.647 4.646a.5.5 0 01-.708.708l-5-5a.5.5 0 010-.708l5-5a.5.5 0 01.708 0zM5.354 1.646a.5.5 0 010 .708L.707 7.5l4.647 4.646a.5.5 0 01-.708.708l-5-5a.5.5 0 010-.708l5-5a.5.5 0 01.708 0z"/>
//             </svg>
//             Previous Year
//           </button>
//           <h3 className="text-xl font-bold">2025</h3>
//           {/* Next Year Button with rectangle */}
//           <button className="flex items-center gap-2 text-base font-medium px-4 py-2 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors">
//             Next Year
//             {/* Updated Inline SVG for Next Year to match the image more closely */}
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//               <path d="M4.646 1.646a.5.5 0 000 .708L9.293 7.5l-4.647 4.646a.5.5 0 00.708.708l5-5a.5.5 0 000-.708l-5-5a.5.5 0 00-.708 0zM10.646 1.646a.5.5 0 000 .708L15.293 7.5l-4.647 4.646a.5.5 0 00.708.708l5-5a.5.5 0 000-.708l-5-5a.5.5 0 00-.708 0z"/>
//             </svg>
//           </button>
//         </div>

//         <div className="flex">
//           {/* Sidebar */}
//           <div className="w-1/4 p-6 border-r border-gray-200 bg-white">
//             <select className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
//               <option>January</option>
//               <option>February</option>
//               <option>March</option>
//               <option>April</option>
//               <option>May</option>
//               <option>June</option>
//               <option>July</option>
//               <option>August</option>
//               <option>September</option>
//               <option>October</option>
//               <option>November</option>
//               <option>December</option>
//             </select>

//             <div>
//               <h4 className="text-lg font-bold mb-4 text-gray-800">Quick Stats</h4>
//               <ul className="text-sm space-y-4">
//                 <li className="flex justify-between items-center pb-2 border-b border-gray-200 text-gray-700">
//                   Completed Tests
//                   <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold text-xs">
//                     19
//                   </span>
//                 </li>
//                 <li className="flex justify-between items-center pb-2 border-b border-gray-200 text-gray-700">
//                   Current Tests
//                   <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-xs">
//                     2
//                   </span>
//                 </li>
//                 <li className="flex justify-between items-center pb-2 border-b border-gray-200 text-gray-700">
//                   Upcoming Tests
//                   <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold text-xs">
//                     2
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Calendar Grid */}
//           <div className="w-3/4 p-6 bg-white">
//             <div className="grid grid-cols-7 gap-3 text-center mb-4">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
//                 <div
//                   key={d}
//                   className="font-bold text-white p-3 rounded-lg text-base"
//                   style={{ backgroundColor: "#4D47A3" }}
//                 >
//                   {d}
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-3">{renderDays()}</div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedTest && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-sm shadow-2xl overflow-hidden transform transition-all scale-100 animate-[fadeIn_0.3s_ease]">
//             {/* Header */}
//             <div className="bg-indigo-700 text-white p-5">
//               <h2 className="text-xl font-extrabold">{selectedTest.subject} Test</h2>
//               <p className="text-sm text-indigo-100">Mathematics</p>
//             </div>

//             {/* Body */}
//             <div className="p-6">
//               {/* Topic */}
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
//                   {/* Inline SVG for Book icon */}
//                   <svg className="text-indigo-600 text-xl w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
//                     <path fillRule="evenodd" d="M4 5a2 2 0 012-2h2V1a1 1 0 011-1h2a1 1 0 011 1v2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1h2v4H7V6zm-1 5h8v2H6v-2z" clipRule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase font-medium">Topic</p>
//                   <p className="text-base font-semibold text-gray-800">{selectedTest.topic}</p>
//                 </div>
//               </div>

//               {/* Date */}
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
//                   {/* Inline SVG for Calendar icon */}
//                   <svg className="text-indigo-600 text-xl w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase font-medium">Date</p>
//                   <p className="text-base font-semibold text-gray-800">{selectedTest.testDate}</p>
//                 </div>
//               </div>

//               {/* Time */}
//               <div className="flex items-start gap-4 mb-6">
//                 <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
//                   {/* Inline SVG for Clock icon */}
//                   <svg className="text-indigo-600 text-xl w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-xs uppercase font-medium">Time</p>
//                   <p className="text-base font-semibold text-gray-800">{selectedTest.time}</p>
//                 </div>
//               </div>

//               {/* Score */}
//               <div className="bg-green-50 text-center py-5 rounded-xl mb-4 border border-green-200">
//                 <p className="text-green-600 text-4xl font-extrabold mb-1">
//                   {selectedTest.score}
//                 </p>
//                 <p className="text-gray-600 text-sm mb-2">
//                   out of {selectedTest.total} points
//                 </p>
//                 <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
//                   {selectedTest.grade}
//                 </span>
//               </div>

//               {/* Progress Bar */}
//               <p className="text-sm text-gray-600 mb-2 font-medium">Your Score</p>
//               <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
//                 <div
//                   className="bg-green-500 h-3 rounded-full shadow-inner"
//                   style={{ width: `${selectedTest.percentage}%` }}
//                 ></div>
//               </div>
//               <p className="text-base text-gray-700 font-semibold">
//                 {selectedTest.percentage}%
//               </p>
//             </div>

//             {/* Footer */}
//             <div className="p-4 border-t border-gray-200 bg-gray-50">
//               <button
//                 onClick={() => setSelectedTest(null)}
//                 className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;
