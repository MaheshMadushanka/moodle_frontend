import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Login from "../pages/auth/Login"
import ForgotPassword from '../pages/auth/ForgotPassword'
import StudentDashboard from "../pages/student/dashboard/StudentDashboard"
import LecturerDashboard from "../pages/lecturer/dashboard/LecturerDashboard"

//student
import StudentDashboard from "../pages/student/dashboard/StudentDashboard"
import StudentProfile from "../pages/student/studentprofile/StudentProfile"


//lecturer
import LecturerDashboard from "../pages/lecturer/dashboard/LecturerDashboard"
import LecturerProfile from "../pages/lecturer/lecturerprofile/LecturerProfile"

import Settings from '../pages/settings/Settings'
import ContactUs from '../pages/contactus/ContactUs'

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
<<<<<<< HEAD
          <Route path="/studentprofile" element={<StudentProfile />} />
=======
>>>>>>> 9e9621dea0b3adf3556e168b9daacbc0124df3d4
          

          {/* Lecturer Role Routes */}
          <Route path="/lecturerdashboard" element={<LecturerDashboard />} />
<<<<<<< HEAD
          <Route path="/lecturerprofile" element={<LecturerProfile />} />


          <Route path="/settings" element={<Settings />} />
          <Route path="/contactus" element={<ContactUs />} />
=======
>>>>>>> 9e9621dea0b3adf3556e168b9daacbc0124df3d4
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