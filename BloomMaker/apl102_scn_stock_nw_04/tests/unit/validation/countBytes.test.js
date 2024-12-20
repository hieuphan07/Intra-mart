const { countBytes } =
  require('../../../src/ud/js/apl102_validation_check_nw_04').utils;

describe('countBytes', () => {
  test('should return 0 for empty input', () => {
    expect(countBytes('')).toBe(0);
    expect(countBytes(null)).toBe(0);
    expect(countBytes(undefined)).toBe(0);
  });

  test('should count ASCII characters as 1 byte', () => {
    expect(countBytes('abc')).toBe(3);
    expect(countBytes('123')).toBe(3);
  });

  test('should count UTF-8 characters correctly', () => {
    expect(countBytes('あ')).toBe(3); // Japanese character
    expect(countBytes('🌟')).toBe(4); // Emoji
  });
});
