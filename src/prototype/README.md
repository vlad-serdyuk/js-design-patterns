# Prototype


**Prototype** is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

## Problem
The Prototype design pattern solves problems like:

- How can objects be created so that which objects to create can be specified at run-time?
- How can dynamically loaded classes be instantiated?

## Solution
The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single clone method.

## Example
This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classical object-oriented inheritance. Hence, it plays to JavaScript's strength and has native support.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Prototype_pattern)