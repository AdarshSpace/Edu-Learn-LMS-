type Props = {
    icon: string;
    category: string;
    title: string;
    students: string;
    price: string;
    oldPrice: string;
    image: string;
  };

  
  export default function CourseCard({
    icon,
    category,
    title,
    students,
    price,
    oldPrice,
    image,
  }: Props) {
    return (
      <div className="group relative  bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-5  hover:border-slate-300/60 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ">
        <div className="h-50 hover:bg-emerald-50 flex items-center justify-center text-5xl">
          <img src={image} className="w-full h-full object-cover rounded-lg " />
        </div>
  
        <div className="p-2">
          <span className="text-xs px-3 rounded bg-purple-100 text-purple-700">
            {category}
          </span>
  
          <div className="mb-3">
          <h3 className="font-semibold mt-2 line-clamp-2 text-[#2E1065] ">{title}</h3>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
  
          <p className="text-sm text-gray-500 mt-2">
            ⭐⭐⭐⭐⭐ {students} students
          </p>
  
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="font-bold text-lg text-[#2E1065]">{price}</span>
              <span className="line-through text-gray-400 ml-2 text-sm">
                {oldPrice}
              </span>
            </div>
  
            <button className="px-6 py-3 bg-purple-700 text-white rounded-xl font-medium hover:bg-purple-800 transition">
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }