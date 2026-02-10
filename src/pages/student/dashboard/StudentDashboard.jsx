import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Bell, 
  TrendingUp,
  Users,
  FileText,
  Clock,
  Download,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

function StudentDashboard() {
  const { isDarkMode } = useTheme();
  
  // Mock data
  const courses = [
    { id: 1, name: 'Mathematics', progress: 75, color: 'bg-blue-500', lessons: 12, teacher: 'Dr. Smith' },
    { id: 2, name: 'Physics', progress: 60, color: 'bg-green-500', lessons: 8, teacher: 'Prof. Johnson' },
    { id: 3, name: 'Computer Science', progress: 90, color: 'bg-purple-500', lessons: 15, teacher: 'Ms. Williams' },
    { id: 4, name: 'English Literature', progress: 45, color: 'bg-yellow-500', lessons: 10, teacher: 'Dr. Brown' },
  ];

  const upcomingAssignments = [
    { id: 1, title: 'Calculus Homework', course: 'Mathematics', dueDate: 'Tomorrow', priority: 'high' },
    { id: 2, title: 'Physics Lab Report', course: 'Physics', dueDate: 'In 2 days', priority: 'medium' },
    { id: 3, title: 'Programming Project', course: 'Computer Science', dueDate: 'Friday', priority: 'high' },
    { id: 4, title: 'Essay Writing', course: 'English Literature', dueDate: 'Next Week', priority: 'low' },
  ];

  const announcements = [
    { id: 1, title: 'Exam Schedule Released', time: '2 hours ago', type: 'important' },
    { id: 2, title: 'Library Closed on Friday', time: '1 day ago', type: 'notice' },
    { id: 3, title: 'New Study Material Available', time: '2 days ago', type: 'update' },
  ];

  const recentActivities = [
    { id: 1, action: 'Submitted assignment', course: 'Mathematics', time: '10:30 AM' },
    { id: 2, action: 'Joined live class', course: 'Physics', time: 'Yesterday' },
    { id: 3, action: 'Downloaded material', course: 'Computer Science', time: '2 days ago' },
  ];

  return (
    <div className={`min-h-full ${isDarkMode ? 'dark:text-white' : 'text-blue-900'}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Welcome back, Alex!</h1>
            <p className={`text-sm sm:text-base mt-1 ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>
              Here's your learning progress for today
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className={`
              px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2
              ${isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
              }
            `}>
              <Calendar className="w-4 h-4" />
              View Calendar
            </button>
            <button className={`
              px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2
              ${isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700' 
                : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
              }
            `}>
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className={`
          rounded-xl p-5
          ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
        `}>
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <div className="ml-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Active Courses</p>
              <p className="text-2xl font-bold mt-1">8</p>
            </div>
          </div>
          <div className={`mt-3 text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
            +2 this month
          </div>
        </div>

        <div className={`
          rounded-xl p-5
          ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
        `}>
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div className="ml-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Completed</p>
              <p className="text-2xl font-bold mt-1">24</p>
            </div>
          </div>
          <div className={`mt-3 text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
            92% success rate
          </div>
        </div>

        <div className={`
          rounded-xl p-5
          ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
        `}>
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <div className="ml-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Overall Progress</p>
              <p className="text-2xl font-bold mt-1">78%</p>
            </div>
          </div>
          <div className={`mt-3 text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
            ↑ 5% from last week
          </div>
        </div>

        <div className={`
          rounded-xl p-5
          ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
        `}>
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
              <Users className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="ml-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Class Rank</p>
              <p className="text-2xl font-bold mt-1">#12</p>
            </div>
          </div>
          <div className={`mt-3 text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
            Top 15% of class
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Progress */}
          <div className={`
            rounded-xl p-6
            ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
          `}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Course Progress</h2>
              <button className={`
                text-sm font-medium flex items-center gap-1
                ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}
              `}>
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-5">
              {courses.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{course.name}</span>
                      <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                        {course.lessons} lessons • {course.teacher}
                      </div>
                    </div>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} rounded-full h-2.5`}>
                    <div
                      className={`h-2.5 rounded-full ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className={`
            rounded-xl p-6
            ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
          `}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upcoming Assignments</h2>
              <div className="flex items-center gap-2">
                <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-blue-500'}`} />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>5 pending</span>
              </div>
            </div>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`
                    flex items-center justify-between p-4 rounded-lg
                    ${isDarkMode 
                      ? 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700' 
                      : 'hover:bg-blue-100 border border-blue-200'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div className={`
                      p-2 rounded-lg
                      ${assignment.priority === 'high' 
                        ? 'bg-red-500/10 text-red-500' 
                        : assignment.priority === 'medium'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-blue-500/10 text-blue-500'
                      }
                    `}>
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{assignment.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                        {assignment.course}
                      </p>
                    </div>
                  </div>
                  <span className={`
                    px-3 py-1 text-sm font-medium rounded-full
                    ${assignment.priority === 'high' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                      : assignment.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }
                  `}>
                    Due {assignment.dueDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          {/* Announcements */}
          <div className={`
            rounded-xl p-6
            ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
          `}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Announcements</h2>
              <div className="relative">
                <Bell className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-blue-500'}`} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>
            <div className="space-y-5">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="pb-4 border-b last:border-0 last:pb-0"
                  style={{ borderColor: isDarkMode ? '#374151' : '#bae6fd' }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`
                      p-2 rounded-lg mt-1
                      ${announcement.type === 'important' 
                        ? 'bg-red-500/10 text-red-500' 
                        : announcement.type === 'notice'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-blue-500/10 text-blue-500'
                      }
                    `}>
                      {announcement.type === 'important' ? '!' : announcement.type === 'notice' ? 'i' : '📢'}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{announcement.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                        <Clock className="inline w-3 h-3 mr-1" />
                        {announcement.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`
            rounded-xl p-6
            ${isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-200'}
          `}>
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className={`flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800/30' : 'bg-blue-100'}`}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-200'}
                  `}>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                      {activity.course}
                    </p>
                  </div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`
            rounded-xl p-6
            ${isDarkMode 
              ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/30' 
              : 'bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200'
            }
          `}>
            <h2 className="text-xl font-bold mb-4">Weekly Overview</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Study Hours</span>
                <span className="font-semibold">24.5 hrs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Assignments Done</span>
                <span className="font-semibold">8/12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Attendance</span>
                <span className="font-semibold">96%</span>
              </div>
              <div className="pt-3 mt-3 border-t" style={{ borderColor: isDarkMode ? '#374151' : '#bae6fd' }}>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>Current Streak</span>
                  <span className="font-bold text-green-500">14 days 🔥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;