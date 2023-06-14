//#region Değişkenler

// A.js
//const currentDate = moment().format("YYYY-MM-DD");

// B.js
const currentDate = moment().format("YYYY-MM-DD");

//---------------------------------------------

// UserAccountPage.js
//getUserInfo(); // Kullanıcı bilgilerini getirir

// ManagerOrdersPage.js
//getCustomerData(); // Kullanıcı bilgilerini getirir

// UserAccountPage.js && ManagerOrdersPage.js
getUser();

//---------------------------------------------

// setTimeout(() => {}, 86400000);

const MILLISECONDS_IN_A_DAY = 86_400_000; // 86400000
setTimeout(() => {}, MILLISECONDS_IN_A_DAY);

// const x = new Date();

const date = new Date();

//---------------------------------------------

const locations = ["Ankara", "İstanbul", "İzmir"];

// locations.forEach(l => {
// });

locations.forEach((location) => {});

//---------------------------------------------

// const car = {
//     carBrand :"BMW",
//     carModel : "X5",
//     carYear  :2020,
// };

// console.log(car.carBrand);

const car = {
  brand: "BMW",
  model: "X5",
  year: 2020,
};
console.log(car.brand);

//#endregion

//#region Fonksiyonlar

// Fonksiyon argüman sayısını olabilidiğince az tutun, tercihen 3'ten az

// function createMenu(title, buttonText, body, cancellable) {
// }

// const menu = {title:"Başlık", buttonText: "Kaydet", isCancellable: true};
// createMenu(menu.title, null, null, menu.isCancellable)

function createMenu(
  // menu
  { title, buttonText, body, cancellable = false }
) {
  // obje oluşturulabiliriz
}

createMenu({
  title: "Başlik",
  buttonText: "Kaydet",
  isCancellable: true,
});

//---------------------------------------------

// function sendEmailCustomer(customers) {
//   customers.forEach((customer) => {
//     if (customer.active) {
//       const user = HTTPClient.Get("URL/users", customer.userId);
//       EmailClient.connect();
//       const emailContent = { subject: "Hoşgeldiniz", body: "Merhaba" };
//       EmailClient.send(user.email, emailContent.subject, emailContent.body);
//       EmailClient.disconnect();
//     }
//   });
// }

// function sendEmailManager(managers) {
//   managers.forEach((manager) => {
//     if (manager.active) {
//       const user = HTTPClient.Get("URL/users", customer.userId);
//       EmailClient.connect();
//       const emailContent = {
//         subject: `Hoşgeldiniz Sayın ${manager.firtName},`,
//         body: "Merhaba",
//       };
//       EmailClient.send(user.email, emailContent.subject, emailContent.body);
//       EmailClient.disconnect();
//     }
//   });
// }

