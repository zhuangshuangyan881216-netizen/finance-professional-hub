import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '/' },
    { label: '博客', href: '/blog' },
    { label: '资源', href: '/resources' },
    { label: '作品集', href: '/portfolio' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-primary-blue hidden sm:inline">财务专业中心</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="font-medium transition-all duration-200 hover:opacity-70 text-gray-700 hover:text-primary-blue">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block py-2 font-medium transition-all duration-200 text-gray-700 hover:text-primary-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
