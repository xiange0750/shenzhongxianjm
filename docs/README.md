# 龙安设计工作室 — GitHub Pages 网站

## 站点地址

`https://xiange0750.github.io/shenzhongxianjm/`

## 本地预览

在浏览器中直接打开 `docs/index.html` 即可预览。

## GitHub Pages 部署

1. 进入仓库 **Settings → Pages**
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `master`，**文件夹** 选择 `/docs`
4. 点击 **Save**，等待几分钟后即可访问

## 目录结构

```
docs/
├── index.html      # 主页面
├── css/style.css   # 样式表
├── js/main.js      # 交互脚本
├── images/         # 图片资源
├── .nojekyll       # 禁用 Jekyll（保持 _开头的文件可见）
└── README.md       # 本文件
```

## 技术栈

- 纯静态 HTML / CSS / JS
- Noto Sans SC 中文字体（Google Fonts）
- 自适应桌面与移动端
- 无外部依赖框架
