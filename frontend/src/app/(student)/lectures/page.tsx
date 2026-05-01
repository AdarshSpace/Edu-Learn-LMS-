"use client";

import {
  PlayCircle,
  Clock3,
  Users,
  Star,
  FileText,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  Lock,
} from "lucide-react";

const lessons = [
  { id: 1, title: "Introduction", duration: "08:20", free: true },
  { id: 2, title: "Project Setup", duration: "14:10", free: true },
  { id: 3, title: "Core Concepts", duration: "22:45", free: false },
  { id: 4, title: "Advanced Concepts", duration: "18:30", free: false },
  { id: 5, title: "Project Implementation", duration: "25:15", free: false },
  { id: 6, title: "Project Testing", duration: "16:45", free: false },
  { id: 7, title: "Project Deployment", duration: "10:30", free: false },
  { id: 8, title: "Project Optimization", duration: "14:20", free: false },
  { id: 9, title: "Building Real Features", duration: "31:00", free: false },
  { id: 10, title: "Deployment", duration: "12:15", free: false },
  { id: 11, title: "Conclusion", duration: "05:10", free: true },
  { id: 12, title: "Q&A", duration: "10:00", free: true },
  { id: 13, title: "Feedback", duration: "05:00", free: true },
  { id: 14, title: "Resources", duration: "05:00", free: true },
];

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-[#F8F5FF] w-full">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <section className="mb-8">
          <p className="text-sm text-slate-500 mb-2">
            My Courses / Web Development Bootcamp
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#2E1065]">
            Web Development Bootcamp
          </h1>
        </section>

        {/* Main Layout */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Video Preview */}
            <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm">
              <div className="relative">
                {/* <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="Course preview"
                  className="w-full h-[340px] sm:h-[480px] object-cover"
                /> */}
                 <iframe  className="w-full h-[340px] sm:h-[480px] object-cover border-none" src="https://imagekit.io/player/embed/wn1n04z05/_4321_demo_sample_i-UcPbrSb.mp4/ik-master.m3u8?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1777432856092&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fwn1n04z05%2F_4321_demo_sample_i-UcPbrSb.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1777432856092&tr=sr-240_360_480_720_1080_2160" title="ImageKit video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>
      

                {/* <button className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-full shadow-lg">
                    <PlayCircle className="w-10 h-10 text-purple-700" />
                  </div>
                </button> */}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3">
              {[
                "Information",
                "Content",
                "Community",
                "Students",
              ].map((tab, index) => (
                <button
                  key={tab}
                  className={`px-5 py-2 rounded-2xl text-sm font-medium transition ${
                    index === 1
                      ? "bg-purple-700 text-white"
                      : "bg-white border border-purple-100 text-slate-600 hover:bg-purple-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* About Course */}
            <div className="bg-white rounded-3xl border border-purple-100 p-6">
              <h2 className="text-xl font-semibold text-[#2E1065] mb-4">
                About this course
              </h2>

              <p className="text-slate-600 leading-relaxed">
                This course is designed for students who want to build modern,
                scalable web applications from scratch with real-world projects.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Course Content */}
            <div className="bg-white rounded-3xl border border-purple-100 p-6">
              <h3 className="font-semibold text-[#2E1065] mb-5">
                Course Content
              </h3>

              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-purple-50 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {lesson.free ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Lock className="w-5 h-5 text-slate-400" />
                      )}

                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-700 truncate">
                          {lesson.title}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-slate-500">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-2xl font-medium transition flex items-center justify-center gap-2">
              <PlayCircle size={18} />
              Continue Learning
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
