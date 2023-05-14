type AlphaNumeric = number | string;

function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
  if (typeof param1 == "number" && typeof param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUserMore(user: NormalUser | AdminUser) {
  if ("role" in user) {
    return `Hey i'm ${user.name}. Role of amdin`;
  } else {
    return `Hey i'm ${user.name}. Normal User`;
  }
}

console.log(getUserMore({ name: "Normal" }));
console.log(getUserMore({ name: "Admin", role: "admin" }));
