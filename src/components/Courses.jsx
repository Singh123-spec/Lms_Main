import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import {
  Download,
  ChevronDown,
  File,
} from "lucide-react";

const courses = [
  {
    subject: "Mathematics",
    files: 5,
    color: "indigo",
    description:
      "Master quadratic equations, functions, and advanced calculus concepts.",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Quadratic Equations Guide", type: "DOCX", size: "356 KB" },
          { name: "Quadratic Equations Guide", type: "PDF", size: "2.4 MB" },
          { name: "Quadratic Equations Guide", type: "Video", size: "15 MB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Functions and Graphs", type: "PDF", size: "1.8 MB" },
          { name: "Functions Practice", type: "DOCX", size: "425 KB" },
        ],
      },
      {
        title: "Chapter - 3",
        materials: [
          { name: "Calculus Basics", type: "PDF", size: "3.2 MB" },
          { name: "Calculus Video Tutorial", type: "Video", size: "25 MB" },
        ],
      },
      {
        title: "Chapter - 4",
        materials: [{ name: "Derivatives Guide", type: "PDF", size: "2.1 MB" }],
      },
      {
        title: "Chapter - 5",
        materials: [
          { name: "Integration Methods", type: "PDF", size: "2.8 MB" },
          { name: "Integration Examples", type: "DOCX", size: "512 KB" },
        ],
      },
    ],
  },
];

const subjectCards = [
  {
    subject: "Science",
    files: 8,
    desc: "Explore cell structures, chemical reactions, and scientific methods.",
    color: "green",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Cell Structure Guide", type: "PDF", size: "1.5 MB" },
          { name: "Biology Basics", type: "DOCX", size: "320 KB" },
          { name: "Cell Division Video", type: "Video", size: "18 MB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Chemical Reactions", type: "PDF", size: "2.2 MB" },
          { name: "Chemistry Lab Manual", type: "DOCX", size: "680 KB" },
        ],
      },
      {
        title: "Chapter - 3",
        materials: [{ name: "Scientific Method", type: "PDF", size: "1.1 MB" }],
      },
    ],
  },
  {
    subject: "English",
    files: 5,
    desc: "Dive into literature, grammar, and communication skills.",
    color: "orange",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Grammar Essentials", type: "PDF", size: "1.3 MB" },
          { name: "Writing Skills", type: "DOCX", size: "445 KB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Literature Analysis", type: "PDF", size: "2.5 MB" },
          { name: "Poetry Guide", type: "DOCX", size: "380 KB" },
        ],
      },
    ],
  },
  {
    subject: "History",
    files: 8,
    desc: "Survey of world civilizations from ancient to modern times.",
    color: "red",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Ancient Civilizations", type: "PDF", size: "3.1 MB" },
          { name: "Timeline Guide", type: "DOCX", size: "290 KB" },
          { name: "Historical Documentary", type: "Video", size: "45 MB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Medieval Period", type: "PDF", size: "2.7 MB" },
          { name: "Maps and Charts", type: "DOCX", size: "650 KB" },
        ],
      },
      {
        title: "Chapter - 3",
        materials: [{ name: "Modern History", type: "PDF", size: "2.9 MB" }],
      },
    ],
  },
  {
    subject: "Geography",
    files: 6,
    desc: "Understand physical features, climate, and human geography.",
    color: "blue",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Physical Geography", type: "PDF", size: "2.4 MB" },
          { name: "Climate Patterns", type: "DOCX", size: "410 KB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Human Geography", type: "PDF", size: "1.9 MB" },
          { name: "Population Studies", type: "DOCX", size: "325 KB" },
        ],
      },
    ],
  },
  {
    subject: "Physics",
    files: 7,
    desc: "Learn mechanics, thermodynamics, and modern physics.",
    color: "purple",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Motion and Forces", type: "PDF", size: "2.1 MB" },
          { name: "Physics Lab Guide", type: "DOCX", size: "520 KB" },
          { name: "Mechanics Video", type: "Video", size: "32 MB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [{ name: "Thermodynamics", type: "PDF", size: "1.8 MB" }],
      },
    ],
  },
  {
    subject: "Chemistry",
    files: 6,
    desc: "Study atomic structure, bonding, and chemical equations.",
    color: "teal",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Atomic Structure", type: "PDF", size: "1.6 MB" },
          { name: "Periodic Table Guide", type: "DOCX", size: "380 KB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Chemical Bonding", type: "PDF", size: "2.3 MB" },
          { name: "Bonding Examples", type: "DOCX", size: "290 KB" },
        ],
      },
    ],
  },
   {
    subject: "Science",
    files: 8,
    desc: "Explore cell structures, chemical reactions, and scientific methods.",
    color: "green",
    chapters: [
      {
        title: "Chapter - 1",
        materials: [
          { name: "Cell Structure Guide", type: "PDF", size: "1.5 MB" },
          { name: "Biology Basics", type: "DOCX", size: "320 KB" },
          { name: "Cell Division Video", type: "Video", size: "18 MB" },
        ],
      },
      {
        title: "Chapter - 2",
        materials: [
          { name: "Chemical Reactions", type: "PDF", size: "2.2 MB" },
          { name: "Chemistry Lab Manual", type: "DOCX", size: "680 KB" },
        ],
      },
      {
        title: "Chapter - 3",
        materials: [{ name: "Scientific Method", type: "PDF", size: "1.1 MB" }],
      },
    ],
  },
];

