# Decorator


**Decorator** is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

## Problem
The Decorator design pattern solves problems like:

- Responsibilities should be added to (and removed from) an object dynamically at run-time.
- A flexible alternative to subclassing for extending functionality should be provided.

## Solution
Instead of using inheritance it's better to add new behavior to objects by some wrapper.
Wrapper is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern. A “wrapper” is an object that can be linked with some “target” object. The wrapper contains the same set of methods as the target and delegates to it all requests it receives. However, the wrapper may alter the result by doing something either before or after it passes the request to the target.

## Example
The decorator type behaviour is very easy to implement in JavaScript because JavaScript allows us to add methods and properties to object dynamically. The simplest approach would be to just add a property to an object but it will not be reusable for the other objects of the same class.
(The most common example is HOC in React.js)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Decorator_pattern)