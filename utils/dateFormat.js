const getDayInfo = function getDateFull(day) {
  const week = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
  };

  const month = {
    0: "Января",
    1: "Февраля",
    2: "Марта",
    3: "Апреля",
    4: "Мая",
    5: "Июня",
    6: "Июля",
    7: "Августа",
    8: "Сентября",
    9: "Октября",
    10: "Ноября",
    11: "Декабря",
  };

  const inputDate = new Date(day);
  const numberOfWeeks = Math.ceil(inputDate.getDate() / 7);

  let result = "";
  result = inputDate;

  result = week[inputDate.getDay()] + ",";

  result += " " + numberOfWeeks + " неделя";

  result += " " + month[inputDate.getMonth()];

  result += " " + inputDate.getFullYear() + " года";

  return result;
};
