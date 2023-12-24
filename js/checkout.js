const paymentOptions = document.querySelectorAll(
  ".payment-option .group-option"
);

const shippingAddress = document.querySelector(" #shippingAddress");
const addresses = document.querySelectorAll(
  ".shipping-details .shipping-list .details"
);

if (paymentOptions) {
  paymentOptions.forEach((paymentOption, idx) => {
    paymentOption.addEventListener("click", () => {
      $(paymentOption).addClass("active").siblings().removeClass("active");
    });
  });
}

if (addresses) {
  const setAddressToInput = (e) => {
    shippingAddress.value = e;
  };

  addresses.forEach((address, idx) => {
    address.addEventListener("click", () => {
      $(address).addClass("active").siblings().removeClass("active");
      setAddressToInput(address.getAttribute("id"));
    });
  });

  addresses[0].classList.add("active");

  setAddressToInput(addresses[0].getAttribute("id"));
}
