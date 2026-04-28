export default function Hero() {
    const icons = ["📖", "🖊️", "💡", "🖥️", "🔭"];
  
    return (
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-emerald-950 leading-tight">
          The smartest way <br />
          to <span className="text-emerald-500">learn anything</span>
        </h1>
  
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Fun, engaging, project-based courses designed for real people.
        </p>
  
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg">
            Start Learning Free
          </button>
  
          <button className="px-6 py-3 border-2 border-[#d1fae5] rounded-lg bg-white">
            See All Courses
          </button>
        </div>
  
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-xl bg-white border-2 border-[#d1fae5] flex items-center justify-center text-2xl"
            >
              {icon}
            </div>
          ))}
        </div>
      </section>
    );
  }