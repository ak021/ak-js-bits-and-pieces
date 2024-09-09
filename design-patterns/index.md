# Design Patterns

- general repeatable solution for commonly occuring problem in software design.

- Design patterns are solutions to general problems that software developers faced during software development.

## Different types of design patterns

1. Null object pattern

   - This pattern can be used to avoid the null checks
   - it provides a default object if incase original object is not present

2. Builder Pattern
   - builder patter is used to create object in steps.
   - normally we will have a class which will give certain properties and methods to the object
   - in builder pattern we can separate the creation of properties and methods into different entities
   - If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory
   - But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.
3. Singleton Pattern
   - Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects. It is nothing but a way of defining a class.
   - Class is defined in such a way that only one instance of the class is created in the complete execution of a program or project.
   - Here are some situations in JavaScript where the Singleton pattern may be applicable: - logging service - managing shared resources - service classes, such as api/data service
     **disadvantages:**
     - there can be race condition , becuse the same object can be modified by multiple part of the app at the same time
4. Facade Pattern
   - creates a simple interface and hides the implementation details / complexity
   - example fetch api
