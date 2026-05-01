"use client"
import {Bell, Search, Menu, X} from 'lucide-react'
import { useUIStore } from '@/store/uiStore';

 const Header = () => {
    const  sidebarOpen  = useUIStore((state) => state.sidebarOpen);
    const  toggleSidebar  = useUIStore((state) => state.toggleSidebar);
    return (
        <header className="bg-white border-b border-purple-100 px-4 sm:px-6 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-0">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            className="p-3 rounded-2xl hover:bg-purple-50"
            onClick={() => toggleSidebar}
          >
            <Menu size={20} />
          </button>

          <div className="relative flex-1 sm:flex-none">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-12 pr-4 py-3 rounded-2xl border border-purple-100 bg-[#F8F5FF] w-full sm:w-72 lg:w-80"
            />
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button className="relative p-3 rounded-2xl hover:bg-purple-50">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-700 rounded-full" />
          </button>

          <div className="flex items-center gap-3 bg-purple-50 rounded-2xl px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-purple-200" />
            <div>
              <p className="font-medium text-sm">Adarsh</p>
              <p className="text-xs text-slate-500">Student</p>
            </div>
          </div>
        </div>
      </header>
    )
 }

 export default Header;