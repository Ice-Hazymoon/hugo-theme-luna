<h1 align="center">Hugo Theme Luna</h1>

<h2 align="center"><i>A simple, performance-first, SEO-friendly Hugo theme</i></h2>

<p align="center">
  <img src="https://img.shields.io/badge/Hugo-0.97-green?style=for-the-badge&logo=hugo&logoColor=white" />
  <img src="https://img.shields.io/github/workflow/status/Ice-Hazymoon/hugo-theme-luna/CI?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/github/license/Ice-Hazymoon/hugo-theme-luna?style=for-the-badge" />
</p>

![Luna](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/luna-white.png)

[👉 Example](https://hugo-theme-luna.imiku.me) | [中文文档](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/README.zh.md)

![](https://img.shields.io/github/last-commit/Ice-Hazymoon/hugo-theme-luna?style=flat-square)
![](https://img.shields.io/github/languages/code-size/Ice-Hazymoon/hugo-theme-luna?style=flat-square)

## Introduction

- Using [Tailwindcss](https://tailwindcss.com)
- Custom Themes
- Dark mode
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

- **hugo-extended** >= 0.97.0
- **NodeJs**
- **postcss-cli**, Install using `npm install postcss-cli -g`

For more information about Hugo's functionality, check [official documentation of Hugo](https://gohugo.io/documentation/).

If you are using **Windows**, I recommend using [Scoop](https://scoop.sh/) to install Hugo:.

```bash
scoop install hugo-extended
```

### - Installation

```bash
git clone https://github.com/Ice-Hazymoon/hugo-theme-luna/ themes/hugo-theme-luna
```

There is a [`config.yaml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/exampleSite/config.yaml) file in the [`exampleSite`](https://github.com/Ice-Hazymoon/hugo-theme-luna/tree/main/exampleSite) directory, copy the file to your site directory and modify the contents.

### - Configuration

Please refer to the [`config.yaml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/exampleSite/config.yaml) file to configure your site

If you prefer to use toml, you can convert it [here](https://www.convertsimple.com/convert-yaml-to-toml)

If you need to use templates for **Twitter**, **GitHub**, **Search**, **Archives**, etc., you will need to create the corresponding files in the [content folder](https://github.com/Ice-Hazymoon/hugo-theme-luna/tree/main/exampleSite/content), see the [cantent folder](https://github.com/Ice-Hazymoon/hugo-theme-luna/tree/main/exampleSite/content)

If you want to add a **Links** page, you can refer to [this File](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/exampleSite/content/zh-hans/links/index.md)

You can find all available icons at [Eva icons](https://akveo.github.io/eva-icons)

You can set the post type to `type: status` to post a status

You can modify your website icons by adjusting the [assets/icon.png](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/assets/icon.png) file

### - Encryption

I suggest you use two repositories to manage your blog, a private repository for your blog's source code and a public repository for public files. If you need to use the post encryption feature, please make sure not to put your source code on the public repository.

**Do not encrypt any important content with the encryption function**

Please be careful with functions such as `.RawContent` to avoid exposing the body

If you're not using [GitHub Actions](https://github.com/features/actions) and you need to use encryption, run the [`hugo-encrypt.js`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/hugo-encrypt.js) script in the theme directory after each site generation

````markdown
{{% hugo-encrypt 2022 %}}

### Here is what needs to be encrypted

test content

![image test](test.jpg)

```js
console.log('some codes');
```
{{% /hugo-encrypt %}}
````

## Note:

The images in the blog use Hugo's [Image Processing](https://gohugo.io/content-management/image-processing/) feature, which automatically crops them to the right size to optimize page load speed, and can be time-consuming to generate the first time.

The local search function removes the shortcode and code blocks in order to reduce the size of the json file, but you can modify it [here](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/layouts/_default/search.json) if necessary

For the format of new articles, please follow the [`archetypes/default.md`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/archetypes/default.md) file

If you have pjax enabled and have added additional `<script>` tags, add the `data-swup-reload-script` attribute to the tags, see: [https://swup.js.org/plugins/scripts-plugin](https://swup.js.org/plugins/scripts-plugin)

## GitHub Action

> Automatically deploy your blog to public repositories

![image-20220426222913185](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/image-20220426222913185.png)

Copy the [`.github/workflows/main_example.yml`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/edf3a101a93e8e628b534636306fda5985cc1b32/.github/workflows/main_example.yml) file in the theme root directory to your blog's `.github/workflows` directory

Modify the `external_repository`, `user_name`, `user_email`, etc. fields in the [main_example.yml](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/.github/workflows/main_example.yml) file, see: [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

**Note: If you need to enable encryption, you need to have two GitHub repositories, a private repository for your source code and a public repository for your blog, `external_repository` should be set as the public repository for your blog**

If you only have one repository, modify the [`Deploy`](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/edf3a101a93e8e628b534636306fda5985cc1b32/.github/workflows/main_example.yml#L45) script section

Create a Token for deployment at [https://github.com/settings/tokens](https://github.com/settings/tokens), save the Token

Add a `TOKEN` field to **github.com/{username}/{project}/settings/secrets/actions** and enter the token you just generated

## 开发

```sh
git clone https://github.com/Ice-Hazymoon/hugo-theme-luna/
cd hugo-theme-luna
hugo server -s ./exampleSite -D --themesDir "../.."
```

## Screenshots

> [https://imiku.me](https://imiku.me)

### - Performance tests (with pjax and katex turned off)

| Lighthouse                                                                                                      | GTmetrix                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Lighthouse](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/image-20220427013052128.png) | ![GTmetrix](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/image-20220427013223319.png) |

### - Screenshots

| <p align="center">Home</p> ![Home](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059552132.png)                             | <p align="center">Home(Dark)</p> ![Home(dark)](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059730757.png)         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <p align="center">Tags</p> ![Tags](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651060185422.png)                             | <p align="center">Search</p> ![Search](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059518653.png)                 |
| <p align="center">Archives</p> ![Archives](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059387460.png)                     | <p align="center">Links</p> ![Links](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059430110.png)                   |
| <p align="center">Twitter</p> ![Twitter](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059453997.png)                       | <p align="center">GitHub</p> ![GitHub](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059484292.png)                 |
| <p align="center">Encrypted Articles</p> ![Encrypted Articles](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651060168715.png) | <p align="center">Gallery Layout</p> ![Gallery Layout](https://github.com/Ice-Hazymoon/hugo-theme-luna/raw/main/screenshots/screely-1651059672459.png) |

## Acknowledgements

- [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even)
- [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack)
- [hugo-encrypt](https://github.com/Izumiko/hugo-encrypt)

## License

The theme uses the [GPL V3.0](https://github.com/Ice-Hazymoon/hugo-theme-luna/blob/main/LICENSE) protocol open source, please comply with this agreement for secondary development and so on.
