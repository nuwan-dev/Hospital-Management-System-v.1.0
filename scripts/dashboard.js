function logOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      window.location.replace("./index.html");
    })
    .catch(function (error) {
      console.error("Sign-out error", error);
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "./login.html";
  }
});

const backDash = () => {
  window.location.href = "./dashboard.html";
};

const doctorDash = () => {
  window.location.href = "./doctor.html";
};

const date = document.querySelector(".current-date");
const currentDate = new Date(); 

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
date.innerHTML = formattedDateTime;


