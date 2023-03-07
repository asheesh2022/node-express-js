class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error("no. desale")
        }
        this.#balance = amount
    }
    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {


    transactionLimit = 100000

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    #calculate(amount) {

        console.log("calculating ineterst")
    }


    takeLoan(amount) {
        // logic
        this.#calculate(amount)
        console.log('take loan:' + amount)
    }
}


const asheesh = new CurrentAccount("asheesh", 1000)
// asheesh.balance("jdcnj")
asheesh.takeLoan(20)
console.log(asheesh)