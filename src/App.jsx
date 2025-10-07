// src/App.jsx
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar"; // student sidebar
import Navbar from "./components/Navbar";   // student navbar
import TeacherSidebar from "./components/TeacherSidebar"; // teacher sidebar
import TeacherNavbar from "./components/TeacherNavbar";   // teacher navbar

import LandingPage from "./components/LandingPage";
import Dashboard from "./components/DashBoard";
import TeacherDashboard from "./components/TeacherDashBoard";
import Courses from "./components/Courses";
import Test from "./components/Test";
import Assignment from "./components/Assignments/Assignment";
import Examinations from "./components/Examinations/Examinations";
import Attendance from "./components/Attendance";
import Notice from "./components/Notice";

// teacher components imports...
import MyProfile from "./components/MyProfile";
import MaterialUpload from "./components/classroom/MaterialUpload";
import ViewMaterials from "./components/classroom/ViewMaterials";
import AssignmentDashboard from "./components/classroom/Assignment/AssignmentDashboard";
import AssignmentSubmission from "./components/classroom/Assignment/AssignmentSubmission";
import AttendanceRecords from "./components/classroom/Attendance/AttendanceRecords";
import LeaveRequestTable from "./components/classroom/Attendance/LeaveRequestTable";
import Syllabus from "./components/Mysyllabus/Syllabus";
import PerformanceAnalytics from "./components/Performance/PerformanceAnalytics";
import PerformanceAnalyticsChart from "./components/Performance/PerformanceAnalyticsChart";
import Communication from "./components/Communication/Communication";
import DiscussionForum from "./components/Communication/DiscussionForum";
import CreateTestQuiz from "./components/TestQuiz/CreateTestQuiz";
import ViewTest from "./components/TestQuiz/ViewTest";
import StudentReport from "./components/TestQuiz/StudentReport";
import NotificationPage from "./components/NotificationPage";


function AppContent({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  const showLayout = location.pathname !== "/"; // hide sidebar/navbar on landing page

  // get role (student/teacher) saved from LandingPage
  const role = localStorage.getItem("role");

  // choose sidebar/navbar based on role
  const SidebarComponent = role === "teacher" ? TeacherSidebar : Sidebar;
  const NavbarComponent = role === "teacher" ? TeacherNavbar : Navbar;

  return (
    <div className="flex">
      {showLayout && (
        <SidebarComponent isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}

      <div className="flex-1">
        {showLayout && <NavbarComponent setIsSidebarOpen={setIsSidebarOpen} />}

        <div className="p-4">
          <Routes>
            {/* Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* Student routes */}
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/Assignment" element={<Assignment />} />
            <Route path="/Examinations" element={<Examinations />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Notice" element={<Notice />} />

            {/* Teacher routes */}
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/profile" element={<MyProfile />} />
            <Route
              path="/teacher/classroom/materials"
              element={<MaterialUpload />}
            />
            <Route path="/teacher/materials/view" element={<ViewMaterials />} />
            <Route
              path="/teacher/classroom/assignments"
              element={<Assignment />}
            />
            <Route
              path="/teacher/classroom/assignments_view"
              element={<AssignmentDashboard />}
            />
            <Route
              path="/teacher/classroom/assignments_submission"
              element={<AssignmentSubmission />}
            />
            <Route
              path="/teacher/classroom/attendance"
              element={<Attendance />}
            />
            <Route
              path="/teacher/classroom/record"
              element={<AttendanceRecords />}
            />
            <Route
              path="/teacher/classroom/leave"
              element={<LeaveRequestTable />}
            />
            <Route path="/teacher/syllabus" element={<Syllabus />} />
            <Route
              path="/teacher/analytics"
              element={<PerformanceAnalytics />}
            />
            <Route
              path="/teacher/analytics/chart"
              element={<PerformanceAnalyticsChart />}
            />
            <Route path="/teacher/communication" element={<Communication />} />
            <Route path="/teacher/discussion" element={<DiscussionForum />} />
            <Route path="/teacher/tests" element={<CreateTestQuiz />} />
            <Route path="/teacher/tests/view" element={<ViewTest />} />
            <Route path="/teacher/tests/report" element={<StudentReport />} />
            <Route
              path="/teacher/notifications"
              element={<NotificationPage />}
            />

            {/* fallback */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <AppContent
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </Router>
  );
}
