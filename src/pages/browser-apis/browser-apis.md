---
path: "/post/browser-apis"
date: "2018-12-04"
tags: ["browser", "javascript", "service workers"]
summary: The best way to let Gatsby know what to do client-side.
title: "Browser APIs"
---

# What are browser APIs?

Once Gatsby has waved its magic wand and generated all the files, it then serves them to the browser. Sometimes, it needs a little help along the way to get exactly what you're looking for.

Gatsby's browser APIs are little hooks into its world that hand control back to the developer.

# Where do they live?

All browser API calls live inside `gatsby-browser.js`. This is situated at the root of the document, which Gatsby picks up automatically.

There's plenty of APIs going around, but here's a few of the most useful.

## onClientEntry

Gatsby has its own browser runtime. If you need to know when this kicks in, this is the place to do it. This is useful for measuring load times or triggering other items to load.

```js
exports.onClientEntry = () => {
  loadContent();
};
```

## onRouteUpdate

This gets called whenever some kind of internal navigation happens. This can be useful for triggering analytics for example.

The function is also passed information about the update, including the new location.

```js
exports.onRouteUpdate = ({ location }) => {
  analytics.fire(location);
};
```

Before this is called, `onPreRouteUpdate` is fired. Use this instead if knowing ahead of time is important.

## onRouteUpdateDelayed

As Gatsby splits out sites into chunks, it has to go and fetch the relevant chunk each time the route changes.

If that load is particularly slow, its good to know about that. The `onRouteUpdateDelayed` function is called each time the chunk doesn't arrive in a timely fashion. This is currently defined as 1 second.

This is a good place to trigger a loading spinner.

```js
exports.onRouteUpdateDelayed = () => {
  console.log("Loading...");
};
```

## registerServiceWorker

Quite often, a service worker is a good idea. They can speed up a site with fine-tuned caching and even help it work offline.

If you or a plugin wants to register a service worker, it can do so at this point. As long as the function returns true, Gatsby will assume it's been successful.

```js
exports.registerServiceWorker = () => {
  navigator.serviceWorker.register("/sw.js", { scope: "/" });
  return true;
};
```

# Where can I find out about the rest?

The [Gatsby site][browser apis reference] holds all the rest of them including how to call them.

[browser apis reference]: https://www.gatsbyjs.org/docs/browser-apis/
