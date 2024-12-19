const { utils } = require("../../../src/js/apl102_validation_check_nw_04");

describe("Date Validation Tests", () => {
  test("Valid date format", () => {
    expect(utils.isDateValid("2022/01/01 12:00:00")).toBe(true);
  });

  test("Valid date & 24-hour format", () => {
    expect(utils.isDateValid("2024/12/19 22:35:41")).toBe(true);
  });

  test("Invalid date format", () => {
    expect(utils.isDateValid("2022-01-01 12:00:00")).toBe(false);
  });

  test("Empty string", () => {
    expect(utils.isDateValid("")).toBe(false);
  });

  test("Invalid date of February", () => {
    expect(utils.isDateValid("2022/02/30 12:00:00")).toBe(false);
  });

  test("Invalid date of November", () => {
    expect(utils.isDateValid("2022/11/31 19:30:00")).toBe(false);
  });

  test("Valid date with extra characters", () => {
    expect(utils.isDateValid("2022/01/01 12:00:00 extra")).toBe(false);
  });
});
