# Flyweight


**Flyweight** is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

## Problem
The Flyweight design pattern solves problems like:

- Large numbers of objects should be supported efficiently.
- Creating large numbers of objects should be avoided.

## Solution
The Flyweight pattern suggests that you stop storing the extrinsic state inside the object. Instead, you should pass this state to specific methods which rely on it. Only the intrinsic state stays within the object, letting you reuse it in different contexts. As a result, you’d need fewer of these objects since they only differ in the intrinsic state, which has much fewer variations than the extrinsic.

## Example
This pattern can be used for any kind of caching purposes. In fact, modern browsers use a variant of flyweight pattern to prevent loading same images twice.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Flyweight_pattern)