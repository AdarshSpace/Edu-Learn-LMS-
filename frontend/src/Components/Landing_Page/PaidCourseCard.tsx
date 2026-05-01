import { Star, PlayCircle } from "lucide-react";

type Props = {
    id: number;
    title: string;
    instructor: string;
    progress: number;
    lessons: number;
    rating: number;
    image: string;
  };
  

  
  export default function PaidCourseCard({
    id,
    title,
    instructor,
    progress,
    lessons,
    rating,
    image,
  }: Props) {
    return (
      <div className="group relative  bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-5  hover:border-slate-300/60 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ">
        <div className="h-50 hover:bg-emerald-50 flex items-center justify-center text-5xl">
          <img src={image} className="w-full h-full object-cover rounded-lg " />
        </div>
  
        <div className="p-2">
        {/* Course Content */}
        <div className="p-5">
                <h3 className="font-semibold text-lg text-[#2E1065] line-clamp-2">
                  {title}
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  by {instructor}
                </p>

                {/* Progress */}
                <div className="mt-4">
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div
                      className="bg-purple-700 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium text-slate-700">
                      {rating}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500">
                    {lessons} Lessons
                  </p>
                </div>

                {/* Continue Button */}
                <button className="mt-5 w-full flex items-center justify-center gap-2 bg-purple-700 text-white py-3 rounded-2xl hover:bg-purple-800 transition">
                  <PlayCircle size={18} />
                  Continue
                </button>
              </div>
        </div>
      </div>
    );
  }