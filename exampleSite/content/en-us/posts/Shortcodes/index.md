---
title: "Shortcodes"
date: 2022-05-02T13:12:47+02:00
slug: shortcodes
draft: false
toc: true
summary: Some shortcode examples
tags:
  - Shortcodes
  - Hugo
categories:
  - Luna
---

## Abbr

```markdown
{{</* abbr "MIT" "Massachusetts Institute of Technology" */>}}
```

{{< abbr "MIT" "Massachusetts Institute of Technology" >}}

## Color text

```markdown
{{</* color "red" "red text" */>}}
{{</* color "green" "green text" */>}}
{{</* color "blue" "blue text" */>}}
{{</* color "orange" "orange text" */>}}
{{</* color "theme" "theme text" */>}}
{{</* color "#a811ff" "custom color text" */>}}
```

{{< color "red" "red text" >}}  
{{< color "green" "green text" >}}  
{{< color "blue" "blue text" >}}  
{{< color "orange" "orange text" >}}  
{{< color "theme" "theme text" >}}  
{{< color "#a811ff" "custom color text" >}}

## Button

```markdown
{{</* button content="Small" size="small" */>}}
{{</* button content="Normal" size="normal" */>}}
{{</* button content="Large" size="large" */>}}

{{</* button color="theme" icon="eva eva-heart" content="Theme Button" link="https://google.com" */>}}
{{</* button color="red" icon="eva eva-home" content="Red Button" link="https://google.com" */>}}
{{</* button color="green" icon="eva eva-twitter" content="Green Button" link="https://google.com" */>}}
{{</* button color="blue" icon="eva eva-github" content="Blue Button" link="https://google.com" */>}}
{{</* button color="orange" icon="eva eva-search" content="Orange Button" link="https://google.com" */>}}

{{</* button-outline color="theme" icon="eva eva-heart" content="Theme button" link="https://google.com" */>}}
{{</* button-outline color="red" icon="eva eva-home" content="Red Button" link="https://google.com" */>}}
{{</* button-outline color="green" icon="eva eva-twitter" content="Green Button" link="https://google.com" */>}}
{{</* button-outline color="blue" icon="eva eva-github" content="Blue Button" link="https://google.com" */>}}
{{</* button-outline color="orange" icon="eva eva-search" content="Orange Button" link="https://google.com" */>}}
```

<div style="font-size: 0;">
{{< button content="Small" size="small" >}}
{{< button content="Normal" size="normal" >}}
{{< button content="Large" size="large" >}}

{{< button color="theme" icon="eva eva-heart" content="Theme Button" link="https://google.com" >}}
{{< button color="red" icon="eva eva-home" content="Red Button" link="https://google.com" >}}
{{< button color="green" icon="eva eva-twitter" content="Green Button" link="https://google.com" >}}
{{< button color="blue" icon="eva eva-github" content="Blue Button" link="https://google.com" >}}
{{< button color="orange" icon="eva eva-search" content="Orange Button" link="https://google.com" >}}

{{< button-outline color="theme" icon="eva eva-heart" content="Theme Button" link="https://google.com" >}}
{{< button-outline color="red" icon="eva eva-home" content="Red Button" link="https://google.com" >}}
{{< button-outline color="green" icon="eva eva-twitter" content="Green Button" link="https://google.com" >}}
{{< button-outline color="blue" icon="eva eva-github" content="Blue Button" link="https://google.com" >}}
{{< button-outline color="orange" icon="eva eva-search" content="Orange Button" link="https://google.com" >}}
</div>

## Text layout

```markdown
{{</* align left "Text left" */>}}

{{</* align center "Text center" */>}}

{{</* align right "Text right" */>}}
```

{{< align left "Text left" >}}

{{< align center "Text center" >}}

{{< align right "Text right" >}}

## GitHub

```markdown
{{</* github name="gohugoio/hugo" link="https://github.com/gohugoio/hugo" description="The world’s fastest framework for building websites." color="#00ADD8" language="Go" */>}}
```

{{< github name="gohugoio/hugo" link="https://github.com/gohugoio/hugo" description="The world’s fastest framework for building websites." color="#00ADD8" language="Go" >}}

## GitHub Auto

```markdown
{{</* github-auto name="Ice-Hazymoon/hugo-theme-luna" */>}}
```

{{< github-auto name="Ice-Hazymoon/hugo-theme-luna" >}}

## Notice

```markdown
{{</* notice warn */>}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{</* /notice */>}}

{{</* notice error */>}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{</* /notice */>}}

{{</* notice info */>}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{</* /notice */>}}

{{</* notice success */>}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{</* /notice */>}}
```

{{< notice warn >}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{< /notice >}}

{{< notice error >}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{< /notice >}}

{{< notice info >}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{< /notice >}}

{{< notice success >}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{< /notice >}}

## Quote

```markdown
{{</* quote */>}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{</* /quote */>}}
```

{{< quote >}}
Let life be beautiful like summer flowers and death like autumn leaves.
{{< /quote >}}

## Quote Center

