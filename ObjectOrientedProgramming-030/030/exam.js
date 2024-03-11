class Person {
    name = "";
    address = "";
    email = "";
    phone = "";
    accountType = null;
    constructor(name, address, email, phone, accountType) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.accountType = accountType
    }
    setAccount(accountType) {
        this.accountType = accountType;
    }
    toString() {
        return `Person : [Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phone}]`;
    }
}
class Account {
    username = "";
    password = "";
    status = "";
    constructor(username, password, status) {
        this.username = username;
        this.password = password;
        this.status = status;
    }
    getUserName() {
        return this.username;
    }
    getPassWord() {
        return this.password;
    }
}
class Notification {
    constructor(notificationId, createOn, content, sender, recipient) {
        this.notificationId = notificationId;
        this.createOn = createOn;
        this.content = content;
        this.sender = sender;
        this.recipient = recipient;
    }
}
class Guest extends Person {
    roombooking = [];
    constructor(name, address, email, phone, accountType) {
      super(name, address, email, phone, accountType);
    }
    addRoomBooking(roombooking) {
      this.roombooking.push(roombooking);
    }
    createBooking(reservationNumber, startDate, durationDays, room) {
      const isRoomAvailable = this.isRoomAvailable(room, startDate, durationDays);
  
      if (isRoomAvailable) {
        const booking = {
          reservationNumber: reservationNumber,
          startDate: startDate,
        };
      }
    }
    toString() {
      return `${super.toString()}, AccountType = ${this.accountType}`;
    }
  }
//Enum
class AccountType {
    static GUEST = "guest";
    static RECEPTIONIST = "receptionist";
    constructor(name) {
        this.name = name;
    }
}
class Receptionist extends Person {
  constructor(name, address, email, phone) {
    super(name, address, email, phone, accountType);
  }
  createBooking() {}
    toString() {
      return `${super.toString()}, AccountType = ${this.accountType}`;
    }
}
class Hotel{
    name = "";
    location = "";
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    getRoom() {
        return this.rooms;
    }
    addNewRoom(room) {
        this.rooms.push(room);
    }
    toString() {
        let inHotel = "";
        for (let i = 0; i < this.rooms.length; i ++ ) {
            inHotel += "\t" + `${this.rooms[i].toString()}` + "\n";
      }
      return `Hotel : ${this.name} ${this.location} \n ${inHotel}`;
    }

}
class Room {
    roomNumber = "";
    style = null;
    style = null;
    roomPrice = 0;
    constructor(roomNumber, style, status, roomPrice) {
        this.roomNumber = roomNumber;
        this.style = style;
        this.status = status;
        this.roomPrice = roomPrice;
    }
    isRoomAvailable(roomNumber) {
        return (
            this.roomNumber === roomNumber && this.status === RoomStatus.AVAILABLE
        );
    }
    createRoom(roomNumber, style, status, price) {
        const room = new Room(roomNumber, style, status, price);
        return room != null;
    }
        toString() {
            return `Room [${this.roomNumber}, ${this.style}, ${this.roomPrice}, ${this.status}]`;
        }
} 
class RoomBooking {
    reservationNumber = "";
    startDate = "";
    durationDays = 0;
    static = null;
    createdBy = null;
    constructor(reservationNumber, startDate, durationDays, status, createdBy) {
        this.reservationNumber = reservationNumber;
        this.startDate = startDate;
        this.durationDays = durationDays;
        this.status = status;
        this.createdBy = createdBy;
    }
    toString() {
        return ` \n Detail: [Reservation Number: ${this.reservationNumber}, Start Date: ${this.startDate}, Duration: ${this.durationDays}, Status: ${this.status}, Create by: ${this.createdBy.name}]`;
      }
      createBooking(reservationNumber, startDate, durationDays, guest, room) {}
    }
    //Enum
    class AccountType {
      static GUEST = "guest";
      static RECEPTIONIST = "receptionist";
      constructor(name) {
        this.name = name;
      }
    }
class RoomStatus {
    static AVAILABLE = "available";
    static DISAVAILABIE = "disavailabie";
    static LATECHECKOUT = "latecheckout";
    static EARIYCHECKEIN = "eariycheckein";
    constructor(name) {
        this.name = name;
    }
}
class RoomStyle {
    static DOUBLE_POOL = "Double bed Sea view";
    static DOUBLE_SEA = "Twin bed pool view";
    static TWIN_POOL = "Twin bed Sea view";
    static TWIN_SEA = "Double  bed pool view";
    constructor(name) {
        this.name = name;
    }
}

const main = () => {
    const Guest1 = new Guest("Alice", "Ban Pong", "Alice@gmail.com", "0123456789",AccountType.GUEST);
    const Guest2 = new Guest("Bob", "Ban Pong", "Bob@gmail.com", "0123456789",AccountType.GUEST);
    Guest1.setAccountType("guest");
    Guest2.setAccountType("guest");

    const receptionist1 = new Receptionist(
      "Catherine",
      "Ban Pong",
      "Catherine@gmail.com",
      "0123456789",
      AccountType.RECEPTIONIST
    );
    const receptionist2 = new Receptionist(
      "David",
      "Ban Pong",
      "David@gmail.com",    
      "0123456789",
      AccountType.RECEPTIONIST
    );
    const hotel = new Hotel("SE Hotel", "NPRU");

    const room1 = new Room("Room1",RoomStyle.DOUBLE_POOL,RoomStatus.AVAILABLE,1000);
    const room2 = new Room("Room2",RoomStyle.DOUBLE_SEA,RoomStatus.AVAILABLE,2000);
    const room3 = new Room("Room3",RoomStyle.TWIN_POOL,RoomStatus.AVAILABLE,4000);
    const room4 = new Room("Room4",RoomStyle.TWIN_SEA,RoomStatus.AVAILABLE,5000);

    hotel.addNewRoom(room1);
    hotel.addNewRoom(room2);
    hotel.addNewRoom(room3);
    hotel.addNewRoom(room4);

    console.log(receptionist1.toString());
    console.log(receptionist2.toString());

}

main();