/**
 * Checks if a given text contains only valid Japanese characters.
 * @param {string} text - The text to be checked.
 * @returns {boolean} - True if the text contains only valid Japanese characters, false otherwise.
 */
function isValidJapaneseCharacter(text) {
  const regex = /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3400-\u4DBF\uF900-\uFAFF]+$/;
  return regex.test(text);
}

/**
 * Checks if a given date string is a valid date.
 * @param {string} dateString - The date string to be checked.
 * @returns {boolean} - True if the date string is a valid date, false otherwise.
 */
function isValidDate(dateString) {
  const regex = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/;
  if (!regex.test(dateString)) {
    return false;
  }

  const dateParts = dateString.split(/[- :\/]/);
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);
  const hour = parseInt(dateParts[3]);
  const minute = parseInt(dateParts[4]);
  const second = parseInt(dateParts[5]);

  const date = new Date(year, month - 1, day, hour, minute, second);

  return !isNaN(date) && date.toISOString().substring(0, 19) === dateString;
}

module.exports = { isValidJapaneseCharacter, isValidDate };