// Fonksiyonlar ilgili class'ın veya component'in yaşam döngüsüne göre sıralanmalıdır
function componentDidMount() {
  // Yaşam döngüsüne göre sıralanmalıdır
  sendWelcomeEmailToEndUsers();
}
// İsme göre sıralama için editör'lerin outline özelliği kullanılabilir.
function sendWelcomeEmailToEndUsers(endUsers) {
  // Eski kodları silmemiz gerekiyor. Çünkü halihazırda versiyon kontrol sistemlerinde (git) her bir satır bizim için arşivleniyor, saklanıyor. Gerekirse commit geçmişinden eski kodlara geri dönüş sağlanabilir. (Eğitim amaçlı eski kodlar silinmemiştir)
  //   const filteredEndUsers = [];
  //   for (let i = 0; i < endUsers.length; i++) {
  //     if (endUsers[i].active) {
  //       filteredEndUsers.push(endUsers[i]);
  //     }
  //   }

  //   for (let i = 0; i < filteredEndUsers.length; i++) {
  //     const element = filteredEndUsers[i];
  //     // ... Aşağıdaki işlemleri burada da yapabilirim.
  //   }
  // Fakat hard code yazmak yerine, mümkün olduğunca fonksiyonel programlamayı tercih edebiliriz.
  endUsers.filter(isActive).forEach((endUser) => {
    // fluent
    const user = getUser(endUser.userId);
    const emailContent = { subject: "Hoşgeldiniz", body: "Merhaba" };
    // Koşul yapılarını iş akışına göre dallanmalar için kullanın
    switch (endUser.type) {
      case "manager":
        emailContent.subject += ` Sayın ${manager.firtName}`;
        break;
      // ...
    }

    sendMail({
      toEmail: user.email,
      subject: emailContent.subject,
      body: emailContent.body,
    });
  });
}
// Çağırılan fonksiyonlar, çağıran fonksiyona olabildiğince yakın olmalıdır
// function isNotActive(entity) {
function isActive(entity) {
  // Koşul fonksiyonu veya değişkenleri mümkün olduğunca açıklayıcı ve pozitif isimlendirin
  //endUsers.filter(!isActive)

  //   return  entity.active && (entity.deadline > Date.now() || (entity.deadline > Date.now() && entity.persistent)));
  const isActive = entity.active;
  const isDeadlineValid = entity.deadline > Date.now();
  const isPersistent = entity.persistent;

  return isActive && (isDeadlineValid || (!isDeadlineValid && isPersistent));
}

function getUser(userId) {
  return HTTPClient.Get("URL/users", userId);
}

function sendMail({ toEmail, subject, body }) {
  EmailClient.connect();
  EmailClient.send(toEmail, subject, body);
  EmailClient.disconnect();
}

// Başka fonskiyonlara bu noktadan devam edilmeli.
// httpClient.get().subscribe({
//     next: (data) => {
//     },
//     complete: (err) => {
//     }
// });
// next, error, complete
//#endregion

//#region Nesne ve Sınıflar

// class Vehicle {
// }

// class Bicycle extends Vehicle {
//   pedal() {
//     // Bir bisiklete göre hareket mekanizmasını sağlayacak
//   }
// }

// class Car extends Vehicle {
//   drive() {
//     // Bir bisiklete göre hareket mekanizmasını sağlayacak
//   }
// }

class Vehicle {
  move(position) {
    throw new Error("Not impelemented");
  }
  // Bir araca göre hareket mekanizmasını sağlayacak
}

class Bicycle extends Vehicle {
  move(position) {
    // Bir bisiklete göre hareket mekanizmasını sağlayacak
  }
}

class Car extends Vehicle {
  move(position) {
    // Bir bisiklete göre hareket mekanizmasını sağlayacak
  }
}

class Plane extends Vehicle {
  move(position) {
    // Bir bisiklete göre hareket mekanizmasını sağlayacak
  }
}

const bicycleModel = new Bicycle();
const carModel = new Car();

// Overloading
// function travel(vehicle : Bicycle){

// }
// function travel(vehicle : Car){

// }
// Fakat JS'de overloading yoktur. Aşağıdaki gibi kullanılabilir.
function travel(position, vehicle) {
  // JS'i tip güvenli hale getirmek için manuel kod yazılmaması gerekiyor.
  // Onun yerine daha iyi testler, daha çok code review ve daha dikkatli kodlama yapılması
  // Veya günümüzde JS'i tip güvenli ve daha gelişmiş programlama dillerinin özelliklerini ekleyen Typescript kullanılmalıdır.
  // if(typeof position !== "number")
  // {
  //     throw new Error("Invalid position type");
  // }
  // if(!vehicle instanceof Vehicle)
  // {
  //     throw new Error("Invalid vehicle");
  // }

  // if(vehicle instanceof Bicycle){
  //     vehicle.pedal(position);
  // } else if (vehicle instanceof Car){
  //     vehicle.drive(position);
  // } else if (vehicle instanceof Plane){
  //     vehicle.fly(position);
  // }
  vehicle.move(position);
}

const targetPosition = 10;
travel(targetPosition, bicycleModel);
travel(targetPosition, carModel);

//-----------------------------------------

