const form = POPUP__ROOT.querySelector(".form");

const counter = form.counter;

const comment = form.comment;

const activateBtn = document.querySelectorAll(".catalog__item button");

const closeBtn = form.querySelector(".form__buttons-close");

closeBtn.addEventListener("click", () => {
  POPUP__ROOT.style.display = "none";
});

activateBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    POPUP__ROOT.style.display = "block";
  });
});

let color = "";

const colorValidator = () => {
  if (form.radio[0].checked) {
    color = "красного";
  }
  if (form.radio[1].checked) {
    color = "зеленого";
  }
  if (form.radio[2].checked) {
    color = "синего";
  }
  if (form.radio[3].checked) {
    color = "черного";
  }
  return color;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  colorValidator();

  alert(
    `Товар ${color} цвета в колличестве ${
      counter.value >= 5
        ? counter.value + " штук"
        : counter.value <= 1
        ? counter.value + " штука"
        : counter.value + " штуки"
    }${
      !comment.value ? "" : " с коментарием: " + comment.value
    } добавлен в корзину!`
  );

  comment.value = "";
  POPUP__ROOT.style.display = "none";
});
