import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Dashboard from "../pages/student/dashboard/StudentDashboard"
import Login from "../pages/auth/Login"
import ForgotPassword from '../pages/auth/ForgotPassword'

function VTCRoutes() {
  return (
    <Router>
      <Routes>

        {/* Routes WITHOUT layout */}
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />

        {/* Routes WITH layout */}
        <Route element={<Layout />}>
          <Route path="/studentdashboard" element={<Dashboard />} />
          {/* add more layout routes here */}
        </Route>

      </Routes>
    </Router>
  )
}

export default VTCRoutes