// function RentalCarOld({ brand, model, color, dailyPrice, isAutomatic, isDiesel, isAirConditioned }){
//     let brand = brand;
//     let model = model;
//     let color = color;
//     let dailyPrice = dailyPrice;
//     let isAutomatic = isAutomatic;
//     let isDiesel = isDiesel;
//     let isAirConditioned = isAirConditioned;

//     function getBrand(){
//         return brand;
//     }

//     return {
//         getBrand
//     }
// }
// const rentalCarOld = RentalCarOld({
//     brand: "BMW",
//     model: "3.20",
//     color: "Black",
//     dailyPrice: 100,
//     isAutomatic: true,
//     isDiesel: true,
//     isAirConditioned: true
// })
// rentalCarOld.getBrand();

class RentalCar {
  //let brand;
  constructor(
    // brand, model, color, dailyPrice, isAutomatic, isDiesel, isAirConditioned
    // rentalCar
    { brand, model, color, dailyPrice, isAutomatic, isDiesel, isAirConditioned }
  ) {
    // this.brand = brand;
    // this.model = model;
    // this.color = color;
    // this.dailyPrice = dailyPrice;
    // this.isAutomatic = isAutomatic;
    // this.isDiesel = isDiesel;
    // this.isAirConditioned = isAirConditioned;
    this.__brand = brand;
    this.__model = model;
    this.__color = color;
    this.__dailyPrice = dailyPrice;
    this.__isAutomatic = isAutomatic;
    this.__isDiesel = isDiesel;
    this.__isAirConditioned = isAirConditioned;

    this.__lastRentalDate = null;
    this.__lastRentalDateDeadline = null;
  }

  getBrand() {
    // Bazi kontrolleri burada yapabiliriz
    return this.__brand;
  }

  getModel() {
    return this.__model;
  }

  getColor() {
    return this.__color;
  }

  setColor(color) {
    this.__color = color;
    // return undefined; // Default
    return this;
  } // Varsayılan dönüş değeri undefined'dır.

  getDailyPrice() {
    return this.__dailyPrice;
  }

  setDailyPrice(dailyPrice) {
    this.__dailyPrice = dailyPrice;
    return this;
  }

  getIsAutomatic() {
    return this.__isAutomatic;
  }

  getIsDiesel() {
    return this.__isDiesel;
  }

  getIsAirConditioned() {
    return this.__isAirConditioned;
  }

  setIsAirConditioned(isAirConditioned) {
    this.__isAirConditioned = isAirConditioned;
    return this;
  }

  rent(rentalDeadline) {
    this.__lastRentalDate = new Date();
    this.__lastRentalDateDeadline = rentalDeadline;
    return this;
  }

  save() {
    console.log(this, "saved");
    // save metodu fluent yapının son halkasıysa,
    // En sonki uygulanacak operasyon işlemi ise, iş akışında başka operasyon işlemi kalmamış demektir.
    // yani dönüş değeri tanımlmaya gerek yoktur.
    return undefined;
  }
}
// const rentalCar = new RentalCar("BMW", "3.20", "Black", 100, true, true, true);
const rentalCar = new RentalCar({
  // new'leyerek yeni bir instance referansı oluşturulur. this ise bu referansa işaret eder.
  // instance // örnek referansı
  brand: "BMW",
  model: "3.20",
  color: "Black",
  dailyPrice: 100,
  isAutomatic: true,
  isDiesel: true,
  isAirConditioned: true,
});
// rentalCar.brand = "Mercedes";
// rentalCar.__brand // getter ve setter'lar ile erişilebilir hale getirilmeli
const rentalCarBrand = rentalCar.getBrand();
//rentalCar.setBrand("Mercedes"); // İzin verilmiyor
// rentalCar.setColor("Red");
// rentalCar.setIsAirConditioned(false);
// rentalCar.setDailyPrice(150);
// rentalCar.rent(new Date(2023, 5, 30));
// rentalCar.save();

