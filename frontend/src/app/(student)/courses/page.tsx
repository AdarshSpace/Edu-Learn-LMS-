"use client"

import { Filter, Star, PlayCircle, Plus } from "lucide-react";
import CourseCard from "@/Components/Landing_Page/CourseCard";
import PaidCourseCard from "@/Components/Landing_Page/PaidCourseCard";
import { useState, useEffect } from "react";
import CreateCourseModal from "@/Components/Create_Course/create_course";


export default function CoursesPage() {

  const [createCourseOpen, setCreateCourseOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      instructor: "Angela Yu",
      progress: 68,
      lessons: 24,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "System Design Masterclass",
      instructor: "Alex Xu",
      progress: 42,
      lessons: 18,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    },
    // {
    //   id: 3,
    //   title: "React Advanced Patterns",
    //   instructor: "Kent Dodds",
    //   progress: 81,
    //   lessons: 30,
    //   rating: 4.7,
    //   image:
    //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
    // },
    // {
    //   id: 4,
    //   title: "Database Design",
    //   instructor: "Prisma Team",
    //   progress: 35,
    //   lessons: 16,
    //   rating: 4.6,
    //   image:
    //     "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop"
    // },
    // {
    //   id: 5,
    //   title: "Next.js Fullstack",
    //   instructor: "Vercel Team",
    //   progress: 57,
    //   lessons: 20,
    //   rating: 4.9,
    //   image:
    //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
    // },
    // {
    //   id: 6,
    //   title: "Backend API Engineering",
    //   instructor: "Node School",
    //   progress: 22,
    //   lessons: 28,
    //   rating: 4.5,
    //   image:
    //     "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop"
    // }
  ];
  const otherCourses = [
    {
      icon: "🎨",
      category: "Design",
      title: "UI/UX Design Mastery with Figma",
      students: "9,800",
      price: "₹999",
      oldPrice: "₹3,999",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "☁️",
      category: "Cloud",
      title: "AWS Cloud Practitioner",
      students: "13,700",
      price: "₹1,599",
      oldPrice: "₹6,499",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "📱",
      category: "Mobile",
      title: "React Native Development",
      students: "11,200",
      price: "₹1,399",
      oldPrice: "₹5,499",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "🔐",
      category: "Security",
      title: "Cybersecurity Masterclass",
      students: "16,100",
      price: "₹1,699",
      oldPrice: "₹6,999",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5FF] flex relative overflow-x-hidden">
  
  {/* Main Content */}
  <main className="flex-1 w-full max-w-7xl  p-4 sm:p-6 lg:p-8 lg:ml-0">


        {/* Top Section */}
        <section className="mb-8 ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E1065]">
                My Courses
              </h2>
              <p className="text-slate-500 mt-2">
                Continue learning and track your progress.
              </p>
            </div>

            <button className="flex items-center gap-2 px-5 py-3 text-white bg-purple-700 border border-purple-100 rounded-2xl hover:bg-purple-800  transition-all duration-200"
            onClick={() => setCreateCourseOpen(true)}>
              <Plus size={18}  />
              Add New Course
            </button>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["All Courses", "In Progress", "Completed", "Wishlist"].map(
            (tab, index) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-2xl text-sm font-medium transition ${
                  index === 0
                    ? "bg-purple-700 text-white"
                    : "bg-white border border-purple-100 text-slate-600 hover:bg-purple-50"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Course Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-purple-100 overflow-hidden hover:shadow-lg transition"
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-xl text-xs font-semibold">
                  {course.progress}%
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-[#2E1065] line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  by {course.instructor}
                </p>

                {/* Progress */}
                <div className="mt-4">
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div
                      className="bg-purple-700 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium text-slate-700">
                      {course.rating}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500">
                    {course.lessons} Lessons
                  </p>
                </div>

                {/* Continue Button */}
                <button className="mt-5 w-full flex items-center justify-center gap-2 bg-purple-700 text-white py-3 rounded-2xl hover:bg-purple-800 transition">
                  <PlayCircle size={18} />
                  Continue
                </button>
              </div>
            </div>


          ))}
          {otherCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}

        </section>
        {createCourseOpen && <CreateCourseModal open={createCourseOpen} onClose={() => setCreateCourseOpen(false)} />}

      </main>
         </div>
  );
}