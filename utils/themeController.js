const dark = "dark__theme";
const darkCard = "dark__card";
const darkHeader = "dark__header";
const darkFooter = "dark__footer";
const themeSwitchButtonDark = document.querySelector(".switch__theme");
const themeSwitchButtonWhite = document.querySelector(".switch__theme__white");

themeSwitchButtonDark.addEventListener("click", () => {
  themeSwitchButtonWhite.style.display = "block";
  themeSwitchButtonDark.style.display = "none";
  ROOT_PRODUCTS.classList.toggle(dark);
  const producstItem = ROOT_PRODUCTS.querySelectorAll(".card-item");
  producstItem.forEach((e) => {
    e.classList.remove("card-item-white");
    e.classList.toggle(darkCard);
  });

  const headerNav = ROOT_HEADER.querySelector(".header_nav");
  headerNav.classList.remove("header_nav");
  headerNav.classList.toggle(darkHeader);

  const footerNav = ROOT_FOOTER.querySelector(".footer_nav");
  footerNav.classList.remove("footer_nav");
  footerNav.classList.toggle(darkFooter);

  const form = document.querySelector(".payment-form");
  form.classList.remove("white__form");
  form.classList.add("dark__from");
});

themeSwitchButtonWhite.addEventListener("click", () => {
  themeSwitchButtonDark.style.display = "block";
  themeSwitchButtonWhite.style.display = "none";
  ROOT_PRODUCTS.classList.toggle(dark);
  const producstItem = ROOT_PRODUCTS.querySelectorAll(".card-item");
  producstItem.forEach((e) => {
    e.classList.add("card-item-white");
    e.classList.toggle(darkCard);
  });

  const headerNav = ROOT_HEADER.querySelector(".header__nav-wrapper");
  headerNav.classList.add("header_nav");
  headerNav.classList.toggle(darkHeader);

  const footerNav = ROOT_FOOTER.querySelector(".footer__nav-wrapper");
  footerNav.classList.add("footer_nav");
  footerNav.classList.toggle(darkFooter);

  const form = document.querySelector(".payment-form");
  form.classList.add("white__form");
  form.classList.remove("dark__from");
});
