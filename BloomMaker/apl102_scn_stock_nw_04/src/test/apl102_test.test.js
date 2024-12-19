test('Valid date format', () => {
  expect(isValidDate('2022/01/01 12:00:00')).toBe(true);
});

test('Valid date & 24-hour format', () => {
  expect(isValidDate('2024/12/19 22:35:41')).toBe(true);
});

test('Invalid date format', () => {
  expect(isValidDate('2022-01-01 12:00:00')).toBe(false);
});

test('Empty string', () => {
  expect(isValidDate('')).toBe(false);
});

test('Invalid date of February', () => {
  expect(isValidDate('2022/02/30 12:00:00')).toBe(false);
});

test('Invalid date of November', () => {
  expect(isValidDate('2022/11/31 19:30:00')).toBe(false);
});

test('Valid date with extra characters', () => {
  expect(isValidDate('2022/01/01 12:00:00 extra')).toBe(false);
});

