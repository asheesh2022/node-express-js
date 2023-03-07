function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount) {
    //     this.balance += amount;
    // };
    // this.withdraw = (amount) => {
    //   this.balance -= amount;
    // };
}


BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

const asheesh = new BankAccount("asheesh", 1000)
asheesh.deposit(1000)
const shree = new BankAccount("shree", 10000)
console.log(asheesh)
console.log(shree)
