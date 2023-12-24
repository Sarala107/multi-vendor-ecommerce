const wishlistBtn = document.querySelectorAll(".wishlist-btn");

wishlistBtn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    wishlistBtn[idx].classList.toggle("active");
  });
});
