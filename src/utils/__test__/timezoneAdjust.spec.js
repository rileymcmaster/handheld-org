import { addColon, timezoneAdjust } from "../timezoneAdjust";

describe("add colon", () => {
  test("success 4 digits", () => {
    const input = 1755;
    const output = "17:55";
    expect(addColon(input)).toEqual(output);
  });
  test("success 3 digits", () => {
    const input = 655;
    const output = "6:55";
    expect(addColon(input)).toEqual(output);
  });
  test("too many digits", () => {
    const input = 10020;
    const output = "10020";
    expect(addColon(input)).toEqual(output);
  });
});

describe("timezone adjust", () => {
  test("success", () => {
    const input = { sunrise: "11:13", sunset: "22:55", UTC: -500 };
    const output = { sunrise: "6:13", sunset: "17:55", UTC: -500 };

    expect(timezoneAdjust(input)).toEqual(output);
  });
  test("fail", () => {
    const input = { burprise: "11:13", sunset: "22:55", UTC: -500 };
    const output = undefined;

    expect(timezoneAdjust(input)).toEqual(output);
  });
});
