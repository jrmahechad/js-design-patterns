'use strict';

class Subject {
    constructor() {
    }

    request() {
    }
}

class RealSubject extends Subject {
    constructor() {
        super()
        console.log('RealSubject created')
    }

    request() {
        console.log('RealSubject handles request')
    }
}

class Proxy extends Subject {
    constructor() {
        super()
        console.log('Proxy created')
    }

    request() {
        if (this.checkAccess()) {
            this.realSubject = new RealSubject();
            this.realSubject.request();
        }

    }

    checkAccess() {
        console.log('Proxy is checking Access')
        return true;
    }
}

function init_Proxy() {
    var proxy = new Proxy()
    proxy.request()
}
init_Proxy();