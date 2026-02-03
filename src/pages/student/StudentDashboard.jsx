import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, TrendingUp, Calendar, Bell, ArrowRight, PlayCircle } from 'lucide-react';

const StudentDashboard = () => {
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

  // Mock data
  const stats = {
    enrolledCourses: 5,
    overallProgress: 67,
    upcomingClasses: 3,
    completedLessons: 24
  };

  const upcomingClasses = [
    { id: 1, course: 'Web Development', date: 'Feb 5, 2026', time: '10:00 AM', color: 'bg-blue-500' },
    { id: 2, course: 'Database Management', date: 'Feb 6, 2026', time: '2:00 PM', color: 'bg-green-500' },
    { id: 3, course: 'Mobile App Development', date: 'Feb 7, 2026', time: '11:00 AM', color: 'bg-purple-500' }
  ];

  const announcements = [
    { id: 1, title: 'New Assignment Posted', course: 'Web Development', date: '2 hours ago', type: 'assignment' },
    { id: 2, title: 'Class Schedule Change', course: 'Database Management', date: '1 day ago', type: 'schedule' },
    { id: 3, title: 'Exam Date Announced', course: 'Mobile App Development', date: '3 days ago', type: 'exam' }
  ];

  const continueLearning = [
    { id: 1, course: 'Web Development', lesson: 'React Hooks', progress: 75 },
    { id: 2, course: 'Database Management', lesson: 'SQL Joins', progress: 45 },
  ];

  if (!user) return null;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Student! 👋</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your courses today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <BookOpen size={24} />
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">{stats.enrolledCourses}</span>
            </div>
          </div>
          <h3 className="text-sm font-medium opacity-90">Enrolled Courses</h3>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp size={24} />
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">{stats.overallProgress}%</span>
            </div>
          </div>
          <h3 className="text-sm font-medium opacity-90">Overall Progress</h3>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Calendar size={24} />
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">{stats.upcomingClasses}</span>
            </div>
          </div>
          <h3 className="text-sm font-medium opacity-90">Upcoming Classes</h3>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <PlayCircle size={24} />
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">{stats.completedLessons}</span>
            </div>
          </div>
          <h3 className="text-sm font-medium opacity-90">Completed Lessons</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
              <button 
                onClick={() => navigate('/student/courses')}
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1"
              >
                View All <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              {continueLearning.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-32 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <PlayCircle size={32} className="text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.course}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.lesson}</p>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
            <div className="space-y-3">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-12 h-12 ${cls.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {cls.date.split(' ')[1].split(',')[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{cls.course}</h3>
                    <p className="text-sm text-gray-600">{cls.date} • {cls.time}</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700">
                    <ArrowRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Bell size={20} className="text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Announcements</h2>
            </div>
            
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border-l-4 border-indigo-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{announcement.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{announcement.course}</p>
                  <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('/student/messages')}
              className="w-full mt-6 py-2 px-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-sm"
            >
              View All Announcements
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 mt-6 text-white">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/student/assessments')}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg p-3 text-left transition-all"
              >
                <div className="font-medium">View Assessments</div>
                <div className="text-xs opacity-90 mt-1">Check pending quizzes & assignments</div>
              </button>
              <button 
                onClick={() => navigate('/student/results')}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg p-3 text-left transition-all"
              >
                <div className="font-medium">My Results</div>
                <div className="text-xs opacity-90 mt-1">View grades & certificates</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
