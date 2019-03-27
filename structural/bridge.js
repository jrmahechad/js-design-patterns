'use strict';

class Abstraction {
    constructor() {
    }

    operation (){
        this.imp.operationImp();
    }
}


class RefinedAbstraction extends Abstraction {
    constructor() {
        super()
        console.log('RefinedAbstraction created')
    }

    setImp (imp) {
        this.imp = imp
    }

}


class Implementor {
    constructor() {
    }

    operationImp (){
    }
}


class ConcreteImplementorA extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorA created')
    }

    operationImp (){
        console.log('ConcreteImplementorA OperationImp')
    }
}

class ConcreteImplementorB extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorB created')
    }

    operationImp (){
        console.log('ConcreteImplementorB OperationImp')
    }
}

function init_Bridge() {
    var abstraction = new RefinedAbstraction()
    var state = Math.floor(Math.random()*2)
    if(state)
        abstraction.setImp(new ConcreteImplementorA())
    else
        abstraction.setImp(new ConcreteImplementorB())

    abstraction.operation()
}

init_Bridge();