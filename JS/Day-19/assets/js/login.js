
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

  event.preventDefault();

  // Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = document.getElementById("message");

  // Get users from LocalStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find matching user
  const user = users.find(function(user) {

      return user.email === email &&
              user.password === password;

  });

  // Check login
  if (user) {

      message.textContent = "Login successful!";

      console.log("Logged in user:", user);

  } else {

      message.textContent =
          "Invalid email or password.";

  }

});