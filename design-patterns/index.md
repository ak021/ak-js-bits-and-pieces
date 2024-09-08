# Design Patterns

- general repeatable solution for commonly occuring problem in software design.

- Design patterns are solutions to general problems that software developers faced during software development.

## Different types of design patterns

1. Null object pattern

- This pattern can be used to avoid the null checks
- also can provide a default object called NullObject , if incase the object is null or doesnt exist.

2. Builder pattern
   - builder patter is used to create object in steps.
   - normally we will have a class which will give certain properties and methods to the object
   - in builder pattern we can separate the creation of properties and methods into different entities
   - If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory
   - But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.
