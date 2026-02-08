import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //hi
    // Simulate password reset email sent
    setSuccess(true);
    
    // Redirect to login after 3 seconds
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h1>
          <p className="text-gray-600">Enter your email to reset your password</p>
        </div>

        {success ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
            <p className="font-semibold mb-2">✓ Password reset link sent!</p>
            <p className="text-sm">Check your email for the reset link.</p>
            <p className="text-sm mt-2">Redirecting to login...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-600 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-blue-900 font-semibold hover:text-blue-800"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
