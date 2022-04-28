---
title: "加密文章测试"
date: 2022-04-09T02:49:13+02:00
slug: Hugo-Encrypt
summary: "Hugo 文章加密测试"
---

## 加密文章测试

> 密码：**2022**

````markdown
{{%/* hugo-encrypt 2022 */%}}
### 这里是加密内容

test content

![加密图片测试](test.jpg)

```js
console.log('加密代码块测试');
```
{{%/* /hugo-encrypt */%}}
````

{{%hugo-encrypt 2022 %}}
### 这里是加密内容

test content

![加密图片测试](test.jpg)

```js
console.log('加密代码块测试');
```
{{%/hugo-encrypt %}}

***

## 多块测试

> 默认密码：**123456**

```markdown
{{%/*hugo-encrypt */%}}`这里是第二段密文`{{%/*/hugo-encrypt */%}}
```

{{%hugo-encrypt %}}`这里是第二段密文`{{%/hugo-encrypt %}}

小尾巴~
