const registerForm = document.querySelector(".login-form");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

emailInput.addEventListener("focus", () => {
  if (!emailInput.value) emailInput.placeholder = "Type area";
});

passwordInput.addEventListener("focus", () => {
  if (!passwordInput.value) passwordInput.placeholder = "Type area";
});

emailInput.addEventListener("blur", () => {
  emailInput.placeholder = "";
});

passwordInput.addEventListener("blur", () => {
  passwordInput.placeholder = "";
});

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({ email: email, password: password });
    form.reset();
  }
}
