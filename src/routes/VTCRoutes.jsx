import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Login from "../pages/auth/Login"
import ForgotPassword from '../pages/auth/ForgotPassword'
import StudentDashboard from "../pages/student/dashboard/StudentDashboard"
import LecturerDashboard from "../pages/lecturer/dashboard/LecturerDashboard"

function VTCRoutes() {
  return (
    <Router>
      <Routes>
        {/* Routes WITHOUT layout */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />

        {/* Routes WITH layout - Use this structure */}
        <Route path="/" element={<Layout />}>
          {/* Student Role Routes */}
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          

          {/* Lecturer Role Routes */}
          <Route path="/lecturerdashboard" element={<LecturerDashboard />} />
        </Route>

        {/* You can also use nested routes like this: */}
        {/* <Route element={<Layout />}>
          <Route path="studentdashboard" element={<StudentDashboard />} />
          <Route path="lecturerdashboard" element={<LecturerDashboard />} />
        </Route> */}
      </Routes>
    </Router>
  )
}

export default VTCRoutes