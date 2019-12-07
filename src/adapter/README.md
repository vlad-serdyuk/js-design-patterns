# Adapter


**Adapter** is a structural design pattern that allows objects with incompatible interfaces to collaborate.

## Problem
The Adapter design pattern solves problems like:

- How can a class be reused that does not have an interface that a client requires?
- How can classes that have incompatible interfaces work together?
- How can an alternative interface be provided for a class?


## Solution
An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

## Example
This pattern is often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Adapter_pattern)