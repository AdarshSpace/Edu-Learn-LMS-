import Navbar from "@/Components/Landing_Page/navbar";
import Hero from "@/Components/Landing_Page/Hero";
import Stats from "@/Components/Landing_Page/Stats";
import CourseCard from "@/Components/Landing_Page/CourseCard";
import CTA from "@/Components/Landing_Page/CTA";
import Footer from "../Components/Landing_Page/Footer";

const courses = [
  {
    icon: "💻",
    category: "Web Dev",
    title: "Full-Stack Web Development Bootcamp",
    students: "12,400",
    price: "₹1,299",
    oldPrice: "₹4,999",
  },
  {
    icon: "🤖",
    category: "AI & ML",
    title: "Machine Learning with Python & TensorFlow",
    students: "15,300",
    price: "₹1,499",
    oldPrice: "₹5,999",
  },
  {
    icon: "🎨",
    category: "Design",
    title: "UI/UX Design Mastery with Figma",
    students: "9,800",
    price: "₹999",
    oldPrice: "₹3,999",
  },
  {
    icon: "☁️",
    category: "Cloud",
    title: "AWS Cloud Practitioner",
    students: "13,700",
    price: "₹1,599",
    oldPrice: "₹6,499",
  },
  {
    icon: "📱",
    category: "Mobile",
    title: "React Native Development",
    students: "11,200",
    price: "₹1,399",
    oldPrice: "₹5,499",
  },
  {
    icon: "🔐",
    category: "Security",
    title: "Cybersecurity Masterclass",
    students: "16,100",
    price: "₹1,699",
    oldPrice: "₹6,999",
  },
];

export default function HomePage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 mb-8">
          {["All","Web Dev","Design","AI & ML","Cloud","Mobile","Security",].map((item, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg border ${i === 0
                  ? "bg-emerald-500 text-white"
                  : "bg-white border-emerald-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