// fluent
//rentalCar.setColor("Red") undefined .setIsAirConditioned;
rentalCar
  .setColor("Red") // rentalCar değişkeninin işaret ettiği referansı bize geri dönüyor.
  .setIsAirConditioned(false) // referans dahilinde olan, obje içerisindeki diğer alanlara da erişebiliyoruz.
  .setDailyPrice(150)
  .rent(new Date(2023, 5, 30))
  .save();
//#endregion

//#region SOLID

// Single Responsibility Principle (Tek Sorumluluk Prensibi)

// class UserSettings {
//     constructor(user){
//         this.__user = user;
//     }

//     changeSettings(settings){ // Kullanınıcı tercihleri yönetimi
//         if(this.verifyCredentials()){
//             // ... değişiklikler kaydedilir
//             if(settings.newPassword){ // Kullancının hesap bilgilerini yönetimi
//                 // ... şifre değiştirilir
//             }
//         }
//     }

//     // metot kendi başına tek sorumlu gibi gözükse kendini tam olarak temsil etmeyen sınıf içerisinde olduğu için yine tek sorumlu ilkesine uymuyor diyebiliriz.
//     verifyCredentials(){ // Yetkilendirme işlemleri
//         // ... kullanıcı bilgileri kontrol edilir
//     }
// }

class UserSettings {
  constructor(user, userAuth) {
    this.__user = user;
    this.__userAuth = userAuth;
  }

  changeSettings(settings) {
    // Kullanınıcı tercihleri yönetimi
    if (this.__userAuth.verifyCredentials()) {
      // ... değişiklikler kaydedilir
    }
  }
}

class UserAccount {
  constructor(user, userAuth) {
    this.__user = user;
    this.__userAuth = userAuth;
  }

  changePassword(newPassword) {
    if (this.__userAuth.verifyCredentials()) {
      // ... şifre değiştirilir
    }
  }
}

class UserAuth {
  constructor(user) {
    this.__user = user;
  }

  verifyCredentials() {
    // ... kullanıcı bilgileri kontrol edilir
  }
}

const user = { name: "Mehmet", password: "1234", settings: {} };
const userAuth = new UserAuth(user);
const userSettings = new UserSettings(user, userAuth);
const userAccount = new UserAccount(user, userAuth);
userSettings.changeSettings({ emailAds: false, darkMode: true });
userAccount.changePassword("12345");

// Open Closed Principle (Açık Kapalı Prensibi)

// class Adapter{
//     constructor(){}
// }

// class AjaxAdapter extends Adapter{
//     constructor(){
//         super();
//         this.__name = "AjaxAdapter";
//     }

//     getName(){
//         return this.__name;
//     }
// }

// class NodeAdapter extends Adapter{
//     constructor(){
//         super();
//         this.__name = "NodeAdapter";
//     }

//     getName(){
//         return this.__name;
//     }
// }

// class SocketAdapter extends Adapter{
//     constructor(){
//         super();
//         this.__name = "SocketAdapter";
//     }

//     getName(){
//         return this.__name;
//     }
// }

// class HttpRequester {
//     constructor(adapter){
//         this.__adapter = adapter;
//     }

//     fetch(url){
//         if(this.__adapter.getName() === "AjaxAdapter"){
//             return makeAjaxCall(url).then((response) => {});
//         } else if (this.__adapter.getName() === "NodeAdapter"){
//             return makeHttpCall(url).then((response) => {});
//         } else if (this.__adapter.getName() == "SockerAdapter"){
//             return makeSocketCall(url).then((response) => {});
//         }
//     }
// }

// function makeAjaxCall(url){
//     // ... url'e ajax isteği atılır ve promise döner
// }

// function makeHttpCall(url){
//     // ... url'e http isteği atılır ve promise döner
// }

// function makeSocketCall(url){
//     // ... url'e socket isteği atılır ve promise döner
// }

class Adapter {
  constructor() {}

  request(url) {
    // abstract method
    throw new Error("Request method must be implemented");
  }
}

