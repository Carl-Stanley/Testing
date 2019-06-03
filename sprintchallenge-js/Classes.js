// Classed Review 

class Rectangle {

    constructor(obj) {
        this.height = obj.height;
        this.width = obj.width;
    }

};

class OtherRect extends Rectangle {
    constructor(obj) {
        super(obj);
    }
};


const newRect = new Rectangle({
    height: 800,
    width: 400
});

const newRect2 = new OtherRect({
    height: 800,
    width: 400
});

console.log(newRect.height);
console.log(newRect.width);
console.log(newRect2.height);
console.log(newRect2.width);

class CuboidMaker {

    constructor(obj) {
        this.length = obj.length;
        this.height = obj.height;
        this.width = obj.width;
    }

    Volume () {
        return this.length * this.width   * this.height;
    };

    surfaceArea () {
        return  2 * (this.length * this.width + this.length * this.height + this.width * this.height );
    }; 
    

}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.Volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
