export default function LMSLandingPage() {
    const courses = [
      {
        title: 'Web Development Bootcamp',
        price: '$89.99',
        category: 'Beginner'
      },
      {
        title: 'Digital Marketing Masterclass',
        price: '$79.99',
        category: 'Intermediate'
      },
      {
        title: 'UI/UX Design Principles',
        price: '$94.99',
        category: 'Advanced'
      }
    ];
  
    const features = [
      'Expert-Led Courses',
      'Certificates',
      'Community Support',
      'Learn at Your Pace',
      'Global Access',
      'Career Growth'
    ];
  
    return (
      <div className="min-h-screen bg-[#F8F5FF] text-slate-900">
        {/* Navbar */}
        <nav className="px-8 py-5 flex items-center justify-between bg-white border-b border-purple-100">
          <h1 className="text-3xl font-bold text-purple-700">Sprout</h1>
  
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
  
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-purple-200">
              Log In
            </button>
            <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">
              Sign Up
            </button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              Trusted by 50,000+ students
            </span>
  
            <h2 className="mt-6 text-6xl font-bold leading-tight text-[#2E1065]">
              Learn Without Limits
            </h2>
  
            <p className="mt-6 text-lg text-slate-600 leading-8">
              Master new skills with expert-led courses. Join thousands of learners advancing their careers.
            </p>
  
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-2xl bg-purple-700 text-white font-medium">
                Start Learning Today
              </button>
              <button className="px-6 py-3 rounded-2xl border border-purple-200 bg-white">
                Watch Demo
              </button>
            </div>
  
            <div className="mt-8 flex gap-8">
              {['500+', '50K+', '95%'].map((stat, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-purple-900">{stat}</h3>
                  <p className="text-sm text-slate-500">Success</p>
                </div>
              ))}
            </div>
          </div>
  
          <div className="bg-white rounded-3xl p-4 shadow-lg">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-200 to-purple-400 flex items-center justify-center text-6xl">
              🎓
            </div>
          </div>
        </section>
  
        {/* Featured Courses */}
        <section className="max-w-7xl mx-auto px-8 py-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#2E1065]">Featured Courses</h3>
            <p className="mt-3 text-slate-600">Explore our most popular learning paths</p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-purple-100 hover:shadow-xl transition">
                <div className="h-52 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center text-5xl">
                  📚
                </div>
                <div className="p-6">
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h4 className="mt-4 text-xl font-semibold">{course.title}</h4>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-bold text-purple-700">{course.price}</p>
                    <button className="px-4 py-2 rounded-xl bg-purple-700 text-white text-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Features */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#2E1065]">Why Choose Us?</h3>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl border border-purple-100 p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  ✨
                </div>
                <h4 className="font-semibold text-lg">{feature}</h4>
                <p className="mt-2 text-sm text-slate-500">
                  Learn with high-quality content and structured guidance.
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA */}
        <section className="px-8 py-20">
          <div className="max-w-5xl mx-auto bg-[#2E1065] rounded-[32px] p-14 text-center text-white">
            <h2 className="text-5xl font-bold">Ready to Start Your Learning Journey?</h2>
            <p className="mt-5 text-purple-200 text-lg">
              Join thousands of students and transform your future.
            </p>
            <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-purple-800 font-semibold">
              Get Started Free
            </button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#1E0A45] text-white px-8 py-12 mt-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold">Sprout</h3>
              <p className="mt-3 text-purple-200 max-w-sm">
                Empowering learners worldwide through quality education.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-8 text-sm text-purple-200">
              <div>
                <p>Courses</p>
                <p>About</p>
                <p>Blog</p>
              </div>
              <div>
                <p>Support</p>
                <p>Privacy</p>
                <p>Terms</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  