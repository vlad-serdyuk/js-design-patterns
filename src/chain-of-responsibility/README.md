# Chain of responsibility


**Chain of responsibility** is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## Problem
The Chain of responsibility design pattern solves problems like:

- Coupling the sender of a request to its receiver should be avoided.
- It should be possible that more than one receiver can handle a request.

## Solution
Like many other behavioral design patterns, the Chain of Responsibility relies on transforming particular behaviors into stand-alone objects called handlers. The pattern suggests that you link these handlers into a chain. Each linked handler has a field for storing a reference to the next handler in the chain.

## Example
A good example of the chain of responsibility pattern is the event bubbling in DOM in which an event propagates through a series of nested DOM elements, one of which may have an "eventlistener" attached to listen and act on the event.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern)