# Proxy


**Proxy** is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

## Problem
The Proxy design pattern solves problems like:

- The access to an object should be controlled.
- Additional functionality should be provided when accessing an object.

## Solution
The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

## Example
Javascript has built-in Proxy object.
```text
  new Proxy(target, handler);
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Proxy_pattern)