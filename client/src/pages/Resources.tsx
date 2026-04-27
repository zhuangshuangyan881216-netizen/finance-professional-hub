import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Resources() {
  const resourceCategories = [
    {
      id: 1,
      title: 'Excel 工具库',
      description: '包含财务模板、分析工具和自动化脚本',
      icon: '📊',
      color: 'bg-accent-yellow',
      resources: [
        {
          name: '财务报表模板',
          description: '现成的财务报表模板，包括资产负债表、利润表、现金流量表',
          downloads: 1250,
          rating: 4.8,
        },
        {
          name: '数据透视表教程',
          description: '完整的数据透视表示例和最佳实践',
          downloads: 890,
          rating: 4.9,
        },
        {
          name: 'VBA 自动化脚本库',
          description: '常用的 VBA 脚本集合，提升工作效率',
          downloads: 650,
          rating: 4.7,
        },
      ],
    },
    {
      id: 2,
      title: 'Power BI 资源',
      description: '仪表板模板、DAX 函数库和最佳实践',
      icon: '📈',
      color: 'bg-accent-green',
      resources: [
        {
          name: '销售分析仪表板',
          description: '完整的销售数据可视化仪表板模板',
          downloads: 1100,
          rating: 4.8,
        },
        {
          name: 'DAX 函数速查表',
          description: '常用 DAX 函数的完整参考和示例',
          downloads: 2300,
          rating: 4.9,
        },
        {
          name: '财务分析仪表板',
          description: '企业财务数据的完整分析仪表板',
          downloads: 950,
          rating: 4.8,
        },
      ],
    },
    {
      id: 3,
      title: 'Power Query 教程',
      description: '数据导入、转换和清洗完全指南',
      icon: '🔄',
      color: 'bg-accent-orange',
      resources: [
        {
          name: '数据导入指南',
          description: '从各种数据源导入数据的完整教程',
          downloads: 780,
          rating: 4.7,
        },
        {
          name: '数据清洗最佳实践',
          description: '处理脏数据的常见技巧和方法',
          downloads: 1050,
          rating: 4.8,
        },
        {
          name: 'M 语言参考手册',
          description: 'Power Query M 语言的完整参考',
          downloads: 650,
          rating: 4.6,
        },
      ],
    },
    {
      id: 4,
      title: '财务模型库',
      description: '现成的财务预测和估值模型',
      icon: '💰',
      color: 'bg-primary-blue',
      resources: [
        {
          name: '三表联动模型',
          description: '完整的财务三表联动预测模型',
          downloads: 1500,
          rating: 4.9,
        },
        {
          name: 'DCF 估值模型',
          description: '现金流折现法估值模型',
          downloads: 890,
          rating: 4.8,
        },
        {
          name: '敏感性分析工具',
          description: '财务指标敏感性分析模板',
          downloads: 720,
          rating: 4.7,
        },
      ],
    },
  ];

  const externalLinks = [
    {
      name: 'Microsoft Excel 官方文档',
      url: '#',
      category: 'Excel',
      icon: '📚',
    },
    {
      name: 'Power BI 学习中心',
      url: '#',
      category: 'Power BI',
      icon: '🎓',
    },
    {
      name: 'Power Query 官方指南',
      url: '#',
      category: 'Power Query',
      icon: '📖',
    },
    {
      name: '财务分析协会资源',
      url: '#',
      category: '财务分析',
      icon: '🏢',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-accent-green to-primary-blue text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">资源导航中心</h1>
          <p className="text-lg opacity-90">
            精选工具、模板和学习资源，助力您的财务专业成长
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container">
          {resourceCategories.map((category) => (
            <div key={category.id} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center text-3xl`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.resources.map((resource, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{resource.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">{resource.downloads} 次下载</span>
                    </div>

                    <Button className="w-full bg-primary-blue text-white hover:bg-blue-800 flex items-center justify-center gap-2">
                      <Download size={16} />
                      下载
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">推荐链接</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {externalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary-blue hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                  {link.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{link.category}</p>
                <div className="flex items-center gap-2 text-primary-blue font-semibold">
                  访问 <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-accent-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">找不到您需要的资源？</h2>
          <p className="text-lg mb-8 opacity-90">
            联系我们，我们会帮您创建或推荐合适的资源
          </p>
          <Button className="bg-accent-yellow text-gray-900 hover:bg-yellow-500 font-semibold">
            提出建议
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
