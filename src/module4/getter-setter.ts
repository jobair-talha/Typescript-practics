class Account {
  id: number;
  name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  get getBalance() {
    return `Your remain balance = ${this._balance}`;
  }
  set depositBalance(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new Account(231, "talha", 444);
myAccount.depositBalance = 6;

console.log(myAccount.getBalance);
