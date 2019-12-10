# Strategy


**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## Problem
The Strategy design pattern solves problems like:

- It should be possible to invoke different algorithms from an instace independently through an abstraction.


## Solution
The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called strategies.

## Example
React code:
```text
<SomeComponent
  onCalculateDiscount={calculateDiscount}
/>

amount * this.calculateDiscount()
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)