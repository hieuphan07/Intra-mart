const { isValidNumber } =
  require("../../../src/ud/js/apl102_validation_check_nw_04").utils;

describe("Number Validation Tests", () => {
  test("Valid integer should return true", () => {
    expect(isValidNumber("123")).toBe(true);
  });

  test("Valid decimal number should return true", () => {
    expect(isValidNumber("123.456")).toBe(true);
  });

  test("Number with commas should return true", () => {
    expect(isValidNumber("1,234.567")).toBe(true);
  });

  test("Number with multiple commas should return true", () => {
    expect(isValidNumber("1,234,567.89")).toBe(true);
  });

  test("Invalid characters should return false", () => {
    expect(isValidNumber("123abc")).toBe(false);
  });

  test("Special characters should return false", () => {
    expect(isValidNumber("123#456")).toBe(false);
  });

  test("Multiple decimal points should return false", () => {
    expect(isValidNumber("123.456.789")).toBe(false);
  });

  test("Empty string should return false", () => {
    expect(isValidNumber("")).toBe(false);
  });

  test("Negative number should return false", () => {
    expect(isValidNumber("-123.456")).toBe(false);
  });

  test("Number with spaces should return false", () => {
    expect(isValidNumber("123 456")).toBe(false);
  });

  test("Large number with commas should return true", () => {
    expect(isValidNumber("1,234,567,890.12")).toBe(true);
  });

  test("Zero should return true", () => {
    expect(isValidNumber("0.00")).toBe(true);
  });
});
