const stats = [
    { number: "200+", label: "Expert Courses" },
    { number: "50K+", label: "Active Students" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "40+", label: "Instructors" },
  ];
  
  export default function Stats() {
    return (
      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4 px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-[#d1fae5] p-6 text-center"
          >
            <h2 className="text-2xl font-bold">{item.number}</h2>
            <p className="text-gray-500 text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </section>
    );
  }