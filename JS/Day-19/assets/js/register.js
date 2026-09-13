const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {

        document.getElementById("message").textContent =
            "Please fill all fields.";

        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

  let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {

        document.getElementById("message").textContent =
            "Email already registered.";

        return;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("message").textContent =
        "Registration successful!";

    registerForm.reset();

});
