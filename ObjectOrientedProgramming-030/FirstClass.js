class Customer {
    orders = [];
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
    addOrder(order) {
      this.orders.push(order);
    }
  }
  
  class Order {
    payment = null;
    orderDetails = [];
    constructor(date, status) {
      this.date = date;
      this.status = status;
    }
    calcSubTotal() {
      let subTotal = 0;
      for (let i = 0; i < this.orderDetails.length; i++) {
        subTotal += this.orderDetails[i].calcSubTotal();
      }
      return subTotal;
      //return this.orderDetails.reduce((total, value, orderDetail) => total + orderDetail.Subtotal, 0)
    }
    calcTax() {
      let tax = 0;
      for (let i = 0; i < this.orderDetails.length; i++) {
        tax += this.orderDetails[i].calcTax();
      }
      return tax;
    }
    calcTotal() {
      return this.calcSubTotal();
    }
    calcTotalWeight() {
      let weight = 0;
      for (let i = 0; i < this.orderDetails.length; i++) {
        weight += this.orderDetails[i].calcTotalWeight();
      }
      return weight;
    }
    addPayment(payment) {
      this.payment = payment;
    }
    addOrderDetail(orderDetail) {
      this.orderDetails.push(orderDetail);
    }
    printDetail() {
      for (let i = 0; i < this.orderDetails.length; i++) {
              console.log("ลำดับที่ " + (i + 1) + " " + this.orderDetails[i].getDetail());
              }
              console.log("รวมทั้งหมด " + this.calcTotal() + " บาท");
              this.payment.printDetail();
          }
  }
  
  class OrderDetail {
    item = null;
    constructor(quantity, taxStatus) {
      this.quantity = quantity;
      this.taxStatus = taxStatus;
    }
    calcSubTotal() {
      return this.item.getPriceForQuantity(this.quantity) + this.calcTax();
    }
    calcTax() {
      return this.item.getTax(this.taxStatus);
    }
    calcTotalWeight() {
      return this.item.shippingWeight;
    }
    addItem(item) {
      this.item = item;
    }
    getDetail(){
      return(
          this.item.description + " จำนวน " + this.quantity + " รายการ " + " ราคา " + this.calcSubTotal() + " บาท"
      );
    }
  }
  
  class Item {
    inStock = true;
    constructor(shippingWeight, description, price) {
      this.shippingWeight = shippingWeight;
      this.description = description;
      this.price = price;
    }
    setInStock(status) {
      this.inStock = status;
    }
    getPriceForQuantity(quantity) {
      return this.price * quantity;
    }
    getTax(taxStatus) {
      if (taxStatus === "Tax included") {
        return 0;
      } else {
        return this.price * 0.07;
      }
    }
    inStock() {
      return this.inStock;
    }
  }
  
  class Payment {
    constructor(amount) {
      this.amount = amount;
    }
  }
  
  class Cash extends Payment {
    constructor(amount, cashTendered) {
      super(amount);
      this.cashTendered = cashTendered;
    }
    printDetail(){
      console.log("ชำระด้วยเงินสด จำนวน " + this.amount + " บาท");
    }
  }
  
  class Check extends Payment {
    constructor(amount, name, bankID) {
      super(amount);
      this.name = name;
      this.bankID = bankID;
    }
    authorized() {
      console.log("Authorizing Check");
    }
    printDetail(){
      console.log("ชำระด้วยเงินเช็ค จำนวน " + this.amount + " บาท");
    }
  }
  
  class Credit extends Payment {
    constructor(amount, number, type, expDate) {
      super(amount);
      this.number = number;
      this.type = type;
      this.expDate = expDate;
    }
    authorized() {
      console.log("Authorizing Credit Card");
    }
    printDetail(){
      console.log("ชำระด้วยเงินบัตรเครดิต จำนวน " + this.amount + " บาท");
    }
  }
  
  // const Oldmain = () =>{
  //     let customer1 = new Customer("Worachet Uttha", "Nakhon Pathom");
  //     let customer2 = new Customer("Sakkarin Naja", "Nakhon Pathom");
  //     //console.log(customer1);
  //     //Product
  //     const item1 = new Item(0.3, "ออลอินวันบักเก็ต", 299);
  //     const item2 = new Item(0.1, "ป๊อบบอมบ์แซ่บ", 39);
  //     const item3 = new Item(0.2, "เดอะบอกซ์ ออลสตาร์", 159);
  //     const item4 = new Item(0.2, "ชิคแอนด์แชร์ ทีมนักเก็ตส์ป๊อป", 159);
  //     const item5 = new Item(0.4, "คอมโบข้าวไก่กรอบแกงเขียวหวาน เคเอฟซี", 89);
  
  //     //create orders
  //     const order1 = new Order("08/01/2567", "In process");
  //     const order2 = new Order("09/01/2567", "In process");
  
  //     //add orders to a customer
  //     customer1.addOrder(order1)
  //     customer1.addOrder(order2)
  //     customer2.addOrder(order1)
  //     customer2.addOrder(order2)
  
  //     //create order detail
  //     const orderDetail1 = new OrderDetail(5, "tax included");
  //     orderDetail1.addItem(item2);
  //     const orderDetail2 = new OrderDetail(2, "tax included");
  //     orderDetail2.addItem(item5);
  //     const orderDetail3 = new OrderDetail(1, "tax included");
  //     orderDetail3.addItem(item1);
  //     const orderDetail4 = new OrderDetail(2, "tax included");
  //     orderDetail4.addItem(item4);
  
  //     //add order detail to an order
  //     order1.addOrderDetail(orderDetail1)
  //     order1.addOrderDetail(orderDetail2)
  //     order2.addOrderDetail(orderDetail3)
  //     order2.addOrderDetail(orderDetail4)
  
  //     //console.log(orderDetail1);
  //     console.log("ชื่อ : " + customer1.name);
  //     console.log("จำนวนคำสั่งซื้อ : " + customer1.orders.length);
  //     for (let i = 0; i < customer1.orders.length; i++) {
  //         console.log("คำสั่งซื้อที่ : " + (i + 1));
  //         let total = 0;
  //         for (let k = 0; k < customer1.orders[i].orderDetails.length; k++) {
  //             const item = customer1.orders[i].orderDetails[k].item;
  //             const quantity = customer1.orders[i].orderDetails[k].quantity;
  //             const Subtotal = quantity * item.price;
  //             total += Subtotal;
  //             console.log("ลำดับที่ : " + (k + 1) + " " + item.description + " จำนวน " + quantity + " รายการ" + " ราคา " + Subtotal + " บาท");
  //         }
  //         console.log("รวมทั้งหมด: " + total + " บาท");
  //     }
  
  //     console.log("ชื่อ : " + customer2.name);
  //     console.log("จำนวนคำสั่งซื้อ : " + customer2.orders.length);
  //     for (let i = 0; i < customer2.orders.length; i++) {
  //         console.log("คำสั่งซื้อที่ : " + (i + 1));
  //         let total = 0;
  //         for (let k = 0; k < customer2.orders[i].orderDetails.length; k++) {
  //             const item = customer2.orders[i].orderDetails[k].item;
  //             const quantity = customer2.orders[i].orderDetails[k].quantity;
  //             const Subtotal = quantity * item.price;
  //             total += Subtotal;
  //             console.log("ลำดับที่ : " + (k + 1) + " " + item.description + " จำนวน " + quantity + " รายการ" + " ราคา " + Subtotal + " บาท");
  //         }
  //         console.log("รวมทั้งหมด: " + total + " บาท");
  //     }
  
  // }
  
  // const main = () => {
  //     // สร้างข้อมูลลูกค้า
  //     let customer1 = new Customer("Angkan", "Nakhon Pathom");
  //     let customer2 = new Customer("Thirayut", "Nakhon Pathom");
  //     //console.log(customer1);
  
  //     // สร้างสินค้า Item
  //     const item1 = new Item(0.3, "ออลอินวันบักเก็ต", 299);
  //     const item2 = new Item(0.1, "ป๊อบบอมบ์แซ่บ", 39);
  //     const item3 = new Item(0.2, "เดอะบอกซ์ ออลสตาร์", 159);
  //     const item4 = new Item(0.2, "ชิคแอนด์แชร์ ทีมนักเก็ตส์ป๊อป", 159);
  //     const item5 = new Item(0.4, "คอมโบข้าวไก่กรอบแกงเขียวหวาน เคเอฟซี", 89);
  
  //     // สร้างคำสั่งซื้อ Order
  //     const order1 = new Order("08/01/2567", "In process");
  //     const order2 = new Order("09/01/2567", "In process");
  //     const order3 = new Order("10/01/2567", "In process");
  
  //     // สร้างรายละเอียดคำสั่งซื้อ OrderDetail
  //     const orderDetail1 = new OrderDetail(5, "Tax included");
  //     orderDetail1.addItem(item1);
  //     const orderDetail2 = new OrderDetail(2, "Tax included");
  //     orderDetail2.addItem(item2);
  //     const orderDetail3 = new OrderDetail(1, "Tax included");
  //     orderDetail3.addItem(item5);
  //     const orderDetail4 = new OrderDetail(3, "Tax included");
  //     orderDetail4.addItem(item3);
  //     const orderDetail5 = new OrderDetail(2, "Tax included");
  //     orderDetail5.addItem(item4)
  //     const orderDetail6 = new OrderDetail(1, "Tax included");
  //     orderDetail6.addItem(item1);
  
  //     // เพิ่มคำสั่งซื้อลงในลูกค้าคนที่ 1
  //     customer1.addOrder(order1);
  
  //     // เพิ่มคำสั่งซื้อลงในลูกค้าคนที่ 2
  //     customer2.addOrder(order2);
  //     customer2.addOrder(order3);
  
  //     // เพิ่มรายละเอียดคำสั่งซื้อลงในคำสั่งซื้อ order1
  //     order1.addOrderDetail(orderDetail1);
  //     order1.addOrderDetail(orderDetail2);
  
  //     // เพิ่มรายละเอียดคำสั่งซื้อลงในคำสั่งซื้อ order2
  //     order2.addOrderDetail(orderDetail3);
  //     order2.addOrderDetail(orderDetail4);
  //     order2.addOrderDetail(orderDetail5);
  
  //     // เพิ่มรายละเอียดคำสั่งซื้อลงในคำสั่งซื้อ order3
  //     order3.addOrderDetail(orderDetail6);
  //     order3.addOrderDetail(orderDetail3);
  //     order3.addOrderDetail(orderDetail5);
  
  //     // แสดงรายละเอียดคำสั่งซื้อสำหรับลูกค้าคนที่ 1
  //     console.log("ชื่อ : " + customer1.name);
  //     console.log("จำนวนคำสั่งซื้อ : " + customer1.orders.length);
  //     for (let i = 0; i < customer1.orders.length; i++) {
  //         console.log("คำสั่งซื้อที่ : " + (i + 1));
  //         for (let k = 0; k < customer1.orders[i].orderDetails.length; k++) {
  
  //             console.log(
  //                 "รายการที่ : " +
  //                 (k + 1) + " " +
  //                 customer1.orders[i].orderDetails[k].item.description +
  //                 " จำนวน " +
  //                 customer1.orders[i].orderDetails[k].kuantity +
  //                 " ราคา " +
  //                 customer1.orders[i].orderDetails[k].calcSubTotal() +
  //                 " บาท"
  //             );
  //         }
  //         console.log("รวมทั้งหมด " + customer1.orders[i].calcTotal() + " บาทรวมภาษี");
  //     }
  //     console.log("----------------------------------------------------------------------");
  //     // แสดงรายละเอียดคำสั่งซื้อสำหรับลูกค้าคนที่ 2
  //     console.log("ชื่อ : " + customer2.name);
  //     console.log("จำนวนคำสั่งซื้อ : " + customer2.orders.length);
  
  //     customer2.orders.forEach((order, i) => {
  //         console.log("คำสั่งซื้อที่ : " + (i + 1));
  
  //         order.orderDetails.map((orderDetail, k) => {
  //             console.log(
  //                 "รายการที่ : " +
  //                 (k + 1) + " " +
  //                 orderDetail.item.description +
  //                 " จำนวน " +
  //                 orderDetail.kuantity +
  //                 " ราคา " +
  //                 orderDetail.calcSubTotal() +
  //                 " บาท"
  //             );
  //         });
  
  //         console.log("รวมทั้งหมด " + order.calcTotal() + " บาทรวมภาษี");
  //     });
  
  // }
  const main = () => {
    // สร้างข้อมูลลูกค้า
    let customer1 = new Customer("Angkan", "Nakhon Pathom");
    let customer2 = new Customer("Thirayut", "Nakhon Pathom");
    //console.log(customer1);
  
    // สร้างสินค้า Item
    const item1 = new Item(0.3, "ออลอินวันบักเก็ต", 299);
    const item2 = new Item(0.1, "ป๊อบบอมบ์แซ่บ", 39);
    const item3 = new Item(0.2, "เดอะบอกซ์ ออลสตาร์", 159);
    const item4 = new Item(0.2, "ชิคแอนด์แชร์ ทีมนักเก็ตส์ป๊อป", 159);
    const item5 = new Item(0.4, "คอมโบข้าวไก่กรอบแกงเขียวหวาน เคเอฟซี", 89);
  
    // สร้างคำสั่งซื้อ Order
    const order1 = new Order("08/01/2567", "In process");
    const order2 = new Order("09/01/2567", "In process");
    const order3 = new Order("10/01/2567", "In process");
  
    // สร้างรายละเอียดคำสั่งซื้อ OrderDetail
    const orderDetail1 = new OrderDetail(5, "Tax not included");
    orderDetail1.addItem(item1);
    const orderDetail2 = new OrderDetail(2, "Tax not included");
    orderDetail2.addItem(item2);
    const orderDetail3 = new OrderDetail(1, "Tax included");
    orderDetail3.addItem(item5);
    const orderDetail4 = new OrderDetail(3, "Tax included");
    orderDetail4.addItem(item3);
    const orderDetail5 = new OrderDetail(2, "Tax included");
    orderDetail5.addItem(item4);
    const orderDetail6 = new OrderDetail(1, "Tax included");
    orderDetail6.addItem(item1);
  
    // เพิ่มคำสั่งซื้อลงในลูกค้าคนที่ 1
    customer1.addOrder(order1);
    customer1.addOrder(order2);
  
    // เพิ่มคำสั่งซื้อลงในลูกค้าคนที่ 2
    customer2.addOrder(order2);
    customer2.addOrder(order3);
  
    // เพิ่มรายละเอียดคำสั่งซื้อลงในคำสั่งซื้อ order1
    order1.addOrderDetail(orderDetail1);
    order1.addOrderDetail(orderDetail2);
  
    // เพิ่มรายละเอียดคำสั่งซื้อลงในคำสั่งซื้อ order2
    order2.addOrderDetail(orderDetail3);
    order2.addOrderDetail(orderDetail4);
    order2.addOrderDetail(orderDetail5);
  
    // เพิ่มรายละเอียดคำสั่งซื้อลงในคำสั่งซื้อ order3
    order3.addOrderDetail(orderDetail6);
    order3.addOrderDetail(orderDetail3);
    order3.addOrderDetail(orderDetail5);
  
    //จ่ายเงิน
    const cash = new Cash(order1.calcTotal(),  "")
    customer1.orders[0].addPayment(cash);
  
    const credit = new Credit(order2.calcTotal(), "123456789123445", "credit", "10/24")
    customer1.orders[1].addPayment(credit)
  
    // แสดงรายละเอียดคำสั่งซื้อสำหรับลูกค้า
    console.log("ชื่อ : " + customer1.name);
    console.log("จำนวนคำสั่งซื้อ : " + customer1.orders.length);
    for (let i = 0; i < customer1.orders.length; i++) {
      console.log("คำสั่งซื้อที่ : " + (i + 1));
      customer1.orders[i].printDetail();
      }
  };
  
  main();
  
