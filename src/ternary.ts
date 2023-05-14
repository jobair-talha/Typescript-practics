type ManType = {
  name: string;
  age: number;
  address: {
    city: "No City" | "Gaibandha";
    home?: string;
  };
};

const sweet: ManType = {
  name: "Talha",
  age: 20,
  address: {
    city: "Gaibandha",
    home: "Gi",
  },
};

console.log(sweet.address?.home ?? "No Home");

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));

interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}
