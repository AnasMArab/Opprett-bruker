function sendInn() {
  console.log("hello");
  let email;
  let passord;
  let gjentapassord;
  email = document.getElementById("email").value;
  passord = document.getElementById("passord").value;
  gjentapassord = document.getElementById("gjentapassord").value;
  console.log(email);
  console.log(passord);
  console.log(gjentapassord);

  if (passord === gjentapassord) {
    console.log("this is correct save to local storage");
    localStorage.setItem("email", email);
    localStorage.setItem("passord", passord);
    window.location.href="http://127.0.0.1:5500/"
  } else {
    console.log("passwords are not the same");
    console.log(email, passord);
  }
}
function loggInn() {
    console.log("hallooooo anas");
}





function loggInn(){
    console.log("logger inn");

    let email= document.getElementById("email").value;
    let passord= document.getElementById("passord").value;
    console.log(email,passord);
    let localStorageemail=localStorage.getItem("email")
    let localStoragepassord=localStorage.getItem("passord")
    console.log(email,passord,localStorageemail,localStoragepassord);
    if(email===localStorageemail && passord === localStoragepassord){
        window.location.href="http://127.0.0.1:5500/html/welcome.html"
    }
}
  







