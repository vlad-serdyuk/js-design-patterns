# Singleton


**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Problem
The singleton design pattern solves problems like:

- How can it be ensured that a class has only one instance?
- How can the sole instance of a class be accessed easily?
- How can a class control its instantiation?
- How can the number of instances of a class be restricted?

## Solution
All implementations of the Singleton have this step in common:

- Modify a constructor to check if instance of that class is already exist. Under the hood, this constructor has a checking if instance of this class is already exists and saves it in a static field. All following calls to create an instance return the cached object.

## Example
A perfect real-life example would be that of mongoose (the famous Node.js ODM library for MongoDB). It utilizes the singleton pattern.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Singleton_pattern)