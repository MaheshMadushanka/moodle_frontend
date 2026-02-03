import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Temporary: Allow any email/password (until API is connected)
    if (!formData.email || !formData.password) {
      setError('Please enter email and password');
      return;
    }

    // Create user object
    const user = {
      email: formData.email,
      role: formData.role
    };

    // Store current user
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect based on role
    if (user.role === 'student') {
      navigate('/student/dashboard');
    } else if (user.role === 'lecturer') {
      navigate('/lecturer/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          {/* Logo */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">VTC LMS</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign In</h1>
            <p className="text-gray-600 text-sm">as Employee</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition"
              placeholder="Write your email"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition pr-10"
                placeholder="Input your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1.5">
              Login as
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition"
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </select>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-xs text-gray-600 hover:text-indigo-600 font-medium"
            >
              Forgot my password
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:from-indigo-700 hover:to-purple-700 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Sign Up
            </button>
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-gray-600">
          <p>If you have a trouble while accessing the account,</p>
          <p>kindly contact your admin company account.</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-center gap-4 text-xs text-gray-500">
          <button className="hover:text-indigo-600 transition">About</button>
          <button className="hover:text-indigo-600 transition">Terms & Conditions</button>
          <button className="hover:text-indigo-600 transition">Privacy Policy</button>
        </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/signimg.jpg" 
              alt="Student learning" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          
          {/* Testimonial overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white z-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20">
              <p className="text-sm leading-relaxed mb-3">
               “The beautiful thing about learning is that nobody can take it away from you.”
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-base">B.B. King</p>
                  <p className="text-white/80 text-xs">Musician & Humanitarian</p>
                </div>
                <div className="flex gap-1.5">
                  {/* <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
