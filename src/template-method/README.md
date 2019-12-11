# Template method


**Template method** is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

## Problem
The Template method design pattern solves problems like:

- Move skeleton of common code into separate class
- Define specific 

## Solution
The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single “template method.” The steps may either be abstract, or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself).

## Example
This pattern is an example of inversion of control because the high-level code no longer determines what algorithms to run; a lower-level algorithm is instead selected at run-time.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Template_method_pattern)