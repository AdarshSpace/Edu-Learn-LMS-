import { Star, PlayCircle } from "lucide-react";
import Link from "next/link";

type Props = {
    id: number;
    title: string;
    instructor: string;
    paid: boolean;
    progress: number;
    lessons: number;
    rating: number;
    image: string;
}

const PaidCoursesCard = ({ course }: { course: Props }) => {
  return (
    <Link href='/lectures' className="block">
           
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
   
    </Link>
  );
};

export default PaidCoursesCard;