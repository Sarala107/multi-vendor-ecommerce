const productComment = document.querySelector(".product-comment");

if (productComment) {
  const comments = document.querySelectorAll(".product-comment .item");
  const loadMoreBtn = document.querySelector(".product-comment .load-more-btn");
  let noOfItems = 1;

  const loadComment = () => {
    comments.forEach((comment, idx) => {
      if (idx < noOfItems) {
        comment.classList.add("active");
      } else {
        comment.classList.remove("active");
      }
    });
  };
  loadComment();

  loadMoreBtn.addEventListener("click", () => {
    loadComment();

    if (comments.length <= noOfItems) {
      loadMoreBtn.innerHTML = "Load Less";
      noOfItems = 1;
    } else {
      loadMoreBtn.innerHTML = "Load More";
      noOfItems += 1;
    }
  });
}
