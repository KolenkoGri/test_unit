import filter from "./filter.js";

describe("Фильтр массива объектов по свойству", () => {
  let objects = [
    { login: "Maks", emali: "maks@maks.com", company: "METHED" },
    { login: "Methed", emali: "info@methed.ru", company: "METHED" },
    { login: "Humidor", emali: "tomato@pomodoro.com", company: "cucumber" },
  ];

  it("Найти определенный объект", () => {
    const expected = objects[1];
    const filtered = filter(objects, "emali", "info@methed.ru");
    expect(expected.toString() === filtered.toString()).toBe(true);
  });

  it("Поиск по компании", () => {
    const expected = [objects[0], objects[1]];
    const filtered = filter(objects, "company", "METHED");

    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });
});
