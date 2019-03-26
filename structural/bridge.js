'use strict';

class Abstraction {
    constructor() {
    }

    Operation (){
        this.imp.OperationImp();
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

    OperationImp (){
    }
}


class ConcreteImplementorA extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorA created')
    }

    OperationImp (){
        console.log('ConcreteImplementorA OperationImp')
    }
}

class ConcreteImplementorB extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorB created')
    }

    OperationImp (){
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

    abstraction.Operation()
}

init_Bridge();