<h1 align="center">Hugo Theme Luna</h1>

<h3 align="center"><i>一个简约，性能优先，SEO 友好的 Hugo 主题</i></h3>

<p align="center">
  <a href="https://github.com/gohugoio/hugo" target="_blank"><img src="https://img.shields.io/badge/Hugo-0.97-green?style=for-the-badge&logo=hugo&logoColor=white" /></a>
  <a href="https://github.com/Ice-Hazymoon/hugo-theme-luna/actions/workflows/main.yml" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/Ice-Hazymoon/hugo-theme-luna/main.yml?style=for-the-badge&branch=master&logo=github&logoColor=white" /></a>
  <a href="https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Ice-Hazymoon/hugo-theme-luna?style=for-the-badge" /></a>
</p>

![Luna](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/luna.png)

[👉在线预览](https://hugo-theme-luna.imiku.me/zh-cn) | [English](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/README.md)

![](https://img.shields.io/github/last-commit/Ice-Hazymoon/hugo-theme-luna?style=flat-square) ![](https://img.shields.io/github/languages/code-size/Ice-Hazymoon/hugo-theme-luna?style=flat-square)
[![Netlify Status](https://api.netlify.com/api/v1/badges/085457b4-c6d2-419e-af64-1f2f8b948779/deploy-status)](https://app.netlify.com/sites/hugo-theme-luna/deploys)
[![Vercel](https://img.shields.io/badge/Vercel-black?style=style=flat-square&logo=vercel&logoColor=white)](https://hugo-theme-luna-dusky.vercel.app/_src)

<details open>
<summary>目录</summary>

- [👋 特性](#-特性)
- [💻 使用](#-使用)
  - [- 📋 环境](#---环境)
  - [- 📥 安装主题](#---安装主题)
  - [- 🔄 更新主题](#---更新主题)
  - [- 🚀 运行在 GitHub Pages](#---运行在-github-pages)
  - [- ☁️ 运行在 Netlify](#--️-运行在-netlify)
  - [- ⚡ 运行在 Vercel](#---运行在-vercel)
  - [- 🌩️ 运行在 Cloudflare Pages](#--️-运行在-cloudflare-pages)
  - [- ⚙️ 配置](#--️-配置)
  - [- 💬 评论系统](#---评论系统)
  - [- 📜 短代码](#---短代码)
  - [- 🔒 加密文章](#---加密文章)
- [📝 注意](#-注意)
- [🐙 GitHub Action](#-github-action)
- [🎨 自定义](#-自定义)
- [🛠️ 开发](#️-开发)
- [📈 性能测试](#-性能测试)
- [👏 致谢](#-致谢)
- [📜 License](#-license)
</details>

## 👋 特性

- 使用 [Tailwindcss](https://tailwindcss.com) 构建，界面美观，SEO友好
- 动态导入 JS 模块
- 数学公式，使用 [KaTeX](https://katex.org/)
- 自定义主题颜色和字体
- 轮播图
- 丰富的[短代码](https://hugo-theme-luna.imiku.me/zh-cn/2022/05/02/shortcodes.html/)支持
- 夜间模式
- [Bionic Reading](https://bionic-reading.com/) 
- 画廊模式
- 图片自动压缩，支持 webp 向下兼容
- 支持文章加密（任何情况下都请勿加密重要内容）
- 多语言切换支持
- Google 翻译支持
- PWA 支持
- Pjax 无刷新加载页面，使用 [swup.js](https://swup.js.org/)
- 图片懒加载
- noscript 支持
- 本地搜索支持，使用 [flexsearch](https://github.com/nextapps-de/flexsearch)
- GitHub 页面
- 归档页面
- [GitHub Actions](https://github.com/features/actions) 支持
- 和更多......

## 💻 使用

### - 📋 环境

注意，在使用该主题之前，请确保你遵循以下环境

- **hugo-extended** 版本 >= 0.104.0
- **NodeJs** >= 16.0.0
- 已安装 **postcss-cli**，使用 `npm install postcss-cli -g` 安装

第一次使用 Hugo 可以参考官方的安装手册：[https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/)

如果你在使用 Windows，我推荐使用 [Scoop](https://scoop.sh/) 来安装 Hugo：

```bash
scoop install hugo-extended
```

### - 📥 安装主题

```bash
git submodule add -b master https://github.com/Ice-Hazymoon/hugo-theme-luna themes/hugo-theme-luna
cd themes/hugo-theme-luna
npm install --production
```

在主题 [`exampleSite`](https://github.com/Ice-Hazymoon/hugo-theme-luna/tree/main/exampleSite) 目录有一个 [`config.yaml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/config.yaml) 文件，将该文件复制到你的站点目录下并根据需求修改相关内容。

### - 🔄 更新主题

```bash
git submodule update --remote
```


### - 🚀 运行在 GitHub Pages

参考 [GitHub Actions](#---运行在-github-pages)

### - ☁️ 运行在 Netlify

参考 [netlify.toml](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/netlify.toml)

### - ⚡ 运行在 Vercel

参考 [vercel.json](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/vercel.json)

### - 🌩️ 运行在 Cloudflare Pages

Environment variables

```
HUGO_THEME: repo
HUGO_VERSION: 0.104.3
NODE_VERSION: 17.3.0
```

Build command

```bash
$ cd themes/hugo-theme-luna && npm install postcss-cli -g && npm install --production && cd ../../ && hugo --gc -v --minify --cleanDestinationDir --enableGitInfo
```

Build output directory

```
/public
```

### - ⚙️ 配置

请参考 [`config.yaml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/config.yaml) 文件来配置你的博客

如果你喜欢使用 toml，你可以在 [convert yaml to toml](https://www.convertsimple.com/convert-yaml-to-toml) 转换它

所有图标可以在 [Eva icons](https://akveo.github.io/eva-icons) 查询

你可以通过创建 [assets/icon.png](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/assets/icon.png) 文件来修改你的网站图标

### - 💬 评论系统

你可以设置 `comments: false` 来单独关闭页面评论

目前适配的评论系统：

- [giscus](https://giscus.app/)

自定义评论系统在：[layouts/partials/comments/provider/custom.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/comments/provider/custom.html)

### - 📜 短代码

Luna 主题支持大量的 Shortcodes，请查看：[Shortcodes](https://hugo-theme-luna.imiku.me/zh-cn/2022/05/02/shortcodes.html/)

### - 🔒 加密文章

我建议你使用两个仓库用来管理你的博客，一个私有用于存放博客的源代码，一个公开仓库用于启用 GitHub Pages，如果你需要使用文章加密功能，请一定不要把你的源代码放到公开的仓库上。

**加密功能请勿加密任何重要内容，请小心使用 `.RawContent` 等函数，以免暴露正文**

如果你没用使用 [GitHub Actions](https://github.com/features/actions)，并且你需要使用加密功能，请在每次生成网站之后，执行主题目录下的 [`hugo-encrypt.js`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/hugo-encrypt.js) 文件

````markdown
{{% hugo-encrypt 2022 %}}

这里是需要加密的内容

![加密图片测试](test.jpg)

{{% /hugo-encrypt %}}
````

## 📝 注意

如果你所在的国家或地区无法访问 GitHub，请不要使用这个模板文件，否则会出现错误。

博客内图片均使用了 Hugo 的 [Image Processing](https://gohugo.io/content-management/image-processing/) 功能，自动裁剪成合适的大小来优化页面加载速度，首次生成可能较为耗费时间。

搜索功能为了减少 json 文件的体积，去除了 shortcode 和代码块等内容，如果有需要，你可以在 [这里](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layout/_default/search.json) 修改它

如果文章过时提醒不遵循 Git 版本时间的话请设置 `git config --global core.quotepath false`，这是 Hugo 的[问题](https://github.com/gohugoio/hugo/issues/9810)，或许在未来的更新中会得到解决。

如果你开启了 pjax 并且使用了额外的 `<script>` 标签，请在标签上添加 `data-swup-reload-script` 属性，请查看：[https://swup.js.org/plugins/scripts-plugin](https://swup.js.org/plugins/scripts-plugin)

## 🐙 GitHub Action

将自动部署你的博客到公开仓库

复制主题根目录的 [`.github/workflows/main_example.yml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/.github/workflows/main_example.yml) 文件到你的博客 `.github/workflows` 目录

修改 `external_repository`, `user_name`, `user_email` 等字段

**注意：如果你需要启用加密功能，你需要有两个 GitHub 仓库，一个私有库用于存放源代码，一个公开仓库用于存放博客，`external_repository` 请设置为你博客的公开仓库**

如果你只有一个仓库，请修改 [`Deploy`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/.github/workflows/main_example.yml#L45) 脚本部分，参考：[actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

在 [https://github.com/settings/tokens](https://github.com/settings/tokens) 创建一个用于部署的 Token，保存该 Token

在 **github.com/{username}/{project}/settings/secrets/actions** 添加一个 `TOKEN` 字段，输入刚才生成的 token

## 🎨 自定义

如果你需要自定义主题，我建议你更改以下文件，而不是直接修改主题

- [custom.ts](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/assets/ts/custom.ts)
- [custom.scss](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/assets/sass/custom.scss)
- [custom/head.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/layouts/partials/custom/head.html)
- [custom/footer.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/layouts/partials/custom/footer.html)
- [custom/script.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/layouts/partials/custom/script.html)
- [custom/icons.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/custom/icons.html)

如果你不想修改主题文件，你可以在网站根目录创建一个同名的文件来修改它，例如：`myblog/layouts/partials/custom/head.html`

## 🛠️ 开发

```sh
git clone https://github.com/Ice-Hazymoon/hugo-theme-luna/
cd hugo-theme-luna
npm install
hugo server -s ./exampleSite -D --themesDir "../.."
```

## 📈 性能测试

> [https://imiku.me](https://imiku.me)
> 
> （关闭 pjax 和 katex 后）

| Lighthouse                                                                                                      | GTmetrix                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Lighthouse](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/lighthouse.png) | ![GTmetrix](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/gtmetrix.png) |

## 👏 致谢

- [Unsplash](https://unsplash.com/)
- [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even)
- [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack)
- [hugo-encrypt](https://github.com/Izumiko/hugo-encrypt)
- [Some shortcodes](https://guanqr.com/tech/website/hugo-shortcodes-customization)
- [Carousel component](https://codepen.io/onediv/details/VaQbrq)

## 📜 License

主题 使用 [GPL V3.0](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/LICENSE) 协议开源，请遵守此协议进行二次开发等。

您**必须在页脚保留 Luna 主题的名称及其链接**，否则请不要使用该主题。