```markdown
{{</* quote-center */>}}
The curfew tolls the knell of parting day,  
The lowing herd wind slowly o'er the lea  
The ploughman homeward plods his weary way,  
And leaves the world to darkness and to me.
{{</* /quote-center */>}}
```

{{< quote-center >}}
The curfew tolls the knell of parting day,  
The lowing herd wind slowly o'er the lea  
The ploughman homeward plods his weary way,  
And leaves the world to darkness and to me.
{{< /quote-center >}}

## Tags

```markdown
This is a {{</* tag theme "theme tag" */>}}  
This is a {{</* tag red "red tag" */>}}  
This is a {{</* tag green "green tag" */>}}  
This is a {{</* tag blue "blue tag" */>}}  
This is a {{</* tag orange "orange tag" */>}}  

This is a {{</* tag-outlined theme "theme tag" */>}}  
This is a {{</* tag-outlined red "red tag" */>}}  
This is a {{</* tag-outlined green "green tag" */>}}  
This is a {{</* tag-outlined blue "blue tag" */>}}  
This is a {{</* tag-outlined orange "orange tag" */>}}  
```

This is a {{< tag theme "theme tag" >}}  
This is a {{< tag red "red tag" >}}  
This is a {{< tag green "green tag" >}}  
This is a {{< tag blue "blue tag" >}}  
This is a {{< tag orange "orange tag" >}}  

This is a {{< tag-outlined theme "theme tag" >}}  
This is a {{< tag-outlined red "red tag" >}}  
This is a {{< tag-outlined green "green tag" >}}  
This is a {{< tag-outlined blue "blue tag" >}}  
This is a {{< tag-outlined orange "orange tag" >}}  

## Progress bar

```markdown
{{</* progress 999.99 theme "Name of progress bar" */>}}
{{</* progress 80 green "Name of progress bar" */>}}
{{</* progress 77.54 red "Name of progress bar" */>}}
{{</* progress 123.45 blue "Name of progress bar" */>}}
{{</* progress 11.11 orange "Name of progress bar" */>}}
```

{{< progress 999.99 theme "Name of progress bar" >}}
{{< progress 80 green "Name of progress bar" >}}
{{< progress 77.54 red "Name of progress bar" >}}
{{< progress 123.45 blue "Name of progress bar" >}}
{{< progress 11.11 orange "Name of progress bar" >}}

## Accordion

```markdown
{{</* accordion "Foods" open */>}}
* Vegetables
* Fruits
* Fish
{{</* /accordion */>}}
```

{{< accordion "Foods" open >}}
* Vegetables
* Fruits
* Fish
{{< /accordion >}}

## Divided Line

```markdown
{{</* hr "some text" */>}}
```

{{< hr "some text" >}}

## Hidden Text

```markdown
This is a {{</* hidden-text "Hide text" blur */>}}

This is a {{</* hidden-text "Hide text" */>}}
```

This is a {{< hidden-text "Hide text" blur >}}

This is a {{< hidden-text "Hide text" >}}


```markdown
{{</* hidden blur */>}}
> This is a hidden block
{{</* /hidden */>}}

{{</* hidden */>}}
* Vegetables
* Fruits
* Fish
{{</* /hidden */>}}
```

{{< hidden blur >}}
> This is a hidden block
{{< /hidden >}}

{{< hidden >}}
* Vegetables
* Fruits
* Fish
{{< /hidden >}}

## Rating

```markdown
The paella dish I rate {{</* rating 10 6*/>}}
```

The paella dish I rate {{< rating 10 6 >}}

## Links Card

```markdown
{{</* link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" img="https://repository-images.githubusercontent.com/486781027/dc31a9ab-66d1-49b8-a225-4f85f2329f2e" */>}}

{{</* link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" */>}}
```

{{< link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" img="https://repository-images.githubusercontent.com/486781027/dc31a9ab-66d1-49b8-a225-4f85f2329f2e" >}}

{{< link-card name="hugo-theme-luna" desc="A simple, performance-first, SEO-friendly Hugo theme" link="https://github.com/Ice-Hazymoon/hugo-theme-luna" >}}

## Carousel

```markdown
{{</* carousel "https://unsplash.it/1920/1080/?random=1" "https://unsplash.it/1920/1080/?random=2" "https://unsplash.it/1920/1080/?random=3" "https://unsplash.it/1920/1080/?random=4" */>}}

{{</* carousel "4.jpg" "7.jpg" "9.jpg" */>}}
```

{{< carousel "https://unsplash.it/1920/1080/?random=1" "https://unsplash.it/1920/1080/?random=2" "https://unsplash.it/1920/1080/?random=3" "https://unsplash.it/1920/1080/?random=4" >}}

{{< carousel "1.jpg" "2.jpg" "3.jpg" >}}

## Timeline

```markdown
{{</* timeline "2018-01-01 Eat salada today" "2018-01-02 Eat paella today" "2018-01-03 Eat pizza today" */>}}
```

{{< timeline "2018-01-01 Eat salada today" "2018-01-02 Eat paella today" "2018-01-03 Eat pizza today" >}}

## Gallery

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

## Tabs

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
