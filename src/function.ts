function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(1, 2));

const twoSum = (number1: number, number2: number): number => number1 + number2;

const callback: {
  title: string;
  balance: number;
  add(anyPara: number): number;
} = {
  title: "Banking System",
  balance: 7,
  add(money: number) {
    return this.balance + money;
  },
};

// spread operator
const myFriends: string[] = ["talha", "jobair", "Sweet", "Razon"];
const newFriends: string[] = ["Ratul", "Sobayel", "Sani"];
myFriends.push(...newFriends);

// rest operator
const sayHi = (...firends: string[]): void => {
  firends.map((friend) => console.log(`Hi ${friend}\n`));
};

sayHi("talha", "jobair", "sobayel");
