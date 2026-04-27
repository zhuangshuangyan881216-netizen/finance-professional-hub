import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Github, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('全部');

  const filters = ['全部', 'Power BI', 'Excel', 'Python', '财务模型'];

  const projects = [
    {
      id: 1,
      title: '企业财务分析系统',
      description: '基于 Power BI 的完整财务分析仪表板，包含销售、成本、利润等多维度分析',
      tags: ['Power BI', 'DAX', '财务分析'],
      category: 'Power BI',
      image: 'bg-gradient-to-br from-blue-500 to-blue-700',
      metrics: [
        { label: '数据点', value: '50K+' },
        { label: '实时更新', value: '是' },
        { label: '用户数', value: '100+' },
      ],
      link: '#',
    },
    {
      id: 2,
      title: '税务规划优化模型',
      description: '使用 Excel 和 Python 构建的税务优化工具，帮助企业合理规划税收',
      tags: ['Excel', 'Python', '税务'],
      category: 'Excel',
      image: 'bg-gradient-to-br from-green-500 to-green-700',
      metrics: [
        { label: '优化率', value: '15-20%' },
        { label: '场景数', value: '100+' },
        { label: '准确率', value: '99%' },
      ],
      link: '#',
    },
    {
      id: 3,
      title: '数据管道自动化项目',
      description: '使用 Power Query 和 VBA 实现数据自动化，减少手动处理时间 80%',
      tags: ['Power Query', 'VBA', '自动化'],
      category: 'Excel',
      image: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
      metrics: [
        { label: '处理速度', value: '提升 10x' },
        { label: '错误率', value: '降低 95%' },
        { label: '节省时间', value: '每月 40h' },
      ],
      link: '#',
    },
    {
      id: 4,
      title: '销售预测模型',
      description: '使用 Python 和机器学习构建销售预测模型，预测准确率达 92%',
      tags: ['Python', '机器学习', '预测'],
      category: 'Python',
      image: 'bg-gradient-to-br from-purple-500 to-purple-700',
      metrics: [
        { label: '准确率', value: '92%' },
        { label: '预测周期', value: '12 个月' },
        { label: '数据源', value: '5+' },
      ],
      link: '#',
    },
    {
      id: 5,
      title: '财务三表联动模型',
      description: '完整的财务预测模型，实现资产负债表、利润表、现金流量表的自动联动',
      tags: ['财务模型', 'Excel', '预测'],
      category: '财务模型',
      image: 'bg-gradient-to-br from-orange-500 to-orange-700',
      metrics: [
        { label: '场景数', value: '50+' },
        { label: '更新频率', value: '实时' },
        { label: '用户反馈', value: '5⭐' },
      ],
      link: '#',
    },
    {
      id: 6,
      title: 'KPI 仪表板系统',
      description: '企业级 KPI 监控系统，支持多维度数据分析和实时告警',
      tags: ['Power BI', '数据分析', 'KPI'],
      category: 'Power BI',
      image: 'bg-gradient-to-br from-red-500 to-red-700',
      metrics: [
        { label: 'KPI 指标', value: '200+' },
        { label: '更新频率', value: '实时' },
        { label: '部门覆盖', value: '全公司' },
      ],
      link: '#',
    },
  ];

  const filteredProjects = selectedFilter === '全部'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  const stats = [
    { icon: Award, label: '已完成项目', value: '25+' },
    { icon: TrendingUp, label: '平均满意度', value: '4.9/5' },
    { icon: Github, label: '开源贡献', value: '15+' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue via-accent-green to-accent-orange text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">职业作品集</h1>
          <p className="text-lg opacity-90">
            展示专业能力和项目成果，涵盖财务分析、数据可视化、自动化等领域
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className={`h-40 ${project.image}`}></div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-gray-200">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-xs text-gray-500">{metric.label}</p>
                        <p className="text-sm font-bold text-primary-blue">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-primary-blue text-white hover:bg-blue-800 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    查看详情
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">案例研究</h2>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-blue-500 to-blue-700"></div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    某大型企业财务分析系统
                  </h3>
                  <p className="text-gray-600 mb-4">
                    为一家 500 强企业构建了完整的财务分析系统，包含 200+ 个 KPI 指标，支持实时数据更新和多维度分析。
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">主要成果：</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ 报表生成时间从 2 小时降低到 5 分钟</li>
                      <li>✓ 数据准确率提升至 99.9%</li>
                      <li>✓ 用户满意度达 4.9/5</li>
                    </ul>
                  </div>
                  <Button className="w-full md:w-auto bg-primary-blue text-white hover:bg-blue-800">
                    阅读完整案例
                  </Button>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    中型企业税务规划优化
                  </h3>
                  <p className="text-gray-600 mb-4">
                    为一家中型制造企业设计了全面的税务规划方案，通过合理的结构设计和政策利用，实现了显著的税收优化。
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">主要成果：</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ 年度税负降低 18%</li>
                      <li>✓ 建立完整的税务合规体系</li>
                      <li>✓ 节省专业咨询费用 40%</li>
                    </ul>
                  </div>
                  <Button className="w-full md:w-auto bg-accent-green text-white hover:bg-green-700">
                    阅读完整案例
                  </Button>
                </div>
                <div className="h-64 md:h-auto bg-gradient-to-br from-green-500 to-green-700 order-1 md:order-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-accent-green text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">想要合作或了解更多？</h2>
          <p className="text-lg mb-8 opacity-90">
            联系我，讨论如何为您的企业创建定制化的财务分析解决方案
          </p>
          <Button className="bg-accent-yellow text-gray-900 hover:bg-yellow-500 font-semibold">
            联系我
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
