const searchName = (name: string) => {
  if (name == null) {
    console.log("There is nothing to search..");
  } else {
    console.log("Searching...");
  }
};
searchName("Talha");

// unknown type

const myCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  } else {
    console.log("Wrong Type");
  }
};

myCarSpeed(10);
myCarSpeed("10 kmh^-1");
myCarSpeed(true);

// never type

function throwError(message: string): never {
  throw new Error(message);
}
throwError("Customize Your Error Message.");
