'use strict';
class Handler {
    constructor() {
    }
    handleRequest() {
    }
}

class ConcreteHandler1 extends Handler {
    constructor() {
        super()
        console.log('ConcreteHandler1 created')
    }

    setSuccessor (successor) {
        this.successor = successor
    }

    handleRequest(request) {
        if (request === 'run')
            console.log('ConcreteHandler1 has handled the request', request)
        else {
            console.log('ConcreteHandler1 wont handle request', request);
            console.log('ConcreteHandler1 calls his successor for request' , request)
            this.successor.handleRequest(request)
        }
    }
}

class ConcreteHandler2 extends Handler {
    constructor() {
        super()
        console.log('ConcreteHandler2 created')
    }

    handleRequest(request) {
        console.log('ConcreteHandler2 has handled the request', request)
    }
}

function init_ChainofResponsibility() {
    let handle1 = new ConcreteHandler1()
    let handle2 = new ConcreteHandler2()
    handle1.setSuccessor(handle2)
    console.log('Sending request run ...');
    handle1.handleRequest('run')
    console.log('Sending request stay ...');
    handle1.handleRequest('stay')

}
init_ChainofResponsibility();