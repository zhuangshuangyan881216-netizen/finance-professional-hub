import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '财务分析', 'Excel 教程', '税务规划', 'Power BI', 'Power Query'];

  const blogPosts = [
    {
      id: 1,
      title: '财务分析基础：从报表到洞察',
      excerpt: '学习如何读懂财务报表，从数字中提取有价值的商业洞察。包括资产负债表、利润表和现金流量表的深度分析。',
      category: '财务分析',
      author: '财务专家',
      date: '2024-04-20',
      readTime: '8 分钟',
      color: 'border-l-4-yellow',
      content: '详细内容...',
    },
    {
      id: 2,
      title: 'Excel 高级技巧：数据透视表完全指南',
      excerpt: '掌握 Excel 数据透视表，快速分析大规模数据集。学习如何创建、修改和优化数据透视表。',
      category: 'Excel 教程',
      author: '数据分析师',
      date: '2024-04-18',
      readTime: '12 分钟',
      color: 'border-l-4-green',
      content: '详细内容...',
    },
    {
      id: 3,
      title: '税务规划策略：合理降低税负',
      excerpt: '了解个人和企业税务规划的最佳实践。探索合法的税收优化策略。',
      category: '税务规划',
      author: '税务顾问',
      date: '2024-04-15',
      readTime: '10 分钟',
      color: 'border-l-4-orange',
      content: '详细内容...',
    },
    {
      id: 4,
      title: 'Power BI 仪表板设计最佳实践',
      excerpt: '创建高效的 Power BI 仪表板，提升数据可视化效果。学习设计原则和最佳实践。',
      category: 'Power BI',
      author: 'BI 专家',
      date: '2024-04-12',
      readTime: '15 分钟',
      color: 'border-l-4-blue',
      content: '详细内容...',
    },
    {
      id: 5,
      title: 'Power Query 数据清洗完全指南',
      excerpt: '使用 Power Query 进行高效的数据导入、转换和清洗。提升数据处理效率。',
      category: 'Power Query',
      author: '数据工程师',
      date: '2024-04-10',
      readTime: '14 分钟',
      color: 'border-l-4-yellow',
      content: '详细内容...',
    },
    {
      id: 6,
      title: '经营分析框架：构建完整的分析体系',
      excerpt: '建立系统的经营分析框架，支持决策制定。了解关键指标和分析方法。',
      category: '财务分析',
      author: '财务总监',
      date: '2024-04-08',
      readTime: '11 分钟',
      color: 'border-l-4-green',
      content: '详细内容...',
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-accent-green text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">财务专业博客</h1>
          <p className="text-lg opacity-90">
            深度分享财务分析、税务规划、Excel、Power BI 等实用知识和经验
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-blue text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-primary-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ${post.color}`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {post.date}
                        </div>
                      </div>
                    </div>

                    <a href="#" className="text-primary-blue font-semibold hover:text-blue-800 flex items-center gap-2 group">
                      阅读全文 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">未找到匹配的文章</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">订阅最新文章</h2>
          <p className="text-gray-600 mb-8">
            每周获取精选的财务分析、Excel 技巧和数据分析文章
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
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
