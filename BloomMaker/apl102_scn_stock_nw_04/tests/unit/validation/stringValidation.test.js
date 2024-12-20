const { isValidString } =
  require('../../../src/ud/js/apl102_validation_check_nw_04').utils;

describe('isValidString', () => {
  test('should return true for alphanumeric strings', () => {
    expect(isValidString('abc123')).toBe(true);
    expect(isValidString('ABC123')).toBe(true);
    expect(isValidString('123')).toBe(true);
  });

  test('should return false for non-alphanumeric strings', () => {
    expect(isValidString('abc 123')).toBe(false);
    expect(isValidString('abc-123')).toBe(false);
    expect(isValidString('abc!')).toBe(false);
    expect(isValidString('あいうえお')).toBe(false);
  });
});
