const checkoutPage = document.querySelector(".checkout-page .table");
const productDetails = document.querySelectorAll("#product-details");
const allSize = document.querySelectorAll("#all-size li");
const imageBtn = document.querySelectorAll("#product-details #imageBtn");

if (checkoutPage) {
  const checkOutPageItem = document.querySelectorAll(".checkout-page .item");
  const increaseBtns = document.querySelectorAll(".add-button");
  const decreaseBtns = document.querySelectorAll(".sub-button");
  let quantityNumber = document.querySelectorAll(".quantity-number");
  const productPrice = document.querySelectorAll("#price");
  const discountPrice = document.querySelectorAll("#discountPrice");
  let productTotalPrice = document.querySelectorAll("#product-price");
  const shippingPrice = document.querySelector("#shipping-price");
  let totalPrice = document.querySelector("#total-price");
  let grandTotal = document.querySelectorAll("#grand-total");
  const forcedClicked = document.querySelectorAll("#forcedClicked");
  const totalPriceSubmit = document.querySelectorAll("#total-price-submit");
  let tryPrice = document.querySelectorAll(".innerPrice");
  let checkoutButton = document.querySelector(".continue-shopping button");
  const productSizeQuantity = document.querySelectorAll("#productSizeQuantity");

  const check = (event, index, fixQuantity) => {
    if (parseInt(event.value) <= 1) {
      decreaseBtns[index].classList.add("disabled");
    } else {
      decreaseBtns[index].classList.remove("disabled");
    }

    if (parseInt(event.value) >= parseInt(fixQuantity)) {
      increaseBtns[index].classList.add("disabled");
      decreaseBtns[index].removeAttribute("disabled");
    } else {
      increaseBtns[index].classList.remove("disabled");
      decreaseBtns[index].removeAttribute("disabled");
    }

    // let arr = [];

    // productTotalPrice.forEach((singlePrice, idx) => {
    //   arr[idx] = parseInt(singlePrice.value);
    // });

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }

    // totalPrice.value = sum;

    // grandTotal.forEach((gt) => {
    //   gt.value = sum + parseInt(shippingPrice.value);
    // });
  };

  checkOutPageItem.forEach((checkOutItem, idx) => {
    let currentPrice = productPrice[idx].value;
    let currentDiscountPrice = discountPrice[idx].value;

    let discountedPrice = currentPrice - currentDiscountPrice;

    let fixQuantity = productSizeQuantity[idx].getAttribute("data-value");

    increaseBtns[idx].addEventListener("click", (event) => {
      event.preventDefault();

      quantityNumber[idx].stepUp(1);

      let textPrice = productTotalPrice[idx].stepUp(discountedPrice);

      tryPrice[idx].innerHTML = productTotalPrice[idx].value;

      check(quantityNumber[idx], (index = idx), fixQuantity);
    });

    decreaseBtns[idx].addEventListener("click", (event) => {
      event.preventDefault();

      quantityNumber[idx].stepUp(-1);

      productTotalPrice[idx].stepUp(-discountedPrice);

      tryPrice[idx].innerHTML = productTotalPrice[idx].value;

      check(quantityNumber[idx], (index = idx), fixQuantity);
    });
  });

  totalPriceSubmit.forEach((selectedPrice, idx) => {
    // console.log(selectedPrice);

    selectedPrice.addEventListener("change", (e) => {
      forcedClicked[idx].click();
      // console.log(e.target.checked);

      // let checkedBox = e.target.checked;

      // console.log(selectedPrice);

      // if (checkedBox === true) {
      //   checkoutButton.removeAttribute("disabled");
      // }
      // if (checkedBox === false) {
      //   checkoutButton.setAttribute("disabled", "disabled");
      // }

      // console.log(totalPriceSubmit[idx].checked);

      // console.log(checkedBox);
    });
  });

  const confirm = () => {
    quantityNumber.forEach((qn, index) => {
      let fixQuantity = productSizeQuantity[index].getAttribute("data-value");

      // if (parseInt(qn.value) <= 1) {
      //   decreaseBtns[index].setAttribute("disabled", "disabled");
      // } else {
      //   decreaseBtns[index].removeAttribute("disabled");
      // }

      if (parseInt(qn.value) <= 1) {
        decreaseBtns[index].classList.add("disabled");
      } else {
        decreaseBtns[index].classList.remove("disabled");
      }

      if (parseInt(qn.value) >= parseInt(fixQuantity)) {
        increaseBtns[index].classList.add("disabled");
        decreaseBtns[index].removeAttribute("disabled");
      } else {
        increaseBtns[index].classList.remove("disabled");
        decreaseBtns[index].removeAttribute("disabled");
      }
    });

    productPrice.forEach((prices, idx) => {
      productTotalPrice[idx].value =
        (parseInt(prices.value) - parseInt(discountPrice[idx].value)) *
        parseInt(quantityNumber[idx].value);
    });

    // let allSums = 0;

    // productTotalPrice.forEach((ptp, idx) => {
    //   allSums += parseInt(ptp.value);
    // });

    // totalPrice.value = allSums;

    // grandTotal.forEach((gt) => {
    //   gt.value = allSums + parseInt(shippingPrice.value);
    // });
  };

  confirm();
}

