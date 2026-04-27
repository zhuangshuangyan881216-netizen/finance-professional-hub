# 财务专业中心 - Finance Professional Hub

一个为财务专业人士设计的综合性平台，融合了**个人博客**、**资源导航站**和**职业作品集**。提供财务分析、税务规划、Excel、Power BI 等专业工具与教程。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38b2ac.svg)

## 🌟 核心特性

### 📚 个人博客
- 深度分享财务分析、税务规划、Excel、Power BI 等知识
- 搜索和分类过滤功能
- 邮件订阅系统
- 文章元数据（作者、日期、阅读时间）

### 🔧 资源导航站
- **Excel 工具库** - 财务模板、分析工具、VBA 脚本
- **Power BI 资源** - 仪表板模板、DAX 函数库、最佳实践
- **Power Query 教程** - 数据导入、转换、清洗完全指南
- **财务模型库** - 预测模型、估值工具、分析模板
- 下载计数和用户评分

### 🏆 职业作品集
- 项目展示和案例研究
- 技术栈过滤（Power BI、Excel、Python、财务模型）
- 关键成果指标展示
- 深度案例分析

## 🎨 设计风格

### 四色主题系统
- **蓝色 (#1E40AF)** - 专业与信任
- **黄色 (#F59E0B)** - 活力与行动
- **绿色 (#10B981)** - 增长与正向趋势
- **橙色 (#F97316)** - 热情与创新

### 排版系统
- **标题** - Playfair Display（优雅衬线体）
- **正文** - Inter（现代无衬线体）

## 🚀 快速开始

### 前置要求
- Node.js 22.13.0+
- pnpm 10.4.1+

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm dev
```
访问 `http://localhost:3000`

### 生产构建
```bash
pnpm build
```

### 预览构建结果
```bash
pnpm preview
```

## 📁 项目结构

```
finance-professional-hub/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # 首页
│   │   │   ├── Blog.tsx          # 博客页面
│   │   │   ├── Resources.tsx     # 资源导航页面
│   │   │   ├── Portfolio.tsx     # 作品集页面
│   │   │   └── NotFound.tsx      # 404 页面
│   │   ├── components/
│   │   │   ├── Navigation.tsx    # 导航栏
│   │   │   ├── Footer.tsx        # 页脚
│   │   │   └── ErrorBoundary.tsx # 错误边界
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx  # 主题上下文
│   │   ├── App.tsx               # 应用主组件
│   │   ├── main.tsx              # 入口文件
│   │   └── index.css             # 全局样式
│   ├── index.html                # HTML 模板
│   └── public/                   # 静态资源
├── server/                       # 服务器配置
├── shared/                       # 共享类型定义
├── package.json
└── README.md
```

## 🛠️ 技术栈

### 前端框架
- **React 19** - 现代 UI 库
- **Wouter** - 轻量级客户端路由
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量 React 组件库

### 开发工具
- **Vite** - 快速构建工具
- **TypeScript** - 类型安全
- **ESLint & Prettier** - 代码质量

### 图标和动画
- **Lucide React** - 现代图标库
- **Framer Motion** - 流畅动画库（预留）

## 📖 使用指南

### 添加新博客文章
编辑 `client/src/pages/Blog.tsx` 中的 `blogPosts` 数组：
```typescript
const blogPosts = [
  {
    id: 7,
    title: '您的文章标题',
    excerpt: '文章摘要',
    category: '财务分析',
    author: '作者名',
    date: '2024-04-27',
    readTime: '10 分钟',
    color: 'border-l-4-yellow',
  },
  // ...
];
```

### 添加新资源
编辑 `client/src/pages/Resources.tsx` 中的 `resourceCategories` 数组。

### 添加新项目
编辑 `client/src/pages/Portfolio.tsx` 中的 `projects` 数组。

### 自定义色彩主题
编辑 `client/src/index.css` 中的 CSS 变量：
```css
:root {
  --color-primary-blue: #1E40AF;
  --color-accent-yellow: #F59E0B;
  --color-accent-green: #10B981;
  --color-accent-orange: #F97316;
}
```

## 🌐 部署

### 部署到 Manus
该项目已在 Manus 平台上部署。访问：
- **网站 URL**: https://finhub-5gpnzzli.manus.space

### 部署到其他平台
1. 构建项目：`pnpm build`
2. 部署 `dist` 文件夹到您的托管平台
3. 配置环境变量（如需要）

## 📊 页面概览

| 页面 | 路由 | 功能 |
|------|------|------|
| 首页 | `/` | 品牌展示、内容导航、订阅 |
| 博客 | `/blog` | 文章列表、搜索、分类过滤 |
| 资源 | `/resources` | 工具库、模板、推荐链接 |
| 作品集 | `/portfolio` | 项目展示、案例研究、统计 |

## 🎯 功能路线图

### ✅ 已实现
- 响应式设计
- 四色主题系统
- 搜索和过滤功能
- 项目展示和案例研究
- 订阅功能界面

### 🔄 计划中
- 实际 CMS 集成
- 用户评论系统
- 资源下载跟踪
- SEO 优化
- 分析和追踪
- 邮件订阅后端
- 联系表单功能

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 👤 作者

**财务专业人士**
- GitHub: [@zhuangshuangyan881216-netizen](https://github.com/zhuangshuangyan881216-netizen)

## 🙏 致谢

感谢以下开源项目和社区的支持：
- React 和 React 社区
- Tailwind CSS 团队
- shadcn/ui 贡献者
- Manus 平台

## 📧 联系方式

- 📧 Email: contact@example.com
- 🐦 X (Twitter): [@YourHandle](https://x.com)
- 💼 LinkedIn: [Your Profile](https://linkedin.com)

## 📚 相关资源

- [React 官方文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [shadcn/ui 组件库](https://ui.shadcn.com)
- [Wouter 路由库](https://github.com/molefrog/wouter)

---

**最后更新**: 2024-04-27  
**版本**: 1.0.0  
**状态**: ✅ 生产就绪
