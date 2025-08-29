function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const handleClick = (event) => {
  const color = getRandomHexColor();
  const bodyEl = document.querySelector("body");

  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
};

button.addEventListener("click", handleClick);
