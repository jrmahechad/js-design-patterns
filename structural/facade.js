'use strict';

class Facade {
    constructor(){
        console.log('Create Facade');
        
    }

    callMethod1(className) {
        switch (className) {
            case 'class1':
                let class1 = new Class1();
                class1.method1();
                break;
            case 'class2':
                let class2 = new Class2();
                class2.method1();
                break;

            default:
                console.log('Method 1 is not available')

                break;
        }

    }

}

class Class1 {

    constructor() {
        console.log('Create Class 1')
    }

    method1() {
        console.log('Class 1 Method 1')
    }

    method2() {
        console.log('Class 1 Method 2')
    }
}

class Class2 {

    constructor() {
        console.log('Create Class 2')
    }

    method1() {
        console.log('Class 2 Method 1')
    }

    method2() {
        console.log('Class 2 Method 2')
    }
}


function init_Facade() {
    let facade = new Facade();
    facade.callMethod1('class1');
    facade.callMethod1('class2');
}

init_Facade();