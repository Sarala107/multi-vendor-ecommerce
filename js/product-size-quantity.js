const imageBtn = document.querySelectorAll("#product-details #imageBtn");
const clothSizes = document.querySelectorAll(".clothSizes");
let imageData = document.querySelector("#imageData");

if (imageBtn) {
  let quantityNumber = document.querySelectorAll(".quantity-number");
  let fixQuantity = document.querySelector("#fixQuantity");

  imageBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      let value = e.target.getAttribute("data-filter");

      let imageId = parseInt(e.target.getAttribute("data-id"));

      imageData.value = imageId;

      fixQuantity.value = 0;

      sizesInput.forEach((si) => {
        si.setAttribute("value", "");
      });

      sizesQuantity.forEach((sq) => {
        sq.value = "";
      });

      sizeList = sizes[index].querySelectorAll("li");

      sizeList.forEach((size) => size.classList.remove("active"));

      clothSizes.forEach((item) => {
        const itemValue = item.getAttribute("id");

        quantityNumber[0].value = 1;

        $(btn).addClass("active").siblings().removeClass("active");

        if (itemValue === value) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }

        if (value === "all") {
          item.classList.add("active");
        }
      });
    });

    clothSizes.forEach((item) => {
      value = imageBtn[0].getAttribute("data-filter");
      itemValue = item.getAttribute("id");

      if (value === "all") {
        item.classList.add("active");
      }

      if (itemValue === value) {
        item.classList.add("active");
      }
    });
  });
}
