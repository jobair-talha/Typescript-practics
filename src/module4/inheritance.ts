class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age);
    this.address = address;
  }
  makeSleep(hour: number): string {
    return `This ${this.name} will sleep for ${hour}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numberOfClass: number): string {
    return `The ${this.name} will take ${numberOfClass} classes.`;
  }
}

const teacher1 = new Teacher("Mr Teacher", 28, "Mirpur", "professor");
console.log(teacher1.takeClass(4));
