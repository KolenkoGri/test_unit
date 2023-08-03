let objects = [
  { login: "Maks", emali: "maks@maks.com", company: "METHED" },
  { login: "Methed", emali: "info@methed.ru", company: "METHED" },
  { login: "Humidor", emali: "tomato@pomodoro.com", company: "cucumber" },
];

const filter = (arr, key, val) => {
  const filtered = arr.filter((el) => {
    return el[key] === val;
  });
  return filtered;
};

export default filter;
