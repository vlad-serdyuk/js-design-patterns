# Composite


**Composite** is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

## Problem
The Composite design pattern solves problems like:

- A part-whole hierarchy should be represented so that clients can treat part and whole objects uniformly.
- A part-whole hierarchy should be represented as tree structure.

## Solution
Composite should be used when clients ignore the difference between compositions of objects and individual objects. The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree.

## Example
It is a bit complex to visualize this pattern. The easiest way to think about this is with the example of a multi-level menu. Each node can be a distinct option or it can be a menu itself which has multiple options as its child. A node component with children is a composite component while a node component without any child is a leaf component.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Composite_pattern)