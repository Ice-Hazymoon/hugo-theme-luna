---
title: "Shortcodes"
date: 2022-05-02T13:12:47+02:00
slug: shortcodes
draft: false
toc: false
summary: Some shortcode examples
tags:
  - Shortcodes
  - Hugo
categories:
  - Luna
---

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
This is a {{</* tag red "red tag" */>}}  
This is a {{</* tag green "green tag" */>}}  
This is a {{</* tag blue "blue tag" */>}}  
This is a {{</* tag orange "orange tag" */>}}  

This is a {{</* tag-outlined red "red tag" */>}}  
This is a {{</* tag-outlined green "green tag" */>}}  
This is a {{</* tag-outlined blue "blue tag" */>}}  
This is a {{</* tag-outlined orange "orange tag" */>}}  
```

This is a {{< tag red "red tag" >}}  
This is a {{< tag green "green tag" >}}  
This is a {{< tag blue "blue tag" >}}  
This is a {{< tag orange "orange tag" >}}  

This is a {{< tag-outlined red "red tag" >}}  
This is a {{< tag-outlined green "green tag" >}}  
This is a {{< tag-outlined blue "blue tag" >}}  
This is a {{< tag-outlined orange "orange tag" >}}  

## Progress bar

```markdown
{{</* progress 80 green "Name of progress bar" */>}}
{{</* progress 77.54 red "Name of progress bar" */>}}
{{</* progress 123.45 blue "Name of progress bar" */>}}
{{</* progress 11.11 orange "Name of progress bar" */>}}
```

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
