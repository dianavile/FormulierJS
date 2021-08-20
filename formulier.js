//declare variables
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//add event Listeners on click event
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//TODO: DEBUG- not yet working
//validateer input formulier in functie on click event
function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == null || username == "") {
    alert("Please enter the username.");
    return false;
  }
  if (password == null || password == "") {
    alert("Please enter the password.");
    return false;
  }
  alert("Login successful");
}

