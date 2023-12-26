class Customer {
    Orders = [];
    constructor(Name, address){
        this.Name = Name;
        this.address = address;
    }
    addOrder(order){
        this.Orders.push(order);
    }
}

class Order {

    Payment=null;
    OrderDetail=[];
    constructor(data, status){
        this.data = data;
        this.status =status;
    }

    calcSudTotal() {
        console.log(this.calcSudTotal);
    }
    calcTax() {
        console.log(this.calcTax);
    }
    calcTotal() {
        console.log(this.calcTotal);
    }
    calcTotaWeight() {
        console.log(this.calcTotaWeight);
    }
    addPayment(Payment){
        this.Payment = Payment
    }
    addOrderDetail(OrderDetail){
        this.OrderDetail.push(OrderDetail);
    }
}

class OrderDetail {
    Item = null
    constructor(quantity, taxStatus) {
        this.quantity = quantity;
        this.taxStatus = taxStatus;
    }
    calcSudTotal() {
        console.log(this.calcSudTotal);
    }
    calcWeight() {
        console.log(this.calcWeight);
    }
    calcTax() {
        console.log(this.calcTax);
    }
    addItem(Item) {
        this.Item = Item
    }
}

class Item {
  constructor(shippingWeight, description, price) {
    this.shippingWeight = shippingWeight;
    this.description = description;
    this.price = price;
  }
  getPriceFerQuantity() {
    console.log(this.getPriceFerQuantity);
  }
  getTax() {
    console.log(this.getTax);
  }
  inStock() {
    console.log(this.inStock);
  }
}

class Payment {
    constructor(amount){
        this.amount = amount
    }
}

class Cash extends Payment {
  constructor(amount, cashTendered) {
    super(amount);
    this.cashTendered = cashTendered;
  }
}

class Check extends Payment {
  constructor(amount, name, bankID) {
    super(amount);
    this.name = name;
    this.bankID = bankID;
  }
  authorized() {
    console.log(this.authorized);
  }
}

class Credit extends Payment {
  constructor(amount, number, type, expDtate) {
    super(amount);
    this.number = number;
    this.type = type;
    this.expDtate = expDtate;
  }
  authorized() {
    console.log(this.authorized);
  }
}