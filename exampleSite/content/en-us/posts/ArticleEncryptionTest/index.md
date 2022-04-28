---
title: "Article Encryption Test"
date: 2022-04-09T02:49:13+02:00
summary: "This is a test article for encryption"
---

## Hugo Encrypt

> password: **2022**

````markdown
{{%/* hugo-encrypt 2022 */%}}
### Here is the encrypted content

test content

![Night city](test.jpg)

```js
console.log('some codes');
```
{{%/* /hugo-encrypt */%}}
````

{{% hugo-encrypt 2022 %}}
### Here is the encrypted content

test content

![Night city](test.jpg)

```js
console.log('some codes');
```
{{% /hugo-encrypt %}}

***

## Multi-block encryption

> Default password: **123456**

```markdown
{{%/* hugo-encrypt */%}}`Here is the test content `{{%/* /hugo-encrypt */%}}
```

{{% hugo-encrypt %}}`Here is the test content `{{%/ hugo-encrypt %}}

End...