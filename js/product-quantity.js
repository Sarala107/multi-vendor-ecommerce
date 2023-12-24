const imageBtn = document.querySelectorAll("#product-details #imageBtn");
let imageData = document.querySelector("#imageData");

if (imageBtn) {
  let quantityNumber = document.querySelectorAll(".quantity-number");
  let fixQuantity = document.querySelector("#fixQuantity");

  imageBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      let value = e.target.getAttribute("data-filter");

      let imageId = parseInt(e.target.getAttribute("data-id"));

      console.log(quantityNumber);

      imageData.value = imageId;
    });
  });
}
