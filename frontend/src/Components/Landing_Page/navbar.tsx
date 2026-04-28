export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 py-5 bg-neutral-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
            ✦
          </div>
          <h2 className="font-bold text-xl text-emerald-900">EduLearn</h2>
        </div>
  
    
  
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-emerald-500 rounded-lg">
            Login
          </button>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>
    );
  }