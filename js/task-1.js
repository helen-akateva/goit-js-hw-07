const categoriesListEl = document.querySelector("ul#categories");
const items = categoriesListEl.querySelectorAll("li.item");
console.log(`Number of categories:`, items.length);
items.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const categoryElText = titleEl.textContent;
  const listItemsEl = item.querySelectorAll("ul li");
  const elementsCountEl = listItemsEl.length;
  console.log(`Category:`, categoryElText);
  console.log(`Elements:`, elementsCountEl);
});
