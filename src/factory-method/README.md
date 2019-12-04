# Factory Method


**Factory method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

## Problem
Creating an object often requires complex processes not appropriate to include within a composing object. The object's creation may lead to a significant duplication of code, may require information not accessible to the composing object, may not provide a sufficient level of abstraction, or may otherwise not be part of the composing object's concerns.

## Solution
The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. 

## Example
This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Factory_method_pattern)