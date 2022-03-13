import { getDayOfWeek, generateWeekArray } from "../calendarHelpers";

describe("generateWeekArray", () => {
  test("create week array", () => {
    const mockDateObj = new Date("2022-03-07T19:04:50-05:00");

    jest.spyOn(global, "Date").mockImplementation(() => mockDateObj);

    const output = [
      { date: "7", day: "Monday" },
      { date: "8", day: "Tuesday" },
      { date: "9", day: "Wednesday" },
      { date: "10", day: "Thursday" },
      { date: "11", day: "Friday" },
      { date: "12", day: "Saturday" },
      { date: "13", day: "Sunday" },
    ];

    expect(generateWeekArray()).toEqual(output);
    jest.restoreAllMocks();
  });
});

describe("get day of week", () => {
  test("get day of week - success", () => {
    const input = "2022-03-12";
    const output = "Saturday";

    expect(getDayOfWeek(input)).toEqual(output);
  });
  test("get day of week - fail", () => {
    const input = "not a date";
    const output = undefined;

    expect(getDayOfWeek(input)).toEqual(output);
  });
});
