import React from "react";

const AssignmentTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["All Assignments", "Pending", "Submitted", "Graded"];

  return (
    <div className="flex gap-6 bg-gray-100 p-2 rounded-md -ml-2 -mr-10 mb-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 -mr-2 py-2 rounded-md text-sm font-medium ${
            activeTab === tab
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
        
export default AssignmentTabs;
