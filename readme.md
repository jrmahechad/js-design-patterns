# JS DESIGN PATTERNS
I create this repo to study Design Patterns using ES6 (EcmaScript 6).

# Creational Patters
These patterns offers object creation mechanisms according of the situation.

## Abstract Factory

- Provides an interface to create families of related or dependent objects without specifying their concrete classes.
- A hierarchy that encapsulates: many possible "platforms", and the construction of a suite of "products".

![Abstract Factory Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/creational/abstract_factory.png)

## Builder

- Separate the contruction of a complex object from its representation.
- The Same contruction process can create different representations.

![Builder Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/creational/builder.png)

## Factory Method

- Define a interface to create an object, but the subclasses decide which class to instantiate.

![Factory Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/creational/factory.png)

## Prototype

- Specify the kinds of object to create using a prototypical instance, and create new objects by copying thes prototype.

![Prototype Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/creational/prototype.png)

## Singleton

- Ensure a class has only one instance, and provide a global point to access it.

![Singleton Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/creational/singleton.png)

# Structural

These patterns identify a simple way to create relationships berween entities.

## Adapter

- Convert the intergace of a class into another interface that the client expects.
- Classes that couldn't work together because of incompatible interfaces now can do it.

![Adapter Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/adapter.png)

## Bridge 

- Decouple an abstraction from its implementation so that the two can vary independently.

![Bridge Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/bridge.png)

## Composite

- Compose objects into tree structures to represent hierarchies.
- Composite lets clints treat individual objects and compositions of objects uniformly.

![Composite Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/composite.png)

## Decorator

- Attach additional responsibilities to an object dynamically.
- Provides a flexible alternative to subclassing fo extending funcionality.

![Decorator Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/decorator.png)

## Facade

- Provide a unified interface to a set of interfaces in a subsystem.
- Defines a higher-level interface that makes the subsystem easier to use.

![Facade Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/facade.png)

## Flyweight

- Use share objects to support

![Flyweight Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/flyweight.png)

## Proxy

- Provide a placeholder for to access and control another object.
- Adds a wrapper to pretect the real component

![Proxy Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/structural/proxy.png)

## Chain Of Responsibility

- Let you pass requests along a chain of handlers.
- Each handler decides either to process the request or to pass it to the next one.

![Chain Of Responsibility Diagram](https://github.com/jrmahechad/js-design-patterns/blob/master/behavioral/chain_of_responsibility.png)

# Sources
The content of this repo is base on several resources online.
Some of them are https://loredanacirstea.github.io/es6-design-patterns/ , https://sourcemaking.com/design_patterns/factory_method

