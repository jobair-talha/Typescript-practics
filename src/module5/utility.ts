interface PersonType {
  name: string;
  email: string;
  mobile: string;
}

// Pick
type Contact = Pick<PersonType, "mobile" | "email">;

// Omit

type Basic = Omit<PersonType, "name">;

// All Property will be optional
type Optional = Partial<PersonType>;

type Mediatory = Required<PersonType>;

// type MyObj = {
//   [key: string]: string;
// };
// specific property
type MyObj = Record<"a" | "b" | "c", string>;

const myObj: MyObj = {
  a: "0",
  b: "b",
  c: "c",
};
