---
title: "中文排版测试"
date: 2022-04-15T02:49:13+02:00
slug: typography
featured_image: cover.jpg
tags:
  - 中文
refs:
  - link: https://unsplash.com/
---

## 中文文章排版实例：论语学而篇第一

<!--more-->

**作者：** 孔子（ 前551年9月28日－前479年4月11日 ）

### 本篇引语

《学而》是《论语》第一篇的篇名。 **《论语》** 中各篇一般都是以第一章的前二三个字作为该~~篇的篇名~~。《学而》一篇包括16章，内容涉及诸多方面。其中重点是「吾日三省吾身」；「节用而爱人，使民以时」；「礼之用，和为贵」以及仁、孝、信等道德范畴。

### 原文

子曰：*「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知，而不愠，不亦君子乎？」*

### 译文

孔子说：「学了又时常温习和练习，不是很愉快吗？有志同道合的人从远方来，`inline code` 不是很令人高兴的吗？人家不了解我，我也不怨恨、恼怒，不也是一个有德的君子吗？」

### 评析

宋代著名学者朱熹对此章评价极高，说它是 **「入道之门，积德之基」** 。本章这三句话是人们非常熟悉的。历来的解释都是：学了以后，又时常温习和练习，不也高兴吗等等。三句话，一句一个意思，前后句子也没有什么连贯性。但也有人认为这样解释不符合原义，指出这里的「学」不是指学习，而是指学说或主张；~~「时」不能解为时常，而是时代或社会的意思~~，「习」不是温习，而是使用，引申为采用。而且，这三句话不是孤立的，而是前后相互连贯的。这三句的意思是：自己的学说，要是被社会采用了，那就太高兴了；退一步说，要是没有被社会所采用，可是很多朋友赞同我的学说，纷纷到我这里来讨论问题，我也感到快乐；再退一步说，即使社会不采用，人们也不理解我，我也不怨恨，这样做，不也就是君子吗？（见[《齐鲁学刊》](https://baike.baidu.com/item/%E9%BD%90%E9%B2%81%E5%AD%A6%E5%88%8A/10666044)1986年第6期文）这种解释可以`自圆其说`，而且也有一定的道理，供读者在理解本章内容时参考。

此外，在对「[人不知，而不愠](https://baike.baidu.com/item/%E4%BA%BA%E4%B8%8D%E7%9F%A5%E8%80%8C%E4%B8%8D%E6%84%A0%EF%BC%8C%E4%B8%8D%E4%BA%A6%E5%90%9B%E5%AD%90%E4%B9%8E/2867323)」一句的解释中，也有人认为，「人不知」的后面没有宾语，人家不知道什么呢？当时因为孔子有说话的特定环境，他不需要说出知道什么，别人就可以理解了，却给后人留下一个谜。有人说，这一句是接上一句说的，从远方来的朋友向我求教，我告诉他，他还不懂，我却不怨恨。这样，「人不知」就是「人家不知道我所讲述的」了。这样的解释似乎有些牵强。

总之，本章提出以学习为乐事，做到人不知而不愠，反映出孔子学而不厌、诲人不倦、注重修养、严格要求自己的主张。这些思想主张在《论语》书中多处可见，有助于对第一章内容的深入了解。

## 表格

| Wrestler                | Origin       | Finisher           |
| ----------------------- | ------------ | ------------------ |
| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter       |
| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |
| Randy Savage            | Sarasota, FL | Elbow Drop         |
| Vader                   | Boulder, CO  | Vader Bomb         |
| Razor Ramon             | Chuluota, FL | Razor's Edge       |

## 代码块

```go  {linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
```

## 列表

1. **Nested lists are rarely a good idea.**
   - You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.
   - Nested navigation in UIs is a bad idea too, keep things as flat as possible.
   - Nesting tons of folders in your source code is also not helpful.
2. **Since we need to have more items, here's another one.**
   - I'm not sure if we'll bother styling more than two levels deep.
   - Two is already too much, three is guaranteed to be a bad idea.
   - If you nest four levels deep you belong in prison.
3. **Two items isn't really a list, three is good though.**
   - Again please don't nest lists if you want people to actually read your content.
   - Nobody wants to look at this.
   - I'm upset that we even have to bother styling this.

***

- If you wish to succeed, you should use persistence as your good friend, experience as your reference, prudence as your brother and hope as your sentry.</br>
  如果你希望成功，当以恒心为良友，以经验为参谋，以谨慎为兄弟，以希望为哨兵。  
- Sometimes one pays most for the things one gets for nothing.  </br>
  有时候一个人为不花钱得到的东西付出的代价最高。
- Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.  </br>
  只有有耐心圆满完成简单工作的人，才能够轻而易举的完成困难的事。

## 引用

> 　　我想：我同赵贵翁有什么仇，同路上的人又有什么仇；只有廿年以前，把古久先生的陈年流水簿子⑶，踹了一脚，古久先生很不高兴。赵贵翁虽然不认识他，一定也听到风声，代抱不平；约定路上的人，同我作冤对。但是小孩子呢？那时候，他们还没有出世，何以今天也睁着怪眼睛，似乎怕我，似乎想害我。这真教我怕，教我纳罕而且伤心。

### 套娃引用

> ## 呐喊
> 
> 题作呐喊，就是为革命者助战振威。呐喊中的小说，以振聋发聩的气势，揭示了中国的社会面貌，控诉了封建制度的罪恶，喊出了五四时期革命者的心声。
> 
> > 我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？ —— 鲁迅
> > > 使劲套娃

## 数学公式

```TeX
这是一条行内公式：$ E={\sqrt  {p^{2}c^{2}+m^{2}c^{4}}}=\gamma mc^{2} $

$ E={\sqrt  {p^{2}c^{2}+m^{2}c^{4}}}=\gamma mc^{2} $

$$ E_{0}=mc^{2} $$

\\[3 < 4\\]

\begin{align}
    p(v_i=1|\mathbf{h}) & = \sigma\left(\sum_j w_{ij}h_j + b_i\right) \\
    p(h_j=1|\mathbf{v}) & = \sigma\left(\sum_i w_{ij}v_i + c_j\right)
\end{align}
```

这是一条行内公式：$ E={\sqrt  {p^{2}c^{2}+m^{2}c^{4}}}=\gamma mc^{2} $

$$ E_{0}=mc^{2} $$

\\[3 < 4\\]

\begin{align}
    \nonumber p(v_i=1|\mathbf{h}) & = \sigma\left(\sum_j w_{ij}h_j + b_i\right) \\
    p(h_j=1|\mathbf{v}) & = \sigma\left(\sum_i w_{ij}v_i + c_j\right)
\end{align}
