'use strict';

class Director {
    constructor() {
        this.structure = ['Maze','Wall','Door'];
        console.log("Director class created");
    }

    construct (){
        //The Director creates the new ConcreteBuilder and create the structure for that builder
        for(var part in this.structure){
            let builder = new ConcreteBuilder();
            builder.buildPart(this.structure[part]);
            builder.getResult();
        }
    }
}

class Builder {
    constructor() {
    }

    buildPart (){
    }
}

class ConcreteBuilder extends Builder {
    constructor() {
        super();
        console.log("ConcreteBuilder class created");
    }

    buildPart (rawmaterial){
        console.log("ConcreteBuilder BuildPart()");
        let material = rawmaterial;
        this.product = new Product(material)
    }

    getResult (){
        console.log(JSON.stringify(this.product))
        return this.product;
    }
}

class Product {
    constructor(material) {
        console.log("Product class created");
        this.data = material;
    }
}

function init_Builder() {
    let director = new Director();
    director.construct();
}
init_Builder();