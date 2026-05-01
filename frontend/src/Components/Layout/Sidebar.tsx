"use client"
import { LayoutDashboard, ClipboardList, TrendingUp, LogOut, Award, MessageSquare, BookOpen, X } from "lucide-react"
import { useUIStore } from '@/store/uiStore';
import Link from "next/link";
import { usePathname } from "next/navigation";


const sidebar = () => {

    const pathname = usePathname();
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const toggleSidebarOpen = useUIStore((state) => state.toggleSidebar);

  const sidebarItems = [
    { name: "Home", icon: LayoutDashboard, to: '/dashboard' },
    { name: "My Courses", icon: BookOpen, to: '/courses' },
    { name: "Documents", icon: ClipboardList, to: '/documents' },
    { name: "Progress", icon: TrendingUp, to: '/progress' },
    { name: "Certificates", icon: Award, to: '/certificates' },
    { name: "Messages", icon: MessageSquare, to: '/messages' }
  ];

    return (
        <div>
            
            {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => toggleSidebarOpen}
          />
        )}
  
        {/* Sidebar */}
        <aside
          className={`fixed lg:static top-0 left-0 h-screen w-72 bg-white border-r border-purple-100 p-6 flex flex-col justify-between z-50 transform transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-purple-700">Sprout</h1>
              <button
                className="lg:hidden"
                onClick={() => toggleSidebarOpen}
              >
                <X size={20} />
              </button>
            </div>
  
            <nav className="mt-10 space-y-3">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.to;
                return (
                  <Link href={item.to}
                    key={item.name}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                        isActive
                        ? 'bg-purple-700 text-white'
                        : 'text-slate-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
  
          <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition">
            <LogOut size={18} />
            Logout
          </button>
        </aside>
        </div>
    )
}

export default sidebar;