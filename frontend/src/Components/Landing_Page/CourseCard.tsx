type Props = {
    icon: string;
    category: string;
    title: string;
    students: string;
    price: string;
    oldPrice: string;
  };
  
  export default function CourseCard({
    icon,
    category,
    title,
    students,
    price,
    oldPrice,
  }: Props) {
    return (
      <div className="group relative  bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-5 hover:bg-teal-50/80 hover:border-slate-300/60 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ">
        <div className="h-50 hover:bg-emerald-50 flex items-center justify-center text-5xl">
          <img src='https://www.greenstechnologys.com/images/reactjs.jpg' className="w-full h-full object-cover rounded-lg " />
        </div>
  
        <div className="p-2">
          <span className="text-xs px-3 rounded bg-emerald-100 text-emerald-700">
            {category}
          </span>
  
          <div className="h-10 mb-3">
          <h3 className="font-semibold mt-2 line-clamp-2 ">{title}</h3>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
  
          <p className="text-sm text-gray-500 mt-2">
            ⭐⭐⭐⭐⭐ {students} students
          </p>
  
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="font-bold text-lg">{price}</span>
              <span className="line-through text-gray-400 ml-2 text-sm">
                {oldPrice}
              </span>
            </div>
  
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }