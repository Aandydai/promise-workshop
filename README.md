# 定语从句学习工坊

基于课标2025修订版的高中英语定语从句交互式学习网站。

## 快速开始

```bash
# 本地预览
npx serve .

# 或用 Python
python -m http.server 8080
```

## GitHub + Vercel 自动部署配置

### 步骤 1：推送代码到 GitHub

```bash
cd relative-clause-workshop

# 创建新仓库（替换为你的用户名）
gh repo create relative-clause-workshop --public --source=. --push

# 或者手动：
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/relative-clause-workshop.git
git push -u origin main
```

### 步骤 2：在 Vercel 导入项目

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Add New → Project**
3. 选择 **Import Git Repository**
4. 选择 `relative-clause-workshop`
5. Framework Preset 自动检测为 **Other**
6. 点击 **Deploy**

### 步骤 3：配置自动部署（可选）

推送 main 分支后自动部署，无需手动操作。

## 文件结构

```
relative-clause-workshop/
├── index.html          # 首页
├── learn.html          # 学习页
├── flashcard.html      # 闪卡页
├── roots.html          # 索引页
├── root-detail.html    # 详情页
├── progress.html       # 进度页
├── js/
│   ├── wordData.js     # 25个语法点数据
│   ├── siteConfig.js   # 站点配置
│   └── storage.js      # 本地存储逻辑
├── css/
│   └── minimal.css     # 样式文件
├── manifest.json       # PWA 配置
├── sw.js               # Service Worker
├── vercel.json         # Vercel 构建配置
└── README.md
```

## 数据内容

- 25 个核心语法点
- 75+ 条高考例句
- 25 道自测 Quiz
- 渐进式学习 + 闪卡记忆 + 进度追踪

## 技术栈

纯 HTML + CSS + Vanilla JS，无需构建工具，支持 PWA 离线访问。
