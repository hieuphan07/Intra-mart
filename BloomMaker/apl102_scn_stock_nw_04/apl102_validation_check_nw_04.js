/*
----------------
-- apl102_validation_check_nw_04
----------------
*/
/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {
  // Error messages
  const ERROR_MSG = {
    empty: 'has not been entered',
    byteTen: 'input <= 10 bytes',
    byteTwelve: 'input <= 12 bytes',
    byteFourThousands: 'input <= 4000 bytes',
    azNumberCharacterOnly: 'only allow characters [A-Z],[a-z],[0-9]',
    numberCharacterOnly: 'only allow characters [0-9]',
    dateFormat: 'entered value not match format YYYY/MM/DD hh:mm:ss',
  };
  // Response message
  const response = {
    error: 'false',
  };
  // Check validation
  if (utils.countBytes(input.p_partNum) === 0) {
    utils.groupByError('partNum', response, ERROR_MSG.empty);
  }
  if (utils.countBytes(input.p_partNum) > 12) {
    utils.groupByError('partNum', response, ERROR_MSG.byteTwelve);
  }
  if (!utils.validateString(input.p_partNum)) {
    utils.groupByError('partNum', response, ERROR_MSG.azNumberCharacterOnly);
  }
  if (utils.countBytes(input.p_modelUser) > 4000) {
    utils.groupByError('modelUser', response, ERROR_MSG.byteFourThousands);
  }
  if (utils.countBytes(input.p_rank) > 10) {
    utils.groupByError('rank', response, ERROR_MSG.byteTen);
  }
  if (!utils.validateNumber(input.p_rank)) {
    utils.groupByError('rank', response, ERROR_MSG.numberCharacterOnly);
  }
  if (utils.countBytes(input.p_quantity) > 10) {
    utils.groupByError('quantity', response, ERROR_MSG.byteTen);
  }
  if (!utils.validateNumber(input.p_quantity)) {
    utils.groupByError('quantity', response, ERROR_MSG.numberCharacterOnly);
  }
  if (!utils.isDateValid(input.p_boxStartDt)) {
    utils.groupByError('boxStartDt', response, ERROR_MSG.dateFormat);
  }
  if (!utils.isDateValid(input.p_boxEndDt)) {
    utils.groupByError('boxEndDt', response, ERROR_MSG.dateFormat);
  }
  if (utils.countBytes(input.p_boxType) > 4000) {
    utils.groupByError('boxType', response, ERROR_MSG.byteFourThousands);
  }

  return response;
}

let utils = {
  isEmpty: function (text) {
    if (text === null || text === undefined || text === '' || text.length === 0) {
      return true;
    }
  },
  countBytes: function (text) {
    if (utils.isEmpty(text)) {
      return 0;
    }
    let s = unescape(encodeURIComponent(text));
    return s.length;
  },
  isJapanese: function (ch) {
    var regex = new RegExp(/^([\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\uff10-\uff19])+$/);
    return regex.test(ch);
  },
  isDateValid: function (dateString) {
    var formatRegex = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/;
    if (!formatRegex.test(dateString)) {
      return false;
    }
    var parts = dateString.split(' ');
    var datePart = parts[0];
    var timePart = parts[1];
    var dateComponents = datePart.split('/');
    var timeComponents = timePart.split(':');
    var year = parseInt(dateComponents[0], 10);
    var month = parseInt(dateComponents[1], 10);
    var day = parseInt(dateComponents[2], 10);
    var hours = parseInt(timeComponents[0], 10);
    var minutes = parseInt(timeComponents[1], 10);
    var seconds = parseInt(timeComponents[2], 10);
    if (month < 1 || month > 12) {
      return false;
    }
    // Validate day based on the month and year (accounting for leap years)
    var daysInMonth = [
      31, // January
      year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31, // December
    ];
    if (day < 1 || day > daysInMonth[month - 1]) {
      return false;
    }
    if (hours < 0 || hours > 23) {
      return false;
    }
    if (minutes < 0 || minutes > 59) {
      return false;
    }
    if (seconds < 0 || seconds > 59) {
      return false;
    }
    return true;
  },
  validateString: function (str) {
    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(str);
  },
  validateNumber: function (num) {
    if (!String.prototype.replaceAll) {
      String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
      };
    }
    var parsedNum = num.replaceAll(',', '');
    var number = parsedNum.split('.')[0];
    var decimal = parsedNum.split('.')[1];
    var regex = /^[0-9]+$/;
    return regex.test(number) && regex.test(decimal);
  },
  groupByError: function (col, group, val) {
    group.error = 'true';
    if (!group[col]) {
      group[col] = [];
    }
    group[col].push(val);
  },
  convertToString: function (num) {
    if (num.toString().includes('.')) {
      return num.toString().split('.')[0];
    } else {
      return num.toString();
    }
  },
};

