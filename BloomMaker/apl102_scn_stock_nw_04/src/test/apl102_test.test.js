const { isValidJapaneseCharacter } = require('./apl102_test');
const { isValidDate } = require('./apl102_test');

// Testing isValidJapaneseCharacter function
test('Valid Japanese characters', () => {
  expect(isValidJapaneseCharacter('こんにちは')).toBe(true);
});

test('Invalid Japanese characters', () => {
  expect(isValidJapaneseCharacter('Hello')).toBe(false);
});

test('Empty string', () => {
  expect(isValidJapaneseCharacter('')).toBe(false);
});

test('Mixed Japanese and non-Japanese characters', () => {
  expect(isValidJapaneseCharacter('こんにちはHello')).toBe(false);
});

test('Japanese characters with spaces', () => {
  expect(isValidJapaneseCharacter('こんにちは さようなら')).toBe(false);
});

// Testing isValidDate function
test('Valid date format', () => {
  expect(isValidDate('2022/01/01 12:00:00')).toBe(true);
});

test('Invalid date format', () => {
  expect(isValidDate('2022-01-01 12:00:00')).toBe(false);
});

test('Empty string', () => {
  expect(isValidDate('')).toBe(false);
});

test('Invalid date', () => {
  expect(isValidDate('2022/02/30 12:00:00')).toBe(false);
});

test('Valid date with extra characters', () => {
  expect(isValidDate('2022/01/01 12:00:00 extra')).toBe(false);
});

