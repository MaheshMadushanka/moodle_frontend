import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';

// Student Layout
import StudentLayout from '../components/StudentLayout';

// Student Pages
import StudentDashboard from '../pages/student/StudentDashboard';
import StudentCourses from '../pages/student/courses/StudentCourses';
import CourseDetails from '../pages/student/courses/CourseDetails';
import LessonView from '../pages/student/lessons/LessonView';
import StudentAssessments from '../pages/student/assessments/StudentAssessments';
import StudentAttendance from '../pages/student/attendance/StudentAttendance';
import StudentProfile from '../pages/student/profile/StudentProfile';
import StudentResults from '../pages/student/results/StudentResults';
import StudentMessages from '../pages/student/messages/StudentMessages';

// Lecturer Pages
import LecturerDashboard from '../pages/lecturer/LecturerDashboard';
import LecturerCourses from '../pages/lecturer/courses/LecturerCourses';
import CourseContentManagement from '../pages/lecturer/courses/CourseContentManagement';
import LecturerAssessments from '../pages/lecturer/assessments/LecturerAssessments';
import LecturerAttendance from '../pages/lecturer/attendance/LecturerAttendance';
import StudentPerformance from '../pages/lecturer/performance/StudentPerformance';
import LecturerMessages from '../pages/lecturer/messages/LecturerMessages';
import LecturerLiveClasses from '../pages/lecturer/live/LecturerLiveClasses';
import LecturerProfile from '../pages/lecturer/profile/LecturerProfile';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && currentUser.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const VTCRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Student Routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="course/:courseId" element={<CourseDetails />} />
          <Route path="course/:courseId/lesson/:lessonId" element={<LessonView />} />
          <Route path="assessments" element={<StudentAssessments />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="results" element={<StudentResults />} />
          <Route path="messages" element={<StudentMessages />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>

        {/* Lecturer Routes */}
        <Route
          path="/lecturer/dashboard"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/courses"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/course/:courseId"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <CourseContentManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/assessments"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerAssessments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/attendance"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/performance"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <StudentPerformance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/messages"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerMessages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/live"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerLiveClasses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lecturer/profile"
          element={
            <ProtectedRoute allowedRole="lecturer">
              <LecturerProfile />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default VTCRoutes;
