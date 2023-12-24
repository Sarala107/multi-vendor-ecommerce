// quick-view-pop
const quickViewPop = document.querySelectorAll(".quick-view-pop");
const popClose = document.querySelectorAll(".quick-view-close");
const quickViews = document.querySelectorAll(".quick-view");
const popBg = document.querySelector(".side-nav-bg");

if (quickViewPop) {
  quickViews.forEach((quickView, idx) => {
    quickView.addEventListener("click", () => {
      quickViewPop[idx].classList.add("show-quick-view");
      popBg.classList.add("active");
      checkQuickView([idx]);
    });
  });

  popClose.forEach((closePop, idx) => {
    closePop.addEventListener("click", () => {
      quickViewPop[idx].classList.remove("show-quick-view");
      popBg.classList.remove("active");
      checkQuickView([idx]);
    });
  });

  const checkQuickView = (addItemBtn) => {
    popBg.addEventListener("click", () => {
      quickViewPop[addItemBtn].classList.remove("show-quick-view");
    });
  };
}
