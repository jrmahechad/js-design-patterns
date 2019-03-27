'use strict';

class Componentt {
    constructor() {
    }

    operation (){
    }
}

class ConcreteComponent extends Componentt {
    constructor() {
        super()
        console.log('ConcreteComponent created')
    }

    operation (){
        console.log('o o')
    }
}

class Decorator extends Componentt {
    constructor(component) {
        super()
        this.component = component
        console.log('Decorator created')
    }

    operation (){
        this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    constructor(component, sign) {
        super(component)
        this.addedState = sign
        console.log('ConcreteDecoratorA created')
    }

    operation (){
        super.operation()
        console.log(this.addedState)
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component, sign) {
        super(component)
        this.addedState = sign
        console.log('ConcreteDecoratorA created')
    }

    operation (){
        super.operation()
        console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState)
    }

    addedBehavior  (){
        this.operation()
        console.log('|........|')
    }
}

function init_Decorator() {
    var component = new ConcreteComponent()
    var decoratorA = new ConcreteDecoratorA(component, '!!!')
    var decoratorB = new ConcreteDecoratorB(component, '.')
    console.log('component: ')
    component.operation()
    console.log('decoratorA: ')
    decoratorA.operation()
    console.log('decoratorB: ')
    decoratorB.addedBehavior()
}
init_Decorator();