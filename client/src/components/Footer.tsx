import { Link } from 'wouter';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">财务专业中心</h3>
            <p className="text-gray-400 text-sm">
              为财务专业人士提供综合资源、教程和工具，涵盖财务分析、税务规划、Excel、Power BI 等领域。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/"><a className="hover:text-accent-yellow transition">首页</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-accent-yellow transition">博客</a></Link></li>
              <li><Link href="/resources"><a className="hover:text-accent-yellow transition">资源</a></Link></li>
              <li><Link href="/portfolio"><a className="hover:text-accent-yellow transition">作品集</a></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">资源分类</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent-green transition">财务分析</a></li>
              <li><a href="#" className="hover:text-accent-green transition">税务规划</a></li>
              <li><a href="#" className="hover:text-accent-green transition">Excel 教程</a></li>
              <li><a href="#" className="hover:text-accent-green transition">Power BI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <div className="flex gap-4">
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-accent-orange transition">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} 财务专业中心. 版权所有。</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">隐私政策</a>
              <a href="#" className="hover:text-white transition">服务条款</a>
              <a href="#" className="hover:text-white transition">联系方式</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
