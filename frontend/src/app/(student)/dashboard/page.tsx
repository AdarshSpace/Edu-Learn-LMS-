"use client";

import { FileText, Clock3, BadgeCheck } from "lucide-react";

export default function StudentDashboard() {
  const course = {
    title: "Web Development Bootcamp",
    progress: 68,
    lessons: 24,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  };

  const upcomingTasks = [
    "React Hooks Quiz",
    "API Design Assignment",
    "Database Schema Review",
  ];

  const stats = [
    { label: "Assignments", value: "14", icon: FileText },
    { label: "Learning Time", value: "42h", icon: Clock3 },
    { label: "Certificates", value: "3", icon: BadgeCheck },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5FF]">
      {/* Main Content */}
      <main className="w-full p-4 sm:p-6 lg:p-8">
        {/* Max Width Container */}
        <div className="w-full max-w-7xl ">
          {/* Greeting */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E1065]">
              Good Morning, Adarsh 👋
            </h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Keep going — you’re making progress.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-3xl border border-purple-100 px-5 py-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-slate-500 text-sm">{stat.label}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mt-1">
                      {stat.value}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                    <Icon size={20} className="text-purple-700" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Learning */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2E1065]">
                Continue Learning
              </h3>

              <button className="text-purple-700 font-medium text-sm sm:text-base">
                View All
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden flex flex-col md:flex-row">
              <img
                src={course.image}
                alt={course.title}
                className="w-full md:w-72 h-48 md:h-44 object-cover"
              />

              <div className="flex-1 p-5 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold">
                  {course.title}
                </h4>

                <p className="text-sm text-slate-500 mt-2">
                  {course.lessons} Lessons
                </p>

                <div className="mt-5">
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div
                      className="bg-purple-700 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <p className="text-sm text-purple-700 mt-2">
                    {course.progress}% Complete
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Deadlines */}
          <section className="mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2E1065] mb-6">
              Upcoming Deadlines
            </h3>

            <div className="bg-white rounded-3xl border border-purple-100 p-5 sm:p-6 space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-purple-50 pb-4 last:border-none"
                >
                  <p className="font-medium">{task}</p>

                  <button className="text-purple-700 text-sm">View</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}