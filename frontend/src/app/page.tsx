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
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: "🤖",
    category: "AI & ML",
    title: "Machine Learning with Python & TensorFlow",
    students: "15,300",
    price: "₹1,499",
    oldPrice: "₹5,999",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
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
const course = [
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
  {
    id: 3,
    title: "React Advanced Patterns",
    instructor: "Kent Dodds",
    progress: 81,
    lessons: 30,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Database Design",
    instructor: "Prisma Team",
    progress: 35,
    lessons: 16,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Next.js Fullstack",
    instructor: "Vercel Team",
    progress: 57,
    lessons: 20,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Backend API Engineering",
    instructor: "Node School",
    progress: 22,
    lessons: 28,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop"
  }
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
