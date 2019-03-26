'use strict';

class Target {
    constructor(type) {
        let result

        switch(type) {
            case 'adapter':
                result = new Adapter()
                break
            default:
                result = null
        }
        return result
    }

    Request() {
    }
}


class Adaptee {
    constructor() {
        console.log('Adaptee created')
    }

    SpecificRequest () {
        console.log('Adaptee request')
    }
}


class Adapter extends Adaptee {

    constructor() {
        super()
        console.log('Adapter created')
    }

    Request (){
        return this.SpecificRequest()
    }
}


function init_Adapter() {
    var f = new Target("adapter")
    f.Request()
}

init_Adapter();