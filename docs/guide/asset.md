
## 根 URL {#base-url}

如果站点没有部署在根 URL 上，则需要在 `.vitepress/config.js` 中设置 `base` 选项。例如，如果计划将站点部署到 `https://foo.github.io/bar/`，则 `base` 应设置为 `'/bar/'`(它应始终以斜杠开头和结尾)。

所有静态资源路径都会被自动处理，来适应不同的 `base` 配置值。例如，如果 markdown 中有一个对 `public` 中的资源的绝对引用：

```md
![An image](/img/navbar.svg)
```

![An image](/img/navbar.svg)

## 普通路径

自动处理的相对路径，可以直接根据当前路径直接设置

```md
![](assets/navbar.svg)
```

![](assets/navbar.svg)