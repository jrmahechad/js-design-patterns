'use strict';

let _singleton = null

class Singleton {
    constructor (data) {
        if(!_singleton) {
            this.data = data
            _singleton = this
        }
        else
            return _singleton
        console.log("Singleton class created")
    }

    singletonOperation () {
        console.log('SingletonOperation')
    }

    getSingletonData () {
        return this.data
    }
}

function init_Singleton() {
    var singleton1 = new Singleton("data1")
    var singleton2 = new Singleton("data2")
    console.log(singleton1.getSingletonData())
    console.log(singleton2.getSingletonData())
    console.log('singleton1 instanceof Singleton' , singleton1 instanceof Singleton)
    console.log('singleton2 instanceof Singleton' , singleton2 instanceof Singleton)
    console.log('singleton1 === singleton' , singleton1 === singleton2)
}
init_Singleton();