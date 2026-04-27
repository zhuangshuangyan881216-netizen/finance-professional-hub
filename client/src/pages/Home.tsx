import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Link as LinkIcon, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663477655670/5GPnZzLiGiY4JQUpV4yzgB/hero-background-PTNtoFyCi6MjyHccEU6aDy.webp';
  const blogImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663477655670/5GPnZzLiGiY4JQUpV4yzgB/blog-section-image-hxJifXFGLx43LwwEp7YD57.webp';
  const resourcesImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663477655670/5GPnZzLiGiY4JQUpV4yzgB/tools-resources-illustration-9aMNLJuz7G2v96J4gGvHyT.webp';
  const portfolioImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663477655670/5GPnZzLiGiY4JQUpV4yzgB/portfolio-showcase-bg-SR6hNwPXPT5Zj4XHGhjeR9.webp';

  const blogPosts = [
    {
      id: 1,
      title: '财务分析基础：从报表到洞察',
      excerpt: '学习如何读懂财务报表，从数字中提取有价值的商业洞察。',
      category: '财务分析',
      color: 'border-l-4-yellow',
      date: '2024-04-20',
    },
    {
      id: 2,
      title: 'Excel 高级技巧：数据透视表完全指南',
      excerpt: '掌握 Excel 数据透视表，快速分析大规模数据集。',
      category: 'Excel 教程',
      color: 'border-l-4-green',
      date: '2024-04-18',
    },
    {
      id: 3,
      title: '税务规划策略：合理降低税负',
      excerpt: '了解个人和企业税务规划的最佳实践。',
      category: '税务规划',
      color: 'border-l-4-orange',
      date: '2024-04-15',
    },
  ];

  const resources = [
    {
      id: 1,
      name: 'Excel 工具库',
      description: '包含财务模板、分析工具和自动化脚本',
      icon: '📊',
      color: 'bg-accent-yellow',
    },
    {
      id: 2,
      name: 'Power BI 资源',
      description: '仪表板模板、DAX 函数库和最佳实践',
      icon: '📈',
      color: 'bg-accent-green',
    },
    {
      id: 3,
      name: 'Power Query 教程',
      description: '数据导入、转换和清洗完全指南',
      icon: '🔄',
      color: 'bg-accent-orange',
    },
    {
      id: 4,
      name: '财务模型库',
      description: '现成的财务预测和估值模型',
      icon: '💰',
      color: 'bg-primary-blue',
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: '企业财务分析系统',
      description: '基于 Power BI 的完整财务分析仪表板',
      tags: ['Power BI', 'DAX', '财务分析'],
    },
    {
      id: 2,
      title: '税务规划优化模型',
      description: '使用 Excel 和 Python 构建的税务优化工具',
      tags: ['Excel', 'Python', '税务'],
    },
    {
      id: 3,
      title: '数据管道自动化项目',
      description: '使用 Power Query 和 VBA 实现数据自动化',
      tags: ['Power Query', 'VBA', '自动化'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              财务专业的<br />
              <span className="text-accent-yellow">完整生态</span>
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              汇聚财务分析、税务规划、Excel、Power BI 等专业工具与教程。
              从基础到精通，一站式提升您的财务技能。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent-yellow text-gray-900 hover:bg-yellow-500 font-semibold">
                开始探索 <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-accent-yellow" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">最新文章</h2>
          </div>
          <p className="text-gray-600 mb-12">深度分享财务、税务、数据分析的实用知识</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ${post.color}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary-blue font-semibold hover:text-blue-800 flex items-center gap-2">
                  阅读更多 <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-blue-50">
              查看所有文章 <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <LinkIcon className="text-accent-green" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">资源导航</h2>
          </div>
          <p className="text-gray-600 mb-12">精选工具、模板和学习资源，助力您的专业成长</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-blue hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-accent-orange" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">职业作品集</h2>
          </div>
          <p className="text-gray-600 mb-12">展示专业能力和项目成果</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-primary-blue to-accent-green"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-accent-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">准备开始您的财务专业之旅？</h2>
          <p className="text-lg mb-8 opacity-90">
            订阅我们的通讯，获取最新的教程、资源和行业洞察
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1 max-w-sm"
            />
            <Button className="bg-accent-yellow text-gray-900 hover:bg-yellow-500 font-semibold">
              订阅
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
