// src/components/Sidebar.jsx
import { useLocation } from "react-router-dom";
import StudentSidebar from "./Sidebar";
import TeacherSidebar from "./TeacherSidebar";

export default function MainSidebar({ isOpen }) {
  const location = useLocation();

  if (location.pathname.startsWith("/teacher")) {
    return <TeacherSidebar isOpen={isOpen} />;
  }

  if (location.pathname.startsWith("/student")) {
    return <StudentSidebar isOpen={isOpen} />;
  }

  return null; // No sidebar on Landing Page
}
