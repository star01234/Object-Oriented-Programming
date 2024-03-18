class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor (name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    verify(name) {
        return(
            this.name === name 
        );
    }
    getAccount() {
        return this.accounts;
    }
    createAccount(bank, accountType) {
        return bank.createAccount(accountType);
    }
}
class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name ,address, code) {
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType) {
        let account
        if (accountType === "currentAccount"){
            account = new CurrentAccount("123456", 5000, 500, 0.3);
            return account;
        }else{
            account = new SavingsAccount("123456", 5000, 0.5);
            return account;
        }
    }
    createCustomer(name, address, phone, email) {
        const customer = new Customer("Guy", "OO", "0123456789", "Q@gmail.com");
        return customer;
    }
    createATM() {
        const atm = new ATM("bankNpru", "bankSE");
        return atm;
    }
}
class Account {
    accountNumber = "";
    balance = 0;
    constructor (accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit() {

    }
    withdraw() {

    }
    createTransaction() {

    }
    getTransaction() {

    }
    getBalance() {

    }
    getAccountType() {

    }
    getCustomer() {

    }
    setCustomer() {

    }
 }
 class CurrentAccount {
    overdraftLimit = 0;
    overdraftInterest = 0;
    constructor(overdraftLimit, overdraftInterest) {
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }
    calculateInterest() {

    }
    getOverdraftLimit() {

    }
    setOverdraftLimit() {

    }
 }
 class SavingsAccount {
    interestRate = 0;
    constructor(interestRate) {
        this.interestRate = interestRate;
    }
    calculateInterest() {

    }
    getInterestRate() {

    }
    setInterestRate() {

    }
 }
 class Transaction {
    transactionId = "";
    transactionType = "";
    amount = 0;
    transactionDate = date;
    status = "";
    constructor(transactionId,transactionType, amount, transactionDate, status) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }
    getTransactionId() {

    }
    getTransactionType() {

    }
    getAmount() {

    }
    getTransactionDate() {

    }
    getStatus() {

    }
    setStatus() {

    }
    setTransactionType() {

    }
    setAmount() {

    }
    setTransactionDate() {

    }
 }
class ATM {
    location = "";
    mangedBy = "";
    constructor(location, mangedBy) {
        this.location = location;
        this.mangedBy = mangedBy;
    }
    identify() {

    }
    checkBalance() {

    }
    withdraw() {

    }
    deposit() {

    }
    changePin() {

    }
    transfer() {

    }
    verify() {

    }
}
