const login = () => {
  const email = $("#email").val();
  const passsword = $("#password").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, passsword)
    .then((resp) => {
      window.location.replace("dashboard.html");
    })
    .catch((error) => {
      console.log(error);
    });
};




function register() {
  setTimeout(() => {
    window.location.href = "register.html";
  }, 1000);
}

const backHome = () => {
  window.location.replace("./index.html");
};
