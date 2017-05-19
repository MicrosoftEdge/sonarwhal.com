---
category: user-guide
title: Differences among collectors
permalink: docs/user-guide/differences-among-collectors.html
---
# Differences among collectors

Collectors are expected to implement at least some basic functionality
(see [how to develop a collector](/docs/developer-guide/collectors/how-to-develop-a-collector.html))
but expose more events or have some extra functionality. The following
document details the known differences among the official collectors.

## JSDOM

* It will not send the events for:

  * `element::#document`
  * `element::#comment`
