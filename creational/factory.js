'use strict';

class Productt {
    constructor() {
    }
}

class ConcreteProduct extends Productt {
    constructor() {
        super()
        console.log('ConcreteProduct created')
    }
}

class Creator {
    constructor() {
    }

    factoryMethod() {

    }

    anOperation() {
        console.log("AnOperation()")
        this.product = this.factoryMethod()
        console.log('this.product instanceof ConcreteProduct',this.product instanceof ConcreteProduct)
    }
}

class ConcreteCreator extends Creator {

    constructor() {
        super()
        console.log('ConcreteCreator created')
    }

    factoryMethod() {
        return new ConcreteProduct();
    }
}

function init_FactoryMethod() {
    var factory = new ConcreteCreator()
    factory.anOperation()
}
init_FactoryMethod();