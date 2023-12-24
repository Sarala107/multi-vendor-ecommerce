const sizes = document.querySelectorAll(".size");
const checkSizeNull = document.querySelector(".size");
const sizesInput = document.querySelectorAll("#sizeInput");
const sizesQuantity = document.querySelectorAll("#sizesQuantity");

if (checkSizeNull) {
  sizes.forEach((size, index) => {
    const sizeLists = size.querySelectorAll("li");

    const productSize = (e) => {
      sizesInput[index].setAttribute("value", e);
    };

    const sizeQunatity = (e) => {
      sizesQuantity[index].value = e;
    };

    sizeLists.forEach((sizeList, idx) => {
      sizeList.setAttribute("value", sizeList.innerHTML);

      sizeList.addEventListener("click", () => {
        if (sizeList.getAttribute("value") == sizeList.innerHTML) {
          sizeLists[idx].classList.add("active");
          choosenSize = idx;
        }

        productSize(sizeList.innerHTML);
        sizeQunatity(sizeList.getAttribute("data-value"));

        for (let i = 0; i < sizeLists.length; i++) {
          if (i !== idx) {
            sizeLists[i].classList.remove("active");
          }
        }
      });
    });
  });
}
