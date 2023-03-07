class BankAccount {
    // customerName ;
    // accountNumber;
    // balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        this.balance -= amount
    }

}

class CurrentAccount extends BankAccount {


    transactionLimit = 100000

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    takeLoan(amount) {

        console.log('take loan:' + amount)
    }
}

class SavingAccount extends BankAccount {


    transactionLimit = 10000

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    takeSavingLoan(amount) {

        console.log('take saving loan:' + amount)
    }
}


const asheesh = new CurrentAccount("asheesh", 1000)
asheesh.deposit(1000)
asheesh.takeLoan(4000)

const shree = new SavingAccount("shree", 10000)

console.log(asheesh)
console.log(shree)






















// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;


// }



// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// }


// function CurrentAccount(customerName, balance = 0) {
// BankAccount.call(this, customerName, balance)

//     this.transactionLimit = 500000
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeLoan = function (amount) {
//     console.log("take loan: " + amount)
// }



// function SavingAccount(customerName, balance = 0) {

// BankAccount.call(this, customerName, balance)

//     this.transactionLimit = 50000

// }

// SavingAccount.prototype = Object.create(BankAccount.prototype)


// SavingAccount.prototype.takeSavingLoan = function (amount) {
// BankAccount.call(this, customerName, balance)

//     console.log("take Saving loan: " + amount)
// }

// const asheesh = new CurrentAccount("asheesh", 1000)
// asheesh.deposit(1000)
// asheesh.takeLoan(4000)

// const shree = new SavingAccount("shree", 10000)

// console.log(asheesh)
// console.log(shree)
