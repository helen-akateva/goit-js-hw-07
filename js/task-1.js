const categoriesListEl = document.querySelector("ul#categories");
const items = categoriesListEl.querySelectorAll("li.item");

console.log(`Number of categories:`, items.length);

items.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const categoryNameEl = titleEl.textContent;
  const listItemsEl = item.querySelectorAll("ul li");
  const elementsCount = listItemsEl.length;

  console.log(`Category:`, categoryNameEl);
  console.log(`Elements:`, elementsCount);
});
