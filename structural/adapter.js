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

    request() {
    }
}


class Adaptee {
    constructor() {
        console.log('Adaptee created')
    }

    specificRequest () {
        console.log('Adaptee request')
    }
}


class Adapter extends Adaptee {

    constructor() {
        super()
        console.log('Adapter created')
    }

    request (){
        return this.specificRequest()
    }
}


function init_Adapter() {
    var f = new Target("adapter")
    f.request()
}

init_Adapter();