if (productDetails) {
  const increaseBtns = document.querySelectorAll(".add-button");
  const decreaseBtns = document.querySelectorAll(".sub-button");
  let quantityNumber = document.querySelectorAll(".quantity-number");
  // let productPrice = document.querySelectorAll("#product-price");
  // let productPriceText = document.querySelector("#product-price-text span");
  let fixQuantity = document.querySelector("#fixQuantity");

  productDetails.forEach((productDetail, idx) => {
    // let currentPrice = productPrice[idx].value;

    const check = () => {
      if (parseInt(quantityNumber[idx].value) <= 1) {
        decreaseBtns[idx].classList.add("disabled");
      } else {
        decreaseBtns[idx].classList.remove("disabled");
      }

      if (parseInt(quantityNumber[idx].value) >= parseInt(fixQuantity.value)) {
        increaseBtns[idx].classList.add("disabled");
        decreaseBtns[idx].removeAttribute("disabled");
      } else {
        increaseBtns[idx].classList.remove("disabled");
        decreaseBtns[idx].removeAttribute("disabled");
      }
    };

    increaseBtns[idx].addEventListener("click", (event) => {
      event.preventDefault();

      quantityNumber[idx].stepUp(1);

      // productPrice[idx].stepUp(currentPrice);

      // productPriceText.innerHTML = productPrice[idx].value;

      check();
    });

    decreaseBtns[idx].addEventListener("click", (event) => {
      event.preventDefault();

      quantityNumber[idx].stepUp(-1);

      // productPrice[idx].stepUp(-currentPrice);

      // productPriceText.innerHTML = productPrice[idx].value;

      check();
    });

    allSize.forEach((size) => {
      size.addEventListener("click", (e) => {
        let sizeValue = e.target.getAttribute("data-value");

        fixQuantity.value = sizeValue;
        quantityNumber[idx].value = 1;

        quantityNumber[idx].addEventListener("change", () => {
          check();
        });
        check();
      });
    });

    imageBtn.forEach((button) => {
      button.addEventListener("click", () => {
        check();
      });
    });

    check();
  });
}

const clothSizes = document.querySelectorAll(".clothSizes");
const checkIfNull = document.querySelector(".clothSizes");
let imageData = document.querySelector("#imageData");

