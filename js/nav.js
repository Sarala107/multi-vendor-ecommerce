// cart-dropdown
const cart = document.querySelector(".cart");
const shoppingCartDropdown = document.querySelector(".shopping-cart-dropdown");

cart.addEventListener("click", () => {
  shoppingCartDropdown.classList.toggle("show-cart-dropdown");
});

// brand-dropdown
const brandDropdown = document.querySelector(".drop-brand");
const brandDropdownBtn = document.querySelector(".drop-down-brand");

$(brandDropdownBtn).click(() => {
  brandDropdown.classList.toggle("active");
});

// drop-down
const dropDown = document.querySelectorAll(".drop-down");
const drop = document.querySelectorAll(".drop");

dropDown.forEach((dd, idx) => {
  $(dd).hover(() => {
    drop[idx].classList.toggle("active");
  });
});

// loading
$(window).on("load", function () {
  $(".loading").fadeOut("slow");
});

// sticky-nav
let lastScrollTop = 0;

let desktopNav = document.querySelector(".desktop-nav");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    desktopNav.style.top = "-150px";
  } else {
    desktopNav.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// side_nav_dropdown
const sideNavDropdown = document.querySelectorAll(".side_nav_dropdown");
const sideNavDrop = document.querySelectorAll(".side_nav_drop");
const rotateArrow = document.querySelectorAll(".rotation");

sideNavDropdown.forEach((sideNavDropBtn, idx) => {
  sideNavDropBtn.addEventListener("click", () => {
    sideNavDrop[idx].classList.toggle("show");
    rotateArrow[idx].classList.toggle("rotate");
  });
});

// side-nav
const sideNav = document.querySelector(".side-nav");
const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavBg = document.querySelector(".side-nav-bg");
const navCloseBtn = document.querySelector(".nav-close-btn");

sideNavBtn.addEventListener("click", () => {
  sideNav.classList.toggle("active");
  sideNavBg.classList.toggle("active");
});

sideNavBg.addEventListener("click", () => {
  sideNav.classList.remove("active");
  sideNavBg.classList.remove("active");
});

navCloseBtn.addEventListener("click", () => {
  sideNav.classList.remove("active");
  sideNavBg.classList.remove("active");
});

let mouse = document.querySelector(".cursor-close");

document.addEventListener("mousemove", (e) => {
  let x = e.x;
  let y = e.y;

  mouse.style.top = y + "px";
  mouse.style.left = x + "px";
});

// search-popup
const searchPop = document.querySelector(".search-pop");
const searchCloseBtn = document.querySelector(".search-close-btn");
const searchPopBtn = document.querySelector(".search-pop-btn");
const searchPopInput = document.querySelector(".search-pop .input");

searchPopBtn.addEventListener("click", () => {
  searchPop.classList.toggle("active");
  searchPopInput.focus();
});

searchCloseBtn.addEventListener("click", () => {
  searchPop.classList.remove("active");
});

// scroll-to-top
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// custom_select

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom_select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
          and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
    except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

const syncColor = document.querySelector("#syncColor");
const fontUrlHere = document.querySelector("#fontUrlHere");

const mainColor = syncColor.getAttribute("main-color");
const priColor = syncColor.getAttribute("pri-color");
const secColor = syncColor.getAttribute("sec-color");
const fontFamily = syncColor.getAttribute("font-family");
const fontUrl = syncColor.getAttribute("font-url");

const setColor = `
<style>
  :root {
    --main: ${mainColor};
    --pri: ${priColor};
    --sec: ${secColor};
  }

  * {
    font-family: ${fontFamily} 
  }
</style>
`;

const linkTag = `
<link href="${fontUrl}" rel="stylesheet">
`;

syncColor.innerHTML = setColor;
fontUrlHere.innerHTML = linkTag;
