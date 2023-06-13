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

//#endregion

