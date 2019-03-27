'use strict';

class FlyweightFactory {
    constructor() {
        this.flyweights = {};
        console.log('FlyweightFactory created')
    }

    getFlyweight(key) {
        // if the flyweights exist return the existing one
        if (this.flyweights[key]) {
            return this.flyweights[key];
        }
        // if not, create a new one, store it and return it
        else {
            this.flyweights[key] = new ConcreteFlyweight(key);
            return this.flyweights[key];
        }
    }

    createGibberish(keys) {
        return new UnsharedConcreteFlyweight(keys, this)
    }
}

class Flyweight {
    constructor() {
    }

    operation(extrinsicState) {
    }
}


class ConcreteFlyweight extends Flyweight {
    constructor(key) {
        super()
        this.intrinsicState = key
        console.log('ConcreteFlyweight created')
    }

    operation(extrinsicState) {
        return extrinsicState + this.intrinsicState
    }
}

class UnsharedConcreteFlyweight extends Flyweight {
    constructor(keys, flyweights) {
        super()
        console.log('+++++', keys, flyweights)
        this.flyweights = flyweights
        this.keys = keys
        console.log('UnsharedConcreteFlyweight created')
    }

    operation(extrinsicState) {
        var key, word = ''

        for (var i = 0; i < extrinsicState; i++) {
            //random key
            key = this.keys[Math.floor(Math.random() * (this.keys.length))]
            word = this.flyweights.getFlyweight(key).operation(word)
        }
        console.log('UnsharedConcreteFlyweight Operation: ')
        console.log(word)
    }
}

function init_Flyweight() {
    var flyweights = new FlyweightFactory()
    var gibberish = flyweights.createGibberish(['-', '+', '*'])
    gibberish.operation(5)
    gibberish.operation(10)
}
init_Flyweight();