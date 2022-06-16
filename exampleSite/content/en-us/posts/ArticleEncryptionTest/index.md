---
title: "Article Encryption Test"
date: 2022-04-09T02:49:13+02:00
slug: hugo-encrypt
summary: "This is a test article for encryption"
tags:
  - "Hugo"
---

## Hugo Encrypt

> password: **2022**

````markdown
{{%/* hugo-encrypt 2022 */%}}
![Night city](https://unsplash.it/1920/1080/?random=1)
{{%/* /hugo-encrypt */%}}
````

{{% hugo-encrypt 2022 %}}
![Night city](https://unsplash.it/1920/1080/?random=1)
{{% /hugo-encrypt %}}

***

## Multi-block encryption

> Default password: **123456**

```markdown
{{%/* hugo-encrypt */%}}`Here is the test content `{{%/* /hugo-encrypt */%}}
```

{{% hugo-encrypt %}}`Here is the test content `{{%/ hugo-encrypt %}}

End...