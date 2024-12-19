/**
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

  // Check if the date is valid
  if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
    return false;
  }

  const formattedDateString = `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')} ${String(
    hour,
  ).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;

  return !isNaN(date) && formattedDateString === dateString;
}

module.exports = isValidDate;
