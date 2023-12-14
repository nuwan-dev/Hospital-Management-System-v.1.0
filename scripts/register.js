const register = () => {
  const email = $("#email").val();
  const passsword = $("#password").val();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, passsword)
    .then((cred) => {
      console.log(cred);
      console.log(cred.user);
    })
    .catch(() => {
      console.log(error);
    });
};

function login() {
  window.location.href = "login.html";
}

const backHome = () => {
  window.location.replace("./index.html");
};