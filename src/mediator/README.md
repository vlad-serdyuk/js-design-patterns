# Mediator


**Mediator** is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

## Problem
The Mediator design pattern solves problems like:

- Tight coupling between a set of interacting objects should be avoided.
- It should be possible to change the interaction between a set of objects independently.


## Solution
The Mediator pattern suggests that you should cease all direct communication between the components which you want to make independent of each other. Instead, these components must collaborate indirectly, by calling a special mediator object that redirects the calls to appropriate components. As a result, the components depend only on a single mediator class instead of being coupled to dozens of their colleagues.

## Example
It provides the central authority over a group of objects by promoting loose coupling by keeping objects from referring each other explicitly.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Mediator_pattern)