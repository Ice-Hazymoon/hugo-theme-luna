<h1 align="center">Hugo Theme Luna</h1>

<h3 align="center"><i>A simple, performance-first, SEO-friendly Hugo theme</i></h3>

<p align="center">
  <a href="https://github.com/gohugoio/hugo" target="_blank"><img src="https://img.shields.io/badge/Hugo-≥0.97-green?style=for-the-badge&logo=hugo&logoColor=white" /></a>
  <!-- <a href="https://github.com/Ice-Hazymoon/hugo-theme-luna/actions/workflows/main.yml" target="_blank"><img src="https://img.shields.io/github/workflow/status/Ice-Hazymoon/hugo-theme-luna/CI?style=for-the-badge&logo=github&logoColor=white" /></a> -->
  <a href="https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Ice-Hazymoon/hugo-theme-luna?style=for-the-badge" /></a>
</p>

![Luna](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/luna.png)

[👉 Example](https://hugo-theme-luna.imiku.me) | [中文文档](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/README.zh.md)

![](https://img.shields.io/github/last-commit/Ice-Hazymoon/hugo-theme-luna?style=flat-square) ![](https://img.shields.io/github/languages/code-size/Ice-Hazymoon/hugo-theme-luna?style=flat-square)

<details open>
<summary>Table of Contents</summary>

- [Introduction](#introduction)
- [Usage](#usage)
  - [- Requirements](#--requirements)
  - [- Install as git submodule](#--install-as-git-submodule)
  - [- Update theme](#--update-theme)
  - [- Configuration](#--configuration)
  - [- Comments](#--comments)
  - [- Shortcodes](#--shortcodes)
  - [- Encryption](#--encryption)
- [Note:](#note)
- [GitHub Action](#github-action)
- [Custom](#custom)
- [Development](#development)
- [Screenshots](#screenshots)
  - [- Performance tests (with pjax and katex turned off)](#--performance-tests-with-pjax-and-katex-turned-off)
  - [- Screenshots](#--screenshots)
- [Acknowledgements](#acknowledgements)
- [License](#license)
</details>

## Introduction

- Using [Tailwindcss](https://tailwindcss.com)
- Dynamic import of JS modules、
- LaTeX, use [KaTeX](https://katex.org/)
- Custom Themes and Fonts
- Carousel
- Many [shortcodes](https://hugo-theme-luna.imiku.me/2022/05/02/shortcodes.html/)
- Dark mode
- [Bionic Reading](https://bionic-reading.com/) 
- Image gallery
- Responsive images
- Article encryption (please do not encrypt important content under any circumstances)
- Multilingual
- Google Translate
- PWA
- Pjax, use [swup.js](https://swup.js.org/)
- Lazy load images
- \<noscript\>
- Table of contents
- Local search, use [flexsearch](https://github.com/nextapps-de/flexsearch)
- Twitter page template
- GitHub page template
- Archive page template
- [GitHub Actions](https://github.com/features/actions)
- and more......

## Usage

### - Requirements

- **hugo-extended** >= 0.104.0
- **NodeJs** >= 16.0.0
- **postcss-cli**, Install using `npm install postcss-cli -g`

For more information about Hugo's functionality, check [documentation of Hugo](https://gohugo.io/documentation/).

### - Install as git submodule

```bash
git submodule add -b master https://github.com/Ice-Hazymoon/hugo-theme-luna themes/hugo-theme-luna
cd themes/hugo-theme-luna
npm install --production
```

There is a [`config.yaml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/config.yaml) file in the [`exampleSite`](https://github.com/Ice-Hazymoon/hugo-theme-luna/tree/main/exampleSite) directory, copy the file to your site directory and modify the contents.

### - Update theme

```bash
git submodule update --remote
```

### - Configuration

See [`config.yaml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/config.yaml) file to configure your site

If you prefer to use toml, you can convert it [here](https://www.convertsimple.com/convert-yaml-to-toml)

You can find all available icons at [Eva icons](https://akveo.github.io/eva-icons)

You can create your website icons by adjusting the [assets/icon.png](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/exampleSite/assets/icon.png) file

### - Comments

You can set `comments: false` to turn off comments for some pages

Comment system provider. Available options:

- [giscus](https://giscus.app/)

Custom comments at [layouts/partials/comments/provider/custom.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/comments/provider/custom.html)

### - Shortcodes

The luna theme supports many shortcodes, see: [Shortcodes](https://hugo-theme-luna.imiku.me/2022/05/02/shortcodes.html/)

### - Encryption

**Do not encrypt any important content with the encryption function**

Please be careful with functions such as `.RawContent` to avoid exposing the body

If you're not using [GitHub Actions](https://github.com/features/actions) and you need to use encryption, run the [`hugo-encrypt.js`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/hugo-encrypt.js) script in the theme directory after each site generation

````markdown
{{% hugo-encrypt 2022 %}}

Here is what needs to be encrypted

![some text](test.jpg)

{{% /hugo-encrypt %}}
````

## Note:

The images in the blog use Hugo's [Image Processing](https://gohugo.io/content-management/image-processing/) feature, which automatically crops them to the right size to optimize page load speed, and can be time-consuming to generate the first time.

The local search function removes the shortcode and code blocks in order to reduce the size of the json file, but you can modify it [here](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/_default/search.json) if necessary

If you have pjax enabled and have added additional `<script>` tags, add the `data-swup-reload-script` attribute to the tags, see: [https://swup.js.org/plugins/scripts-plugin](https://swup.js.org/plugins/scripts-plugin)

## GitHub Action

Copy the [`.github/workflows/main_example.yml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/.github/workflows/main_example.yml) file in the theme root directory to your blog's `.github/workflows` directory

Modify the `external_repository`, `user_name`, `user_email`, etc. fields in the [main_example.yml](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/.github/workflows/main_example.yml) file, see: [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

**Note: If you need to enable encryption, you need to have two GitHub repositories, a private repository for your source code and a public repository for your blog, `external_repository` should be set as the public repository for your blog**

If you only have one repository, modify the [`Deploy`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/.github/workflows/main_example.yml#L45) script section

Create a Token for deployment at [https://github.com/settings/tokens](https://github.com/settings/tokens), save the Token

Add a `TOKEN` field to **github.com/{username}/{project}/settings/secrets/actions** and enter the token you just generated

## Custom

- [custom.ts](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/assets/ts/custom.ts)
- [custom.scss](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/assets/sass/custom.scss)
- [custom/head.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/custom/head.html)
- [custom/footer.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/custom/footer.html)
- [custom/script.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/custom/script.html)
- [custom/icons.html](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/layouts/partials/custom/icons.html)

If you don't want to modify the theme file, you can create a file with the same name in the root of your website to modify it, e.g. `myblog/layouts/partials/custom/head.html`

## Development

```sh
git clone https://github.com/Ice-Hazymoon/hugo-theme-luna/
cd hugo-theme-luna
npm install
hugo server -s ./exampleSite -D --themesDir "../.."
```

## Screenshots

> [https://imiku.me](https://imiku.me)

### - Performance tests (with pjax and katex turned off)

| Lighthouse                                                                                                      | GTmetrix                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Lighthouse](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/lighthouse.png) | ![GTmetrix](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/gtmetrix.png) |

### - Screenshots

| <p align="center">Home</p> ![Home](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-home.png)                             | <p align="center">Home(Dark)</p> ![Home(dark)](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-home-dark.png)         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <p align="center">Archives</p> ![Archives](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-archives.png)                     | <p align="center">Links</p> ![Links](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-links.png)                   |
| <p align="center">Twitter</p> ![Twitter](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-twitter.png)                       | <p align="center">GitHub</p> ![GitHub](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-github.png)                 |
| <p align="center">Search</p> ![Search](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-search.png) | <p align="center">Gallery</p> ![Gallery](https://raw.githubusercontent.com/Ice-Hazymoon/hugo-theme-luna/master/screenshots/screen-gallery.png) |

## Acknowledgements

- [Unsplash](https://unsplash.com/)
- [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even)
- [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack)
- [hugo-encrypt](https://github.com/Izumiko/hugo-encrypt)
- [Some shortcodes](https://guanqr.com/tech/website/hugo-shortcodes-customization)
- [Carousel component](https://codepen.io/onediv/details/VaQbrq)

## License

The theme uses the [GPL V3.0](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/master/LICENSE) protocol open source, please comply with this agreement for secondary development and so on.