const handleDownload = (fileName, fileType) => {
  // Create a simple toast notification
  const toast = document.createElement("div");
  toast.className =
    "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300";
  toast.textContent = `Download started: ${fileName}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 2000);
};

const getFileIcon = (type) => {
  switch (type.toLowerCase()) {
    case "pdf":
      return (
        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
          PDF
        </div>
      );
    case "docx":
      return (
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
          DOC
        </div>
      );
    case "video":
      return (
        <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
          VID
        </div>
      );
    default:
      return <File className="w-8 h-8 text-gray-500" />;
  }
};

const CoursesPage = () => {
  const [openCards, setOpenCards] = useState({});
  const [openChapters, setOpenChapters] = useState({});

  const toggleCard = (idx) => {
    setOpenCards((prev) => {
      const newState = { ...prev };
      newState[idx] = !prev[idx];
      return newState;
    });

    // Reset chapter states when closing card
    if (openCards[idx]) {
      // Remove all chapter states for this card
      const newChapterState = { ...openChapters };
      Object.keys(newChapterState).forEach((key) => {
        if (key.startsWith(`${idx}-`)) {
          delete newChapterState[key];
        }
      });
      setOpenChapters(newChapterState);
    }
  };

  const toggleChapter = (cardIdx, chapterIdx) => {
    const key = `${cardIdx}-${chapterIdx}`;

    setOpenChapters((prev) => {
      const newState = { ...prev };

      // Close all other chapters in this card
      Object.keys(newState).forEach((existingKey) => {
        if (existingKey.startsWith(`${cardIdx}-`) && existingKey !== key) {
          newState[existingKey] = false;
        }
      });

      // Toggle the clicked chapter
      newState[key] = !prev[key];
      return newState;
    });
  };

  const allCards = [...courses, ...subjectCards];

  const getColorClasses = (color) => {
    const colorMap = {
      indigo: {
        bg: "bg-indigo-500",
        bgLight: "bg-indigo-50",
        text: "text-indigo-600",
        hover: "hover:bg-indigo-100",
      },
      green: {
        bg: "bg-green-500",
        bgLight: "bg-green-50",
        text: "text-green-600",
        hover: "hover:bg-green-100",
      },
      orange: {
        bg: "bg-orange-500",
        bgLight: "bg-orange-50",
        text: "text-orange-600",
        hover: "hover:bg-orange-100",
      },
      red: {
        bg: "bg-red-500",
        bgLight: "bg-red-50",
        text: "text-red-600",
        hover: "hover:bg-red-100",
      },
      purple: {
        bg: "bg-purple-500",
        bgLight: "bg-purple-50",
        text: "text-purple-600",
        hover: "hover:bg-purple-100",
      },
      blue: {
        bg: "bg-blue-500",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        hover: "hover:bg-blue-100",
      },
      teal: {
        bg: "bg-teal-500",
        bgLight: "bg-teal-50",
        text: "text-teal-600",
        hover: "hover:bg-teal-100",
      },
    };
    return colorMap[color] || colorMap.indigo;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen -ml-4 -mt-4 -mr-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Courses</h2>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
           <FiHome className="text-xl text-gray-600" />
          <span>/</span>
          <span>Courses</span>
          <span>/</span>
          <span className="text-indigo-500 font-medium">Courses</span>
        </div>
      </div>

      {/* Course Cards - Using grid layout for proper alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCards.map((card, idx) => {
          const colors = getColorClasses(card.color || "indigo");
          return (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-md border transition-all duration-500"
            >
              {/* Colored top border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${colors.bg} rounded-t-xl`}
              />

              <div className="p-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-2 mt-2">
                  <span
                    className={`text-xs font-semibold ${colors.bg} text-white px-2 py-1 rounded`}
                  >
                    {card.subject}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {card.files} Files
                  </span>
                </div>

                {/* Description - Fixed height */}
                <div className="h-16 mb-4 overflow-hidden">
                  <p className="text-sm text-gray-500">
                    {card.description || card.desc}
                  </p>
                </div>

                {/* Toggle button - at the bottom using margin-top auto */}
                <div className="w-full flex justify-end mt-auto">
                  <button
                    onClick={() => toggleCard(idx)}
                    className={`flex items-center space-x-2 ${colors.bgLight} ${colors.text} font-medium px-5 py-2 rounded ${colors.hover} transition-colors duration-200`}
                  >
                    <span>
                      {openCards[idx] ? "Hide Chapter" : "View Chapter"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        openCards[idx] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Chapters - collapsible, position outside the grid flow with fixed height and scrolling fix */}
                {openCards[idx] && (
                  <div className="absolute left-0 right-0 top-full z-10 bg-white shadow-lg rounded-b-xl border border-gray-200 mt-1">
                    <div className="max-h-[400px] overflow-y-auto p-4 space-y-3 animate-in slide-in-from-top-2 duration-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {card.chapters?.map((chapter, chapterIdx) => (
                        <div
                          key={chapterIdx}
                          className="border border-gray-200 rounded-lg relative overflow-hidden"
                        >
                          {/* Blue left border for each chapter */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

                          {/* Chapter Header */}
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-t-lg sticky top-0 z-10 pl-4">
                            <h4 className="font-medium text-gray-700">
                              {chapter.title}
                            </h4>
                            <button
                              onClick={() => toggleChapter(idx, chapterIdx)}
                              className={`text-xs ${colors.text} font-medium px-3 py-1 ${colors.bgLight} rounded hover:opacity-80 transition-opacity`}
                            >
                              View Material ▼
                            </button>
                          </div>

                          {/* Chapter Materials */}
                          {openChapters[`${idx}-${chapterIdx}`] &&
                            chapter.materials && (
                              <div className="p-3 pl-4 space-y-2 bg-white rounded-b-lg animate-in slide-in-from-top-1 duration-200">
                                {chapter.materials.map(
                                  (material, materialIdx) => (
                                    <div
                                      key={materialIdx}
                                      className="flex items-center justify-between p-2 border border-gray-100 rounded hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="flex items-center space-x-3">
                                        {getFileIcon(material.type)}
                                        <div>
                                          <p className="text-sm font-medium text-gray-700">
                                            {material.name}
                                          </p>
                                          <p className="text-xs text-gray-500">
                                            {material.type} • {material.size}
                                          </p>
                                        </div>
                                      </div>
                                      <button
                                        onClick={() =>
                                          handleDownload(
                                            material.name,
                                            material.type
                                          )
                                        }
                                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                                      >
                                        <Download className="w-4 h-4" />
                                      </button>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
