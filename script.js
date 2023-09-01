const loginButton = document.getElementById("login-form-submit");
const loginForm = document.getElementById("login-form")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  
  if (username === "Vinkks" && password === "password") {
        alert("You have successfully logged in.");
        
    } else {
        alert("Your login Was Unsuccessful, Try Again");
    }
})
