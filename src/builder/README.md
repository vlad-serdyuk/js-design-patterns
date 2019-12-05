# Builder


**Builder** is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

## Problem
The Builder design pattern solves problems like:

- How can a class (the same construction process) create different representations of a complex object?
- How can a class that includes creating a complex object be simplified?

## Solution
The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.

## Example
Use the Builder pattern to avoid creating complex object with many parameters

```text
class Pizza {
  construtor(
    cheese,
    pepperoni,
    onion,
    chiken,
    ...
  )
}
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Builder_pattern)