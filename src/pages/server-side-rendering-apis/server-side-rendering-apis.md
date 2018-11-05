---
path: "/post/ssr-apis"
date: "2018-12-05"
tags: ["node", "server", "ssr", "rendering"]
summary: Get specific with how Gatsby should pre-render routes.
title: "Server-side Rendering APIs"
---

# What are SSR APIs?

While Gatsby pre-renders the site, there may be extra things you need to tell it to be able to render correctly. These functions act as hooks into that process to provide added behaviours where they're needed.

# Where do they live?

SSR APIs can be called by Gatsby so long as they are stored within the `gatsby-ssr.js` file at the root of the project.

Not all SSR APIs are useful. In fact, most sites will not need to apply them. Here's some of the common ones if you do need to.

## onRenderBody
Gatsby will do two passes over each page - one will work out the contents of each page's `<body>` and a second will provide that information to the renderers for the rest of the page. This can be useful if the contents affects the `<head>`, such as adding `<meta>` tags.

It gets passed several other functions such as `setHeadComponents` and `setBodyProps` to help get the data in the right place.

```js
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(...);
}
```

## replaceRenderer

The default Gatsby server renderer does a pretty good job at displaying pages as expected.

If there's something in your set up that manipulates React output (for example adding classes for styling), then the renderer will need to be replaced with something that knows how to do it.

It's unlikely this will need to be done manually. It is more useful to plugin developers who need to tap into the renderer themselves.

```js
exports.replaceRenderer = ({ bodyComponent }) => {
  return renderToString(bodyComponent);
};
```

## wrapPageElement

Sometimes it's useful to wrap the output in another component without having to do that across each individual page. This might be useful for something like analytics or even just some repeated UI like navigation.

The function gets passed information about the page element being generated at the time so it can be included in the wrapped component.

```js
export const wrapPageElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>;
};
```

# Where can I find out about the rest?

The full reference of all SSR APIs is on the [Gatsby site][ssr apis reference].

[ssr apis reference]: https://www.gatsbyjs.org/docs/ssr-apis/