class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.__name = "AjaxAdapter";
  }

  getName() {
    return this.__name;
  }

  request(url) {
    // ... url'e ajax isteği atılır ve promise döner
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.__name = "NodeAdapter";
  }

  getName() {
    return this.__name;
  }

  request(url) {
    // ... url'e http isteği atılır ve promise döner
  }
}

class SocketAdapter extends Adapter {
  constructor() {
    super();
    this.__name = "SocketAdapter";
  }

  getName() {
    return this.__name;
  }

  request(url) {
    // ... url'e socket isteği atılır ve promise döner
  }
}

class HttpRequester {
  constructor(adapter) {
    this.__adapter = adapter;
  }

  fetch(url) {
    // promise döner
    return this.__adapter.request(url).then((response) => {
      // ... response üzerinde ek işlemler yapılabilir
    });
  }
}

const adapter = new SocketAdapter(); // İlgili config veya modül dosyasından Adapter'a karşılık gelen teknoloji alternatifi okunabilir ve değiştirilebilir
const httpRequester = new HttpRequester(adapter);
httpRequester.fetch("https://www.google.com").then((response) => {
  console.log(response);
});

// Liskov Substitution Principle (Liskov'un Yerine Geçme Prensibi)
class User {
  constructor({ id }) {
    this.__id = id;
  }
}
// class Customer extends User {
//   constructor({ id, firstName, lastName, membershipDate, type }) {
//     super({ id });
//     this.__firstName = firstName;
//     this.__lastName = lastName;
//     this.__membershipDate = membershipDate;
//     this.__type = type;
//   }

//   setFirstName(firstName) {
//     if (this.__type === "corporate") {
//       // Kurumsal müşterilere göre işlemler ve kontroller
//       this.__firstName = firstName;
//     } else if (this.__type === "individual") {
//       // Bireysel müşterilere göre işlemler ve kontroller
//       this.__firstName = firstName;
//     }
//     return this;
//   }

//   setLastName(lastName) {
//     if (this.__type === "corporate") {
//       // Kurumsal müşterilere göre işlemler ve kontroller
//       this.__lastName = lastName;
//     } else if (this.__type === "individual") {
//       // Bireysel müşterilere göre işlemler ve kontroller
//       this.__lastName = lastName;
//     }
//     return this;
//   }

//   save() {
//     if (this.__firstName === undefined)
//       throw new Error("First name is required");
//     if (this.__type === "individual" && this.__lastName === undefined) throw new Error("Last name is required");
//   }
// }

// const customer = new Customer({
//   id: 1,
//   firstName: "Ahmet",
//   lastName: "Çetinkaya",
//   membershipDate: "01.01.2020",
// }); // Bireysel Müşterimiz
// const customer2 = new Customer({
//   id: 2,
//   firstName: "Etiya",
//   membershipDate: "01.01.2020",
// }); // Kurumsal Müşterimiz

class Customer extends User {
  constructor({ id, membershipDate }) {
    super({ id });
    this.__membershipDate = membershipDate;
  }
}

class IndividualCustomer extends Customer {
    constructor({ id, firstName, lastName, tcNo, membershipDate }) {
        super({ id, membershipDate });
        this.__firstName = firstName;
        this.__lastName = lastName;
        this.__tcNo = tcNo;
    }
}

class CorporateCustomer extends Customer {
    constructor({ id, companyName, taxNo, membershipDate }) {
        super({ id, membershipDate });
        this.__companyName = companyName;
        this.__taxNo = taxNo;
    }
}

const individualCustomer = new IndividualCustomer({
    id: 1,
    firstName: "Ahmet",
    lastName: "Çetinkaya",
    tcNo: "12345678901",
    membershipDate: "01.01.2020",
}); // Bireysel Müşterimiz
const corporateCustomer = new CorporateCustomer({
    id: 2,
    companyName: "Etiya",
    taxNo: "12345678901",
    membershipDate: "01.01.2020",
}); // Kurumsal Müşterimiz

//#endregion
