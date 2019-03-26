'use strict';

class Componentt {
    constructor() {
    }

    Operation (){
    }
}

class ConcreteComponent extends Componentt {
    constructor() {
        super()
        console.log('ConcreteComponent created')
    }

    Operation (){
        console.log('o o')
    }
}

class Decorator extends Componentt {
    constructor(component) {
        super()
        this.component = component
        console.log('Decorator created')
    }

    Operation (){
        this.component.Operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    constructor(component, sign) {
        super(component)
        this.addedState = sign
        console.log('ConcreteDecoratorA created')
    }

    Operation (){
        super.Operation()
        console.log(this.addedState)
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component, sign) {
        super(component)
        this.addedState = sign
        console.log('ConcreteDecoratorA created')
    }

    Operation (){
        super.Operation()
        console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState)
    }

    AddedBehavior  (){
        this.Operation()
        console.log('|........|')
    }
}

function init_Decorator() {
    var component = new ConcreteComponent()
    var decoratorA = new ConcreteDecoratorA(component, '!!!')
    var decoratorB = new ConcreteDecoratorB(component, '.')
    console.log('component: ')
    component.Operation()
    console.log('decoratorA: ')
    decoratorA.Operation()
    console.log('decoratorB: ')
    decoratorB.AddedBehavior()
}
init_Decorator();