if (imageBtn) {
  let quantityNumber = document.querySelectorAll(".quantity-number");
  let fixQuantity = document.querySelector("#fixQuantity");
  let resetFixQty = document.querySelectorAll(".quick-view");
  let images = document.querySelectorAll(".product-details-page .images");
  let popUpImages = document.querySelectorAll(".quick-view-pop .images");

  imageBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      $(btn).addClass("active").siblings().removeClass("active");

      let value = e.target.getAttribute("data-filter");

      let sizeData = e.target.getAttribute("data-size");

      let imageId = parseInt(e.target.getAttribute("data-id"));

      imageData.value = imageId;

      sizesInput.forEach((si) => {
        si.setAttribute("value", "");
      });

      sizesQuantity.forEach((sq) => {
        sq.value = "";
      });

      resetFixQty.forEach((rq) => {
        rq.addEventListener("click", () => {
          fixQuantity.value = 0;
          quantityNumber.forEach((qn) => {
            qn.value = 0;
          });
        });
      });

      images.forEach((image) => {
        imageId = image.getAttribute("id");

        if (imageId === value) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });

      popUpImages.forEach((image) => {
        imageId = image.getAttribute("id");

        if (imageId === value) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });

      if (sizeData === "true") {
        let sizeList = clothSizes[index].querySelectorAll("li");
        sizeList.forEach((size) => size.classList.remove("active"));

        clothSizes.forEach((item) => {
          const itemValue = item.getAttribute("id");

          quantityNumber.forEach((qn) => {
            qn.value = 1;
          });

          if (itemValue === value) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }

          if (value === "all") {
            item.classList.add("active");
          }
        });
      }

      if (sizeData === "false") {
        let imageId = parseInt(e.target.getAttribute("data-id"));

        let colorQuantity = parseInt(e.target.getAttribute("data-color-qty"));

        fixQuantity.value = parseInt(colorQuantity);

        // quantityNumber[0].value = 1;
        quantityNumber.forEach((qn) => {
          qn.value = 1;
        });

        imageData.value = imageId;

        setTimeout(btn.click(), 100);

        // console.log(fixQuantity.value);
      }
    });

    if (clothSizes) {
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
    }
  });
}

const categoriesInputBtn = document.querySelectorAll(".product-side-bar input");
const submitCategories = document.querySelector("#submitCategories");

if (categoriesInputBtn) {
  categoriesInputBtn.forEach((btn) => {
    btn.addEventListener("change", (e) => {
      clicked = e.target.checked;

      if (clicked) {
        submitCategories.click();
      }
    });
  });
}
// export const ALL_PRODUCT = [
//   {
//     id: 1,
//     imageURL: "image.jpg",
//     productName: "Cap",
//     productDesc: "Hello Wordls",
//     color: [
//       {
//         uid: 1,
//         color1: "colorImage1.jpg",
//         sizes: [
//           {
//             size: "M",
//             quantity: 5,
//           },
//           {
//             size: "S",
//             quantity: 2,
//           },
//           {
//             size: "XXS",
//             quantity: 7,
//           },
//           {
//             size: "XXL",
//             quantity: 4,
//           },
//         ],
//       },
//     ],
//   },
// ];

const detailsPageImagePopupImg = document.querySelector(
  ".details-page-image-popup img"
);

const detailsPageImagePopup = document.querySelector(
  ".details-page-image-popup"
);

if (detailsPageImagePopupImg) {
  const detailsPageImagePopupClose =
    document.querySelector(".close-image-popup");

  const detailsPageImage = document.querySelectorAll(
    ".product-details-page .image-preview #img"
  );

  detailsPageImage.forEach((imageBtn) => {
    imageBtn.addEventListener("click", (e) => {
      let image = e.target;

      let imagePath = image.getAttribute("src");

      detailsPageImagePopupImg.setAttribute("src", imagePath);

      detailsPageImagePopup.classList.add("active");

      sideNavBg.classList.add("active");
    });
  });

  detailsPageImagePopupClose.addEventListener("click", () => {
    detailsPageImagePopupImg.removeAttribute("src");

    detailsPageImagePopup.classList.remove("active");

    sideNavBg.classList.remove("active");
  });

  sideNavBg.addEventListener("click", () => {
    detailsPageImagePopupImg.removeAttribute("src");

    detailsPageImagePopup.classList.remove("active");

    sideNavBg.classList.remove("active");
  });

  const zooms = document.querySelectorAll("#zoom");

  let windowCurrentWidth = window.innerWidth;

  const checkWindowWidth = () => {
    zooms.forEach((zoom) => {
      if (windowCurrentWidth >= 500) {
        $(zoom).zoom({ on: "mouseover" });
      }
    });
  };

  window.addEventListener("resize", (e) => {
    let widowWidth = e.target.innerWidth;

    windowCurrentWidth = widowWidth;
    checkWindowWidth();
  });
}
