import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/vtclogo2.png";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        
        {/* Left Side - Welcome Section */}
        <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center items-center bg-white">
          <img src={Logo} alt="VTC Logo" className="w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-10" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center leading-relaxed">
            Welcome to the<br />
            VTC LMS
          </h1>
          <p className="text-gray-600 text-center mt-3 md:mt-4 text-sm md:text-base">
            Please login using your details
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-3/5 bg-gradient-to-b from-blue-800 to-blue-900 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-white text-lg md:text-xl font-semibold mb-6 md:mb-8">
              Login into your account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              
              {/* Role Selection */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Role *
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 bg-blue-700 bg-opacity-50 border border-blue-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem',
                    appearance: 'none'
                  }}
                >
                  <option value="student" className="bg-blue-800 text-white">Student</option>
                  <option value="lecturer" className="bg-blue-800 text-white">Lecturer</option>
                </select>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-blue-700 bg-opacity-50 border border-blue-600 rounded text-white text-sm placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2.5 bg-blue-700 bg-opacity-50 border border-blue-600 rounded text-white text-sm placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Login Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                >
                  LOG IN
                </button>
              </div>

              {/* Links Section */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <Link
                  to="/forgetpassword"
                  className="text-blue-200 hover:text-white text-xs font-medium transition-colors uppercase tracking-wide text-center"
                >
                  I CAN'T ACCESS MY ACCOUNT
                </Link>
                <Link
                  to="/signup"
                  className="text-blue-200 hover:text-white text-xs font-medium transition-colors uppercase tracking-wide text-center"
                >
                  SIGN UP
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;