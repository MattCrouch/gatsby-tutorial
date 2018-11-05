---
path: "/post/node-apis"
date: "2018-12-03"
tags: ["node", "server", "building"]
summary: Tell Gatsby exactly how to build your site.
title: "Node APIs"
---

# What are node APIs?

Gatsby builds your site using using what it calls "nodes". These are objects of data floating around that tell Gatsby how to build your site.

It provides a small set of APIs to allow you to tap into its working and help you guide it in the right direction.

For example Gatsby will only pick up certain pages by default. By using the node APIs it's possible to help create other pages from related data.

# Where do they live?

Gatsby will pick up any node API calls from `gatsby-node.js`. As long as this file is at the root of the project, it will find it automatically.

There's plenty of node APIs to go around, but here are a few of the more useful ones.

## createPages

Pages within `/pages` will get picked up by Gatsby without issue. But what happens if more need to be generated somehow, like from a JSON file or other data source?

By using `createPages` we can instruct Gatsby to use a certain React component to stamp out a new page for us.

This will be called after it has transformed all the data its told to. This means it can be queried for using GraphQL.

The function returns a Promise, which will resolve once all pages have been created.

```js
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  createPage({
    page: "path/to/page",
    component: ComponentToRender
  });
  return Promise.resolve();
};
```

More information about the `createPage` action itself can be found in the [Gatsby documentation][createpage action].

## onCreateDevServer

This will be called whenever `gatsby develop` fires up a development server.

The function is passed the `app` instance of the server, which can be used as normal.

It can be useful to set up extra middleware for development purposes, such as logging or stubbing out some server responses. This is a great place to set that up.

```js
exports.onCreateDevServer = ({ app }) => {
  app.get("/test", (req, res) => res.json({ success: true }));
};
```

## onCreateWebpackConfig

Every project will have different needs. Sometimes Webpack is required to help with the build process, such as adding in a loader for a specific type of file like SASS.

Calling `setWebpackConfig` works as if you were inside the config itself. You can add rules, plugins and loaders in the same format as any other Webpack build.

```js
exports.onCreateWebpackConfig = ({ rules, loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["sass-loader"]
        }
      ]
    }
  });
};
```

# Where can I find out about the rest?

The [Gatsby site][node apis reference] is a great resource to refer to, including different ways of calling them.

[node apis reference]: https://www.gatsbyjs.org/docs/node-apis/
[createpage action]: https://www.gatsbyjs.org/docs/actions/#createPage
