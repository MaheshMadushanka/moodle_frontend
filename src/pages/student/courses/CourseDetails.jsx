import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CourseDetails = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
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

  // Mock course data
  const course = {
    id: courseId,
    name: 'Web Development Fundamentals',
    instructor: 'Mr. Silva',
    email: 'silva@vtc.lk',
    phone: '+94 77 123 4567',
    description: 'Learn the fundamentals of web development including HTML, CSS, JavaScript, and modern frameworks. This comprehensive course will take you from beginner to advanced level.',
    duration: '12 weeks',
    totalLessons: 24,
    completedLessons: 18,
    modules: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        lessons: [
          { id: 1, title: 'What is Web Development?', duration: '15 min', completed: true },
          { id: 2, title: 'Setting up Development Environment', duration: '30 min', completed: true },
          { id: 3, title: 'Your First Webpage', duration: '45 min', completed: true }
        ]
      },
      {
        id: 2,
        title: 'HTML Basics',
        lessons: [
          { id: 4, title: 'HTML Structure', duration: '20 min', completed: true },
          { id: 5, title: 'HTML Elements & Tags', duration: '35 min', completed: true },
          { id: 6, title: 'Forms and Input', duration: '40 min', completed: false }
        ]
      },
      {
        id: 3,
        title: 'CSS Styling',
        lessons: [
          { id: 7, title: 'CSS Basics', duration: '25 min', completed: false },
          { id: 8, title: 'Flexbox Layout', duration: '45 min', completed: false },
          { id: 9, title: 'Responsive Design', duration: '50 min', completed: false }
        ]
      },
      {
        id: 4,
        title: 'JavaScript Programming',
        lessons: [
          { id: 10, title: 'JavaScript Fundamentals', duration: '30 min', completed: false },
          { id: 11, title: 'DOM Manipulation', duration: '40 min', completed: false },
          { id: 12, title: 'Event Handling', duration: '35 min', completed: false }
        ]
      }
    ]
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/student/courses')} className="hover:text-blue-300 transition">
                ← Back to Courses
              </button>
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

      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
          <p className="text-blue-100 text-lg mb-6">{course.description}</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>📚</span>
              <span>{course.completedLessons}/{course.totalLessons} Lessons Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Modules */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Syllabus</h2>
            <div className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Module {module.id}: {module.title}
                  </h3>
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                        onClick={() => navigate(`/student/course/${courseId}/lesson/${lesson.id}`)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            lesson.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                          }`}>
                            {lesson.completed ? '✓' : lesson.id}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{lesson.title}</p>
                            <p className="text-sm text-gray-600">{lesson.duration}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800 transition">
                          {lesson.completed ? 'Review' : 'Start'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instructor</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {course.instructor.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{course.instructor}</p>
                  <p className="text-sm text-gray-600">Senior Lecturer</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <span>📧</span>
                  <span className="text-sm">{course.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span>📱</span>
                  <span className="text-sm">{course.phone}</span>
                </div>
              </div>
              <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-800 hover:to-blue-600 transition">
                Contact Instructor
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
