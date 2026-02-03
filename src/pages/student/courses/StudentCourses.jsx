import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StudentCourses = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || currentUser.role !== 'student') {
      navigate('/login');
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  // Mock courses data
  const courses = [
    {
      id: 1,
      name: 'Web Development Fundamentals',
      instructor: 'Mr. Silva',
      progress: 75,
      thumbnail: 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=Web+Dev',
      duration: '12 weeks',
      lessons: 24
    },
    {
      id: 2,
      name: 'Database Management Systems',
      instructor: 'Ms. Perera',
      progress: 60,
      thumbnail: 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=Database',
      duration: '10 weeks',
      lessons: 20
    },
    {
      id: 3,
      name: 'Mobile App Development',
      instructor: 'Mr. Fernando',
      progress: 45,
      thumbnail: 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=Mobile+Apps',
      duration: '14 weeks',
      lessons: 28
    },
    {
      id: 4,
      name: 'UI/UX Design Principles',
      instructor: 'Ms. Jayawardena',
      progress: 85,
      thumbnail: 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=UI%2FUX',
      duration: '8 weeks',
      lessons: 16
    },
    {
      id: 5,
      name: 'Cloud Computing Basics',
      instructor: 'Mr. Rajapaksha',
      progress: 30,
      thumbnail: 'https://via.placeholder.com/300x200/1e3a8a/ffffff?text=Cloud',
      duration: '10 weeks',
      lessons: 20
    }
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/student/dashboard')} className="hover:text-blue-300 transition">
                ← Back
              </button>
              <h1 className="text-2xl font-bold">My Courses</h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">You are enrolled in {courses.length} courses</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={course.thumbnail} alt={course.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Instructor:</span> {course.instructor}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>📚 {course.lessons} lessons</span>
                  <span>⏱️ {course.duration}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-blue-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-900 to-blue-700 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/student/course/${course.id}`)}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-600 transition"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentCourses;
