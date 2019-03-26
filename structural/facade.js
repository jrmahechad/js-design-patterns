'use strict';

class Facade {
    
    CallClass1Method1(){
        let class1 = new Class1();
        class1.Method1();
    }
    
    CallClass2Method2(){
        let class2 = new Class2();
        class2.Method2();
    }
}

class Class1 {

    constructor(){
        console.log('Create Class 1')
    }
    
    Method1(){
        console.log('Class 1 Method 1')
    }
    
    Method2(){
        console.log('Class 1 Method 2')
    }
}

class Class2 {

    constructor(){
        console.log('Create Class 2')
    }

    Method1(){
        console.log('Class 2 Method 1')
    }

    Method2(){
        console.log('Class 2 Method 2')
    }
}


function init_Facade(){
    let facade = new Facade();
    facade.CallClass1Method1();
    facade.CallClass2Method2();
}

init_Facade();