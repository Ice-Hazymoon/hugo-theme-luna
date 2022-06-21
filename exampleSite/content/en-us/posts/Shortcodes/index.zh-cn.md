---
title: "短代码（Shortcodes）"
date: 2022-05-02T13:12:47+02:00
slug: shortcodes
draft: false
toc: true
summary: 一些短代码示例
tags:
  - Shortcodes
  - Hugo
categories:
  - Luna
---

## Abbr

```markdown
{{</* abbr "AWSL" "啊我死了" */>}}
```

{{< abbr "AWSL" "啊我死了" >}}

## 彩色文字

```markdown
{{</* color "red" "红色" */>}}
{{</* color "green" "绿色" */>}}
{{</* color "blue" "蓝色" */>}}
{{</* color "orange" "橙色" */>}}
{{</* color "theme" "主题色" */>}}
{{</* color "#a811ff" "自定义颜色" */>}}
```

{{< color "red" "红色" >}}  
{{< color "green" "绿色" >}}  
{{< color "blue" "蓝色" >}}  
{{< color "orange" "橙色" >}}  
{{< color "theme" "主题色" >}}  
{{< color "#a811ff" "自定义颜色" >}}

## 按钮

```markdown
{{</* button content="小按钮" size="small" */>}}
{{</* button content="普通按钮" size="normal" */>}}
{{</* button content="大按钮" size="large" */>}}

{{</* button color="theme" icon="eva eva-heart" content="主题色按钮" link="https://google.com" */>}}
{{</* button color="red" icon="eva eva-home" content="红色按钮" link="https://google.com" */>}}
{{</* button color="green" icon="eva eva-twitter" content="绿色按钮" link="https://google.com" */>}}
{{</* button color="blue" icon="eva eva-github" content="蓝色按钮" link="https://google.com" */>}}
{{</* button color="orange" icon="eva eva-search" content="橙色按钮" link="https://google.com" */>}}

{{</* button-outline color="theme" icon="eva eva-heart" content="主题色按钮" link="https://google.com" */>}}
{{</* button-outline color="red" icon="eva eva-home" content="红色按钮" link="https://google.com" */>}}
{{</* button-outline color="green" icon="eva eva-twitter" content="绿色按钮" link="https://google.com" */>}}
{{</* button-outline color="blue" icon="eva eva-github" content="蓝色按钮" link="https://google.com" */>}}
{{</* button-outline color="orange" icon="eva eva-search" content="橙色按钮" link="https://google.com" */>}}
```

<div style="font-size: 0;">
{{< button content="小按钮" size="small" >}}
{{< button content="普通按钮" size="normal" >}}
{{< button content="大按钮" size="large" >}}

{{< button color="theme" icon="eva eva-heart" content="主题色按钮" link="https://google.com" >}}
{{< button color="red" icon="eva eva-home" content="红色按钮" link="https://google.com" >}}
{{< button color="green" icon="eva eva-twitter" content="绿色按钮" link="https://google.com" >}}
{{< button color="blue" icon="eva eva-github" content="蓝色按钮" link="https://google.com" >}}
{{< button color="orange" icon="eva eva-search" content="橙色按钮" link="https://google.com" >}}

{{< button-outline color="theme" icon="eva eva-heart" content="主题色按钮" link="https://google.com" >}}
{{< button-outline color="red" icon="eva eva-home" content="红色按钮" link="https://google.com" >}}
{{< button-outline color="green" icon="eva eva-twitter" content="绿色按钮" link="https://google.com" >}}
{{< button-outline color="blue" icon="eva eva-github" content="蓝色按钮" link="https://google.com" >}}
{{< button-outline color="orange" icon="eva eva-search" content="橙色按钮" link="https://google.com" >}}
</div>

## 文字排版

```markdown
{{</* align left "文字居左" */>}}

{{</* align center "文字居中" */>}}

{{</* align right "文字居右" */>}}
```

{{< align left "文字居左" >}}

{{< align center "文字居中" >}}

{{< align right "文字居右" >}}

## GitHub

```markdown
{{</* github name="tailwindlabs/tailwindcss" link="https://github.com/tailwindlabs/tailwindcss" description="A utility-first CSS framework for rapid UI development." color="#f1e05a" language="JavaScript" */>}}
```

{{< github name="tailwindlabs/tailwindcss" link="https://github.com/tailwindlabs/tailwindcss" description="A utility-first CSS framework for rapid UI development." color="#f1e05a" language="JavaScript" >}}

## GitHub 自动获取

