const vSearchBtn = document.querySelector(".v-search-btn");
const vSearchField = document.querySelector("#v-search-field");
const vSearchInput = document.querySelector("#v-search-input");
const vSearchClose = document.querySelector("#fa-times");

vSearchBtn.addEventListener("click", () => {
  vSearchField.classList.toggle("active");
  vSearchInput.focus();
});
