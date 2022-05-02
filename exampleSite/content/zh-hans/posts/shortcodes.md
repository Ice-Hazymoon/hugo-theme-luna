---
title: "Shortcodes"
date: 2022-05-02T13:12:47+02:00
draft: false
toc: false
summary: 一些短代码示例
---

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
{{</* github name="Organic-Carbon-Estimating" link="https://github.com/guanqr/Organic-Carbon-Estimating" description="A program used in estimating organic carbon stocks in oceans. 计算指定海域的有机碳存量，包括颗粒有机碳与溶解有机碳，数据依赖于 NASA 中分辨率成像光谱仪 MODIS 遥感产品。" color="#e16737" language="MATLAB" */>}}
```

{{< github name="Organic-Carbon-Estimating" link="https://github.com/guanqr/Organic-Carbon-Estimating" description="A program used in estimating organic carbon stocks in oceans. 计算指定海域的有机碳存量，包括颗粒有机碳与溶解有机碳，数据依赖于 NASA 中分辨率成像光谱仪 MODIS 遥感产品。" color="#e16737" language="MATLAB" >}}

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
这是一个 {{</* tag red "红色标签" */>}}
这是一个 {{</* tag green "绿色标签" */>}}
这是一个 {{</* tag blue "蓝色标签" */>}}
这是一个 {{</* tag orange "橘色标签" */>}}

这是一个 {{</* tag-outlined red "红色标签" */>}}
这是一个 {{</* tag-outlined green "绿色标签" */>}}
这是一个 {{</* tag-outlined blue "蓝色标签" */>}}
这是一个 {{</* tag-outlined orange "橘色标签" */>}}
```

这是一个 {{< tag red "红色标签" >}}
这是一个 {{< tag green "绿色标签" >}}
这是一个 {{< tag blue "蓝色标签" >}}
这是一个 {{< tag orange "橘色标签" >}}

这是一个 {{< tag-outlined red "红色标签" >}}
这是一个 {{< tag-outlined green "绿色标签" >}}
这是一个 {{< tag-outlined blue "蓝色标签" >}}
这是一个 {{< tag-outlined orange "橘色标签" >}}

## 进度条

```markdown
{{</* progress 80 green "进度条名称" */>}}
{{</* progress 77.54 red "进度条名称" */>}}
{{</* progress 123.45 blue "进度条名称" */>}}
{{</* progress 11.11 orange "进度条名称" */>}}
```

{{< progress 80 green "进度条名称" >}}
{{< progress 77.54 red "进度条名称" >}}
{{< progress 123.45 blue "进度条名称" >}}
{{< progress 11.11 orange "进度条名称" >}}

## 折叠面板

```markdown
{{</* accordion "折叠面板" */>}}
* Vegetables
* Fruits
* Fish
{{</* /accordion */>}}
```

{{< accordion "折叠面板" >}}
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