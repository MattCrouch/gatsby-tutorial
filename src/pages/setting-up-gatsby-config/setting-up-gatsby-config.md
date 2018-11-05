---
path: /post/setting-up-gatsby-config
date: 2018-12-02
tags: [config, js, bootstrapping]
summary: Configuration doesn't have to be tricky.
title: Setting up Gatsby config
---

# Where does Gatsby get configured?

Everything that makes your Gatsby setup unique will pass through `gatsby-config.js`. As long as it's placed at the root of your project, it will be picked up automatically.

```js
module.exports = {
  // setup goes here
};
```

As long as it exports an object, it can contain any logic necessary to the site.

# What goes in this file?

There's plenty that goes on inside `gatsby-config.js` - everything from metadata to plugins and polyfills.

## siteMetadata

Every site has some kind of metadata to go along with it, such as a title or keywords for SEO. If they need to be used in more than just one place, this is a good place to put them.

There's nothing specific that _needs_ to go in `siteMetadata`. Anything that makes sense for you is perfectly fine, including objects.

```js
siteMetadata: {
  title: "Gatsby Blog",
  description: "A site all about the wonders of Gatsby"
},
```

## plugins

Gatsby runs off of plugins. There's plugins for all sorts of things - from Markdown to TypeScript.

The `plugins` property is an array. Each entry can be an object that configures the plugin, or a plain string if the plugin does not require any setting up.

```js
plugins: [
  "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  }
],
```

## pathPrefix

A `pathPrefix` is used whenever the hosted site will live somewhere other than the root of the domain. If a site lived in a `/site` subdirectory, for example, that would need to be the `pathPrefix`.

```js
pathPrefix: "/site",
```

## polyfill

Gatsby is a forward-thinking framework with speed in mind. They use the Promise API to get data as it's needed. By default, they use their own polyfill to support older browsers.

If needed, it can be turned off through this setting.

```js
polyfill: false,
```

## mapping

Sometimes, certain data gets used in place of others for the sake of simplicity or space. For example, a set of IDs might be used to link to specific products in a database.

The `mapping` property allows Gatsby to bridge the gap between two sets of data by knowing about how they relate. This mapping can then be used by GraphQL.

```js
mapping: {
  "MarkdownRemark.frontmatter.products": 'ProductsList',
},
```

## proxy

While developing, it's possible certain requests need proxying to a different location. For example, you may wany API calls to hit a local server rather than the live one.

All it takes to apply a proxy is a URL prefix and where it should fire that request to instead.

```js
 proxy: {
  prefix: "/api",
  url: "http://localhost:8080",
},
```

## developMiddleware

Think of `developMiddleware` as a secret entrance into the `develop` Express server provided by Gatsby. It allows access to the instance it is using in order to apply middleware.

The usefulness of this may be limited, but could get you out of a tight spot. For example, it may help debugging by logging more appropriate data.

# Where can I find out more about Gatsby config?

Find out more about `gatsby-config.js` on the [Gatsby site][config docs].

[config docs]: https://www.gatsbyjs.org/docs/gatsby-config/