```markdown
{{</* github-auto name="Ice-Hazymoon/hugo-theme-luna" */>}}
```

{{< github-auto name="Ice-Hazymoon/hugo-theme-luna" >}}

## Notice

```markdown
{{</* notice warn */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}

{{</* notice error */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}

{{</* notice info */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}

{{</* notice success */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /notice */>}}
```

{{< notice warn >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

{{< notice error >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

{{< notice info >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

{{< notice success >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /notice >}}

## 引用

```markdown
{{</* quote */>}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{</* /quote */>}}
```

{{< quote >}}
十里青山远，潮平路带沙。数声啼鸟怨年华。又是凄凉时候，在天涯。白露收残月，清风散晓霞。绿杨堤畔问荷花。记得年时沽酒，那人家。
{{< /quote >}}

## 居中引用

```markdown
{{</* quote-center */>}}
十里青山远，潮平路带沙  
数声啼鸟怨年华  
又是凄凉时候，在天涯  
白露收残月，清风散晓霞  
绿杨堤畔问荷花  
记得年时沽酒，那人家
{{</* /quote-center */>}}
```

{{< quote-center >}}
十里青山远，潮平路带沙  
数声啼鸟怨年华  
又是凄凉时候，在天涯  
白露收残月，清风散晓霞  
绿杨堤畔问荷花  
记得年时沽酒，那人家
{{< /quote-center >}}

## 标签

```markdown
这是一个 {{</* tag theme "主题色标签" */>}}  
这是一个 {{</* tag red "红色标签" */>}}  
这是一个 {{</* tag green "绿色标签" */>}}  
这是一个 {{</* tag blue "蓝色标签" */>}}  
这是一个 {{</* tag orange "橘色标签" */>}}  

这是一个 {{</* tag-outlined theme "主题色标签" */>}}  
这是一个 {{</* tag-outlined red "红色标签" */>}}  
这是一个 {{</* tag-outlined green "绿色标签" */>}}  
这是一个 {{</* tag-outlined blue "蓝色标签" */>}}  
这是一个 {{</* tag-outlined orange "橘色标签" */>}}  
```

这是一个 {{< tag theme "主题色标签" >}}  
这是一个 {{< tag red "红色标签" >}}  
这是一个 {{< tag green "绿色标签" >}}  
这是一个 {{< tag blue "蓝色标签" >}}  
这是一个 {{< tag orange "橘色标签" >}}  

这是一个 {{< tag-outlined theme "主题色标签" >}}  
这是一个 {{< tag-outlined red "红色标签" >}}  
这是一个 {{< tag-outlined green "绿色标签" >}}  
这是一个 {{< tag-outlined blue "蓝色标签" >}}  
这是一个 {{< tag-outlined orange "橘色标签" >}}  

## 进度条

```markdown
{{</* progress 999.99 theme "进度条名称" */>}}
{{</* progress 80 green "进度条名称" */>}}
{{</* progress 77.54 red "进度条名称" */>}}
{{</* progress 123.45 blue "进度条名称" */>}}
{{</* progress 11.11 orange "进度条名称" */>}}
```

{{< progress 999.99 theme "进度条名称" >}}
{{< progress 80 green "进度条名称" >}}
{{< progress 77.54 red "进度条名称" >}}
{{< progress 123.45 blue "进度条名称" >}}
{{< progress 11.11 orange "进度条名称" >}}

## 折叠面板

```markdown
{{</* accordion "折叠面板" open */>}}
* Vegetables
* Fruits
* Fish
{{</* /accordion */>}}
```

{{< accordion "折叠面板" open >}}
* Vegetables
* Fruits
* Fish
{{< /accordion >}}

## 分割线

```markdown
{{</* hr "分割线" */>}}
```

{{< hr "分割线" >}}

## 隐藏文字

```markdown
这是一段 {{</* hidden-text "隐藏文字" blur */>}}

这是一段 {{</* hidden-text "隐藏文字" */>}}
```

这是一段 {{< hidden-text "隐藏文字" blur >}}

这是一段 {{< hidden-text "隐藏文字" >}}


```markdown
{{</* hidden blur */>}}
> 这是一个隐藏块
{{</* /hidden */>}}

{{</* hidden */>}}
* Vegetables
* Fruits
* Fish
{{</* /hidden */>}}
```

{{< hidden blur >}}
> 这是一个隐藏块
{{< /hidden >}}

{{< hidden >}}
* Vegetables
* Fruits
* Fish
{{< /hidden >}}

## 评分

```markdown
我对海鲜饭的评价 {{</* rating 10 6*/>}}
```

我对海鲜饭的评价 {{< rating 10 6 >}}

## 卡片链接

```markdown
{{</* link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" img="https://repository-images.githubusercontent.com/486781027/dc31a9ab-66d1-49b8-a225-4f85f2329f2e" */>}}

{{</* link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" */>}}
```

{{< link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" img="https://repository-images.githubusercontent.com/486781027/dc31a9ab-66d1-49b8-a225-4f85f2329f2e" >}}

{{< link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" >}}

## 轮播图

```markdown
{{</* carousel "https://unsplash.it/1920/1080/?random=1" "https://unsplash.it/1920/1080/?random=2" "https://unsplash.it/1920/1080/?random=3" "https://unsplash.it/1920/1080/?random=4" */>}}

{{</* carousel "4.jpg" "7.jpg" "9.jpg" */>}}
```

{{< carousel "https://unsplash.it/1920/1080/?random=1" "https://unsplash.it/1920/1080/?random=2" "https://unsplash.it/1920/1080/?random=3" "https://unsplash.it/1920/1080/?random=4" >}}

{{< carousel "1.jpg" "2.jpg" "3.jpg" >}}

## 时间轴

```markdown
{{</* timeline "2018年01月01日 今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面" "2018年01月02日 今天吃火锅" "2018年01月03日 今天吃麻辣烫" */>}}
```

{{< timeline "2018年01月01日 今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面今天吃泡面" "2018年01月02日 今天吃火锅" "2018年01月03日 今天吃麻辣烫" >}}

## 画廊排版

```markdown
{{</* gallery */>}}
![](1.jpg)
![](2.jpg)
![](3.jpg)

![](2.jpg)
![](3.jpg)
![](1.jpg)
{{</* /gallery */>}}
```

{{< gallery >}}
![](1.jpg)
![](2.jpg)
![](3.jpg)

![](2.jpg)
![](3.jpg)
![](1.jpg)
{{< /gallery >}}

## 选项卡

```markdown
{{</* tab-view */>}}

{{</* tab-panel name="中文" checked=true */>}}
百合花（学名：Lilium）通称百合花，是百合目百合科的一属，为多年生草本球根植物，属内物种繁多，经常作为观赏植物。主要分布在亚洲东部、欧洲、北美洲等北半球温带地区，全球已发现有至少96个品种，其中5种产于台湾。近年更有不少经过人工杂交而产生的新品种，如OT百合、东方型百合、玫瑰百合等。百合属对猫来说有剧毒。
{{</* /tab-panel */>}}

{{</* tab-panel name="English" */>}}
Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world. Most species are native to the northern hemisphere and their range is temperate climates and extends into the subtropics. Many other plants have "lily" in their common names, but do not belong to the same genus and are therefore not true lilies.
{{</* /tab-panel */>}}

{{</* tab-panel name="Español" */>}}
Las especies de Lilium, comúnmente llamadas azucenas o lirios, constituyen un género con alrededor de 110 integrantes que se incluye dentro de la familia de las liliáceas. Los lirios son herbáceas perennes de tallos erectos con numerosas hojas alternas, lineares a lance balas. Crecen a partir de bulbos formados por capas de escamas carnosas sin túnica.
{{</* /tab-panel */>}}

{{</* /tab-view */>}}
```

{{< tab-view >}}

{{< tab-panel name="中文" checked=true >}}
百合花（学名：Lilium）通称百合花，是百合目百合科的一属，为多年生草本球根植物，属内物种繁多，经常作为观赏植物。主要分布在亚洲东部、欧洲、北美洲等北半球温带地区，全球已发现有至少96个品种，其中5种产于台湾。近年更有不少经过人工杂交而产生的新品种，如OT百合、东方型百合、玫瑰百合等。百合属对猫来说有剧毒。
{{< /tab-panel >}}

{{< tab-panel name="English" >}}
Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world. Most species are native to the northern hemisphere and their range is temperate climates and extends into the subtropics. Many other plants have "lily" in their common names, but do not belong to the same genus and are therefore not true lilies.
{{< /tab-panel >}}

{{< tab-panel name="Español" >}}
Las especies de Lilium, comúnmente llamadas azucenas o lirios, constituyen un género con alrededor de 110 integrantes que se incluye dentro de la familia de las liliáceas. Los lirios son herbáceas perennes de tallos erectos con numerosas hojas alternas, lineares a lance balas. Crecen a partir de bulbos formados por capas de escamas carnosas sin túnica.
{{< /tab-panel >}}

{{< /tab-view >}}
