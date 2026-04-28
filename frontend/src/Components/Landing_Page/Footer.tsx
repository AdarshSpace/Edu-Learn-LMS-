export default function Footer() {
    return (
      <footer className="bg-white border-t px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="font-bold text-xl text-emerald-900">EduLearn</h2>
  
        <div className="flex gap-6 text-gray-500 mt-4 md:mt-0">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
        </div>
      </footer>
    );
  }