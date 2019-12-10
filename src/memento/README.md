# Memento


**Memento** is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

## Problem
The Memento design pattern solves problems like:

- The internal state of an object should be saved externally so that the object can be restored to this state later.
- The object's encapsulation must not be violated.

## Solution
The Memento pattern delegates creating the state snapshots to the actual owner of that state, the originator object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state.


## References

- [Wikipedia](https://en.wikipedia.org/wiki/Memento_pattern)