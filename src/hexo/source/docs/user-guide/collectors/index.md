---
toc-title: collectors
category: user-guide
title: Collectors
permalink: docs/user-guide/collectors/index.html
---
# Collectors

The current supported collectors are:

* `jsdom`: Your website will be loaded using
  [`jsdom`](https://github.com/tmpvar/jsdom).
* `cdp`: Your website will be loaded using Chrome and the Chrome
  Debugging Protocol.

## Differences among collectors

Collectors are expected to implement at least some basic functionality
(see [how to develop a collector](/undefined))
but expose more events or have some extra functionality. The following
document details the known differences among the official collectors.

### JSDOM

* It will not send the events for:

  * `element::#document`
  * `element::#comment`
