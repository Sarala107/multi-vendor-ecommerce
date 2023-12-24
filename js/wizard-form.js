const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
// const nextBtnThird = document.querySelector(".next-2");
// const nextBtnFourth = document.querySelector(".next-3");
// const nextBtnFifth = document.querySelector(".next-4");
// const prevBtnFourth = document.querySelector(".prev-3");
// const prevBtnFifth = document.querySelector(".prev-4");
// const prevBtnSixth = document.querySelector(".prev-5");

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-16.66%";
});

nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-33.32%";
});

// nextBtnThird.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-49.98%";
// });

// nextBtnFourth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-66.64%";
// });

// nextBtnFifth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-83.3%";
// });

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-16.66%";
});
// prevBtnFourth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-33.32%";
// });

// prevBtnFifth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-49.98%";
// });

// prevBtnSixth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-66.64%";
// });
