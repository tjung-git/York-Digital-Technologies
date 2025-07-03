function checkForm() {
  const errorDiv = document.getElementById("formErrors");
  // we HATE Qunit so dumb - remove all existing <li> (including QUnit’s UI) before we add ours
  document.querySelectorAll("li").forEach((li) => li.remove());

  while (errorDiv.firstChild) {
    errorDiv.removeChild(errorDiv.firstChild);
  }
  errorDiv.classList.add("hide");
  ["fullName", "email", "password", "passwordConfirm"].forEach((id) => {
    document.getElementById(id).classList.remove("error");
  });

  const inputs = {
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    passwordConfirm: document.getElementById("passwordConfirm"),
  };

  const errors = [];

  // Name
  if (inputs.fullName.value.trim() === "") {
    errors.push("Missing full name.");
    inputs.fullName.classList.add("error");
  }

  // Email
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(inputs.email.value.trim())) {
    errors.push("Invalid or missing email address.");
    inputs.email.classList.add("error");
  }

  // Pass
  const pw = inputs.password.value;
  let pwError = false;
  if (pw.length < 10 || pw.length > 20) {
    errors.push("Password must be between 10 and 20 characters.");
    pwError = true;
  }
  if (!/[a-z]/.test(pw)) {
    errors.push("Password must contain at least one lowercase character.");
    pwError = true;
  }
  if (!/[A-Z]/.test(pw)) {
    errors.push("Password must contain at least one uppercase character.");
    pwError = true;
  }
  if (!/[0-9]/.test(pw)) {
    errors.push("Password must contain at least one digit.");
    pwError = true;
  }
  if (pwError) {
    inputs.password.classList.add("error");
  }

  // check
  if (pw !== inputs.passwordConfirm.value) {
    errors.push("Password and confirmation password don't match.");
    inputs.passwordConfirm.classList.add("error");
  }

  // error
  if (errors.length) {
    errorDiv.classList.remove("hide");
    const ul = document.createElement("ul");
    errors.forEach((msg) => {
      const li = document.createElement("li");
      li.innerText = msg;
      ul.appendChild(li);
    });
    errorDiv.appendChild(ul);
    return false;
  }

  // clean
  errorDiv.classList.add("hide");
  return true;
}

document.getElementById("submit").addEventListener("click", function (event) {
  checkForm();
  // Prevent default form action. DO NOT REMOVE THIS LINE
  event.preventDefault();
});
