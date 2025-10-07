// src/components/LandingPage.jsx
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    // save selected role
    localStorage.setItem("role", role);

    if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/teacher/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        onClick={() => handleSelect("student")}
      >
        Student
      </button>
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
        onClick={() => handleSelect("teacher")}
      >
        Teacher
      </button>
    </div>
  );
}
