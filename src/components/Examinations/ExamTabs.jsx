import React from "react";

const ExamTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Exam Schedule", "Results", "Certificates"];

  return (
    <div className="flex gap-6 bg-gray-100 p-2 rounded-md -ml-2 -mr-10 mb-3">
      {tabs.map((tab) => (
        <button ml
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === tab
              ? "bg-indigo-600 text-white"
              : "bg-white text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ExamTabs;
