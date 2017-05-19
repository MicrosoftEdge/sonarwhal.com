---
toc-title: events
category: developer-guide
title: List of events emitted by a collector
permalink: docs/developer-guide/events/list-of-events.html
---
# List of events emitted by a collector

`collector`s communicate via events. The following is a list of all
the events common to all `collector`s, with their signature, and the
`interface` they implement.

* [`scan::start`](#scanstart)
* [`scan::end`](#scanend)
* [`targetfetch::start`](#targetfetchstart)
* [`targetfetch::end`](#targetfetchend)
* [`targetfetch::error`](#targetfetcherror)
* [`fetch::start`](#fetchstart)
* [`fetch::end`](#fetchend)
* [`fetch::error`](#fetcherror)
* [`traverse::start`](#traversestart)
* [`traverse::end`](#traverseend)
* [`traverse::down`](#traversedown)
* [`traverse::up`](#traverseup)
* [`element::<element-type>`](#elementelement-type)

## `scan::start`

* **When?** When the `collector` is about to start the analysis.
  This is the first event to emit.

* **Format**

  ```ts
  export interface IScanStartEvent {
      /** The URL to analyze. */
      resource: string;
  }
  ```

* **Remarks:** This event is fired synchronously. You should not
  return a `Promise` because it will not wait for it to be resolved.
  If you need to perform an `async` operation you should combine it
  with `scan::end`. You can find more information in [how to interact
  with other services](/docs/developer-guide/rules/how-to-interact-with-other-services.html).

## `scan::end`

* **When?** When the `collector` has finished sending all events and
  its about to return. This is the last event to emit.

* **Format**

  ```ts
  export interface IScanEndEvent {
       /** The final URL analyzed. */
      resource: string;
  }
  ```

## `targetfetch::start`

* **When?** When the `collector` is about to start the request to
  fetch the `target`.

* **Format**

  ```typescript
  export interface IFetchStartEvent {
      /** The URL to download */
      resource: string;
  }
  ```

* **Remarks:** The event is the same for [`fetch::start`](#fetchstart)

## `targetfetch::end`

* **When?** When the `collector` has finished downloading the `target`.

* **Format**

  ```ts
  export interface IFetchEndEvent {
      /** The element that initiated the request. */
      element: IAsyncHTMLElement;
      /** The URL of the target. */
      resource: string;
      /** The request made to fetch the target. */
      request: IRequest;
      /** The response sent while fetching the target. */
      response: IResponse;
  }
  ```

* **Remarks:** The event is the same for [`fetch::end`](#fetchend).
  In this case `element` will be null.

## `targetfetch::error`

* **When?** When the `collector` has found a problem downloading
  the `target`.

* **Format**

  ```ts
  export interface IFetchErrorEvent {
      /** The URL of the target. */
      resource: string;
      /** The element that initiated the request. */
      element: IAsyncHTMLElement;
      /** The error found. */
      error: any;
  }
  ```
* **Remarks:** The event is the same for [`fetch::error`](#fetcherror).
  In this case `element` will be null.

## `fetch::start`

* **When?** When the `collector` is about to start the request to
  fetch the `target`.

* **Format**

  ```ts
  export interface IFetchStartEvent {
      /** The URL to download */
      resource: string;
  }
  ```

* **Remarks:** The event is the same for [`targetfetch::start`](#targetfetchstart).

## `fetch::end`

* **When?** When the `collector` has finished downloading the content
  of a `resource` (`js`, `css`, `image`, etc.).

* **Format**

  ```ts
  export interface IFetchEndEvent {
      /** The element that initiated the request. */
      element: IAsyncHTMLElement;
      /** The URL of the target */
      resource: string;
      /** The request made to fetch the target. */
      request: IRequest;
      /** The response sent while fetching the target. */
      response: IResponse;
  }
  ```

* **Remarks:** The event is the same for [`targetfetch::end`](#targetfetchend).

## `fetch::error`

* **When?** When the `collector` has found a problem downloading
  the content of a `resource`.

* **Format**

  ```ts
  export interface IFetchErrorEvent {
      /** The URL of the target. */
      resource: string;
      /** The element that initiated the request. */
      element: IAsyncHTMLElement;
      /** The error found. */
      error: any;
  }
  ```

* **Remarks:** The event is the same for [`targetfetch::error`](#targetfetcherror).

## `traverse::start`

* **When?** When the `collector` is going to start traversing the DOM.

* **Format**

  ```ts
  export interface ITraverseStartEvent {
      /** The URL of the target. */
      resource: string;
  }
  ```

## `traverse::end`

* **When?** When the `collector` has finished traversing the DOM entirely.

* **Format**

  ```ts
  export interface ITraverseEndEvent {
      /** The URL of the target. */
      resource: string;
  }
  ```

## `traverse::down`

* **When?** When the `collector` is traversing and starts visiting
  the children of a node.

* **Format**

  ```ts
  export interface ITraverseDownEvent {
      /** The URL of the target. */
      resource: string;
  }
  ```

## `traverse::up`

* **When?** When the `collector` has finsihed visting the children
  of a node and goes to the next one.

* **Format**

  ```ts
  export interface ITraverseUpEvent {
      /** The URL of the target. */
      resource: string;
  }
  ```

## `element::<element-type>`

* **When?** When the `collector` visits an element in the DOM when
  traversing it. `<element-type>` is the
  [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
  lower cased.

* **Format**

  ```ts
  export interface IElementFoundEvent {
      /** The URI of the resource firing this event. */
      resource: string;
      /** The visited element. */
      element: IAsyncHTMLElement;
  }
  ```
