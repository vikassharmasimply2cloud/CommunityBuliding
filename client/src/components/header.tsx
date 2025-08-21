import { Button } from "@/components/ui/button";
import { Users, Menu } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-slate-800 flex items-center cursor-pointer">
                <Users className="text-primary mr-2 h-6 w-6" />
                CommunityHub
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              Browse
            </Link>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Create Community</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <Button className="bg-primary text-white hover:bg-blue-700">
              Sign In
            </Button>
          </nav>
          <button className="md:hidden">
            <Menu className="text-slate-600 h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
