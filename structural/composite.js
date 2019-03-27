'use strict';

class Component {
    constructor() {
    }

    operation (){
    }

    add (Component){
    }

    remove (Component){
    }

    getChild (key){
    }
}

class Leaf extends Component {
    constructor(name) {
        super()
        this.name = name
        console.log('Leaf created')
    }

    operation (){
        console.log(this.name)
    }
}

class Composite extends Component {
    constructor(name) {
        super()
        this.name = name
        this.children = []
        console.log('Composite created')
    }

    operation (){
        console.log('Composite Operation for: ' + this.name)
        for(var i in this.children)
            this.children[i].operation()
    }

    add (Component){
        this.children.push(Component)
    }

    remove (Component){
        for(var i in this.children)
            if(this.children[i] === Component)
                this.children.splice(i, 1)
    }

    getChild (key){
        return this.children[key]
    }
}

function init_Composite() {
    var composite1 = new Composite('C1')
    composite1.add(new Leaf('L1'))
    composite1.add(new Leaf('L2'))
    var composite2 = new Composite('C2')
    composite2.add(composite1)
    composite1.getChild(1).operation()
    composite2.operation()
}

init_Composite();