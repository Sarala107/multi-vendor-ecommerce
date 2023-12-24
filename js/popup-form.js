const addItemBtn = document.querySelectorAll("#addItem");
const itemEditBtn = document.querySelectorAll(".edit-btn");
const itemDeleteBtn = document.querySelectorAll(".delete-btn");

const popupFormAddItem = document.querySelectorAll("#popup-form-add-item");
const popupFormEditItem = document.querySelectorAll("#popup-form-edit-item");
const popupDeleteConfirm = document.querySelectorAll("#delete-confirm");

const addItemCloseBtn = document.querySelectorAll(".add-item-close-btn");
const editItemCloseBtn = document.querySelectorAll(".edit-item-close-btn");
const deleteCloseCross = document.querySelectorAll("#delete-confirm-close");

const popupBackground = document.querySelector(".side-nav-bg");

const check = (event) => {
  popupBackground.addEventListener("click", () => {
    popupBackground.classList.remove("active");
    const className = event.getAttribute("class");

    if (className === "active") {
      event.removeAttribute("class");
    }
  });
};

if (addItemBtn) {
  addItemBtn.forEach((addItem, idx) => {
    addItem.addEventListener("click", () => {
      popupFormAddItem[idx].classList.add("active");
      popupBackground.classList.add("active");
      check(popupFormAddItem[idx]);
    });
  });
}

if (addItemCloseBtn) {
  addItemCloseBtn.forEach((closeBtn, idx) => {
    closeBtn.addEventListener("click", () => {
      popupFormAddItem[idx].classList.remove("active");
      popupBackground.classList.remove("active");
    });
  });
}

if (itemEditBtn) {
  itemEditBtn.forEach((editBtn, idx) => {
    editBtn.addEventListener("click", () => {
      popupFormEditItem[idx].classList.add("active");
      popupBackground.classList.add("active");
      check(popupFormEditItem[idx]);
    });
  });
}

if (editItemCloseBtn) {
  editItemCloseBtn.forEach((closeBtn, idx) => {
    closeBtn.addEventListener("click", () => {
      popupFormEditItem[idx].classList.remove("active");
      popupBackground.classList.remove("active");
    });
  });
}

if (itemDeleteBtn) {
  itemDeleteBtn.forEach((deleteBtn, idx) => {
    deleteBtn.addEventListener("click", () => {
      popupDeleteConfirm[idx].classList.add("active");
      popupBackground.classList.add("active");
      check(popupDeleteConfirm[idx]);
    });
  });
}

if (deleteCloseCross) {
  deleteCloseCross.forEach((deleteClose, idx) => {
    deleteClose.addEventListener("click", () => {
      popupDeleteConfirm[idx].classList.remove("active");
      popupBackground.classList.remove("active");
    });
  });
}
