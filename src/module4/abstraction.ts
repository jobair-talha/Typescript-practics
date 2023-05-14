abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  moveEngine(): void {
    `Moving engine..`;
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log(`Start Engine....`);
  }
  stopEngine(): void {
    console.log(`Stop Engine....`);
  }
}

interface Popularity {
  talent: string;
  study: string;
  powerful: string;
}

class Politics implements Popularity {
  name: string;
  talent: string;
  study: string;
  powerful: string;

  constructor(name: string, talent: string, study: string, powerful: string) {
    this.name = name;
    this.talent = talent;
    this.study = study;
    this.powerful = powerful;
  }
}

const politicalPerson = new Politics("Talha", "high", "MBbS", "much");
politicalPerson.name;
politicalPerson.talent;
