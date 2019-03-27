'use strict';

class Prototype {
    constructor(prototype) {
    }

    clone (){
    }
}

class ConcretePrototype1 extends Prototype {
    constructor() {
        console.log("ConcretePrototype1 created");
        super()
        this.feature = "feature 1"
    }

    setFeature(key, val) {
        this[key] = val
    }

    clone (){
        console.log('custom cloning function')
        let clone = new ConcretePrototype1()
        let keys = Object.keys(this)

        keys.forEach(k => clone.setFeature(k, this[k]))

        console.log("ConcretePrototype1 cloned");
        return clone;
    }
}

class ConcretePrototype2 extends Prototype {
    constructor() {
        console.log("ConcretePrototype2 created");
        super()
    }

    clone (){
        console.log("ConcretePrototype2 cloned");
        return clone;
    }
}

function init_Prototype () {
    var proto1 = new ConcretePrototype1()
    proto1.setFeature('feature', "feature 22")
    var clone1 = proto1.clone()
    console.log(clone1.feature)
}
init_Prototype();