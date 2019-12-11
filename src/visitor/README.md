# Visitor


**Visitor** is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

## Problem
The Visitor design pattern solves problem like:

- It should be possible to define a new operation for (some) classes of an object structure without changing the classes.

## Solution
The Visitor pattern suggests that you place the new behavior into a separate class called visitor, instead of trying to integrate it into existing classes. The original object that had to perform the behavior is now passed to one of the visitor’s methods as an argument, providing the method access to all necessary data contained within the object.


## References

- [Wikipedia](https://en.wikipedia.org/wiki/Visitor_pattern)