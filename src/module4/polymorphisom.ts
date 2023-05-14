class Persons {
  takeNap(): void {
    console.log(`I am sleeping 8 hours`);
  }
}

class Students extends Persons {
  takeNap(): void {
    console.log(`I am sleeping 10 hours`);
  }
}

class Developer extends Persons {
  takeNap(): void {
    console.log(`I am sleeping 12 hours`);
  }
}

function getNap(param: Persons): void {
  param.takeNap();
}

const person1 = new Persons();
const person2 = new Students();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

// some thing like more example
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class RegTriangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.height = height;
    this.width = width;
  }
  area(): number {
    return this.width * this.height;
  }
}

function getArea(param: Shape): void {
  console.log(param.area());
}

getArea(new Circle(2));
getArea(new RegTriangle(3, 6));
