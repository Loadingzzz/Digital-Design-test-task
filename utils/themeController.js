const themeSwitchButtonDark = document.querySelector(".theme__buttons-dark");
const themeSwitchButtonWhite = document.querySelector(".theme__buttons-white");

const producstItem = ROOT_PRODUCTS.querySelectorAll(".catalog__item");
const headerNav = ROOT_HEADER.querySelector(".header__nav");
const footerNav = ROOT_FOOTER.querySelector(".footer__nav");
const popupForm = document.querySelector(".form");

themeSwitchButtonDark.addEventListener("click", () => {
  themeSwitchButtonWhite.style.display = "block";
  themeSwitchButtonDark.style.display = "none";
  ROOT_PRODUCTS.classList.toggle("products-dark");

  producstItem.forEach((e) => {
    e.classList.remove("catalog__item-white");
    e.classList.toggle("catalog__item-dark");
  });

  headerNav.classList.remove("header__nav");
  headerNav.classList.toggle("header-dark");

  footerNav.classList.remove("footer__nav");
  footerNav.classList.toggle("footer-dark");

  popupForm.classList.remove("form-white");
  popupForm.classList.add("form-dark");
});

themeSwitchButtonWhite.addEventListener("click", () => {
  themeSwitchButtonDark.style.display = "block";
  themeSwitchButtonWhite.style.display = "none";
  ROOT_PRODUCTS.classList.toggle("products-dark");

  producstItem.forEach((e) => {
    e.classList.add("catalog__item-white");
    e.classList.toggle("catalog__item-dark");
  });

  headerNav.classList.add("header__nav");
  headerNav.classList.toggle("header-dark");

  footerNav.classList.add("footer__nav");
  footerNav.classList.toggle("footer-dark");

  popupForm.classList.add("form-white");
  popupForm.classList.remove("form-dark");
});
