# Abstract Factory


**Abstract factory** is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

## Problem
The Abstract Factory design pattern solves problems like:

How can an application be independent of how its objects are created?
How can a class be independent of how the objects it requires are created?
How can families of related or dependent objects be created?

## Solution
The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct instance of the family of common items (e.g., button, dialog or dropdown). Then you can make all variants of items follow those interfaces.

## Example
This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Abstract_factory_pattern)