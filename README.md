# 课程学习与编码统计平台

这是一个使用Next.js框架构建的Web应用，集成了个人课程练习展示、WakaTime API编码时长统计以及QAnything大语言模型问答服务。

## 项目简介

本项目旨在展示学期内所学的HTML、CSS、JavaScript、React和Next.js等Web开发技术，同时整合了实用的功能如编码时长统计和AI问答服务。主要功能包括：

1. **课程练习展示**：按分类整理展示本学期所有课程练习内容
2. **WakaTime API集成**：在页脚展示个人累计编码时长统计
3. **QAnything服务接入**：提供大语言模型问答服务体验

## QAnything集成路径与实现细节

本项目选择了**路径一**（HTML页面嵌入）的QAnything集成方式。

**选择原因**：
- 实现简单直接，无需额外的API调用和状态管理
- 可以直接利用QAnything服务商提供的完整UI界面
- 避免处理复杂的API鉴权和响应解析逻辑

**实现方式**：
- 使用iframe嵌入QAnything服务的HTML页面
- 提供备选的外部链接，以防iframe加载失败
- 添加使用说明，帮助用户了解如何使用该服务

## WakaTime API集成方法

WakaTime集成采用了以下方式：

1. **API密钥管理**：
   - 通过环境变量（.env.local）安全存储API密钥
   - 使用Next.js的环境变量功能，避免密钥泄露

2. **数据获取与展示**：
   - 在Footer组件中使用React hooks (useState, useEffect)获取编码时长数据
   - 数据请求使用标准fetch API或axios（需安装）
   - 在页脚全局展示累计编码时长，保证在所有页面可见

3. **错误处理**：
   - 添加加载状态显示
   - 处理API请求失败的情况，确保用户体验

## Next.js项目结构

```
code-portfolio/
├── app/                    # Next.js 13+ App Router
│   ├── exercises/          # 课程练习相关页面
│   │   ├── html-basics/    # HTML基础练习示例
│   │   └── page.tsx        # 练习列表页面
│   ├── qanything/          # QAnything服务页面
│   │   └── page.tsx        # QAnything问答页面
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 应用布局组件
│   └── page.tsx            # 首页
├── components/             # 可复用组件
│   ├── Footer.tsx          # 页脚组件（含WakaTime统计）
│   └── Navbar.tsx          # 导航栏组件
├── public/                 # 静态资源
│   └── ...
├── .env.example            # 环境变量示例
├── next.config.js          # Next.js配置
├── package.json            # 项目依赖
├── tailwind.config.js      # Tailwind CSS配置
└── tsconfig.json           # TypeScript配置
```

## 旧作业整合方式

本项目通过以下方法整合了旧的课程练习：

1. **统一入口**: 创建 `/exercises` 路由作为所有练习的集中入口
2. **分类展示**: 按技术类型（HTML、CSS、JavaScript等）分类展示练习项目
3. **组件化改造**: 将旧练习重构为React组件，以便在Next.js中使用
4. **独立路由**: 为每个练习创建独立的子路由，如 `/exercises/html-basics`
5. **保留原始代码**: 在适当情况下保留原始练习代码，并在界面上提供查看原代码的选项

## 项目运行指南

### 环境要求
- Node.js 18.x 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆代码库
```bash
git clone https://github.com/yourusername/code-portfolio.git
cd code-portfolio
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 配置环境变量
```bash
cp .env.example .env.local
# 编辑 .env.local 文件，填入你的WakaTime API Key
```

4. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

5. 访问网站
   打开浏览器，访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
npm start
# 或
yarn build
yarn start
```

## 运行截图

### QAnything运行截图
![QAnything服务截图]([https://example.com/screenshots/qanything.png](https://github.com/dengxueqin/job/blob/main/images/a.jpg))
*截图展示了嵌入的QAnything问答服务页面*

### WakaTime API集成与展示截图
![WakaTime统计截图](https://example.com/screenshots/wakatime.png)
*截图展示了页脚中显示的累计编码时长*

### Next.js组织课程练习作业的运行截图
![课程练习列表](https://example.com/screenshots/exercises-list.png)
*截图展示了课程练习导航页面*

![HTML基础练习](https://example.com/screenshots/html-basics.png)
*截图展示了HTML基础练习的运行界面* 
