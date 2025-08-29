const inputNameEl = document.querySelector(`#name-input`);
const userOutputEl = document.querySelector(`#name-output`);

inputNameEl.addEventListener(`input`, (event) => {
  const userName = event.target.value.trim();
  if (userName !== ``) {
    userOutputEl.textContent = userName;
  } else {
    userOutputEl.textContent = "Anonymous";
  }
});
