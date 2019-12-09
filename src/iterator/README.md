# Iterator


**Iterator** is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

## Problem
The Iterator design pattern solves problems like:

- The elements of an aggregate object should be accessed and traversed without exposing its representation (data structures).
- New traversal operations should be defined for an aggregate object without changing its interface.

## Solution
The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an iterator.

## Example
Iterators have a special kind of behavior where we step through an ordered set of values one at a time by calling next() until we reach the end. The introduction of Generators and Iterators in ES6 made the implementation of iterator pattern extremely straightforward.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Iterator_pattern)