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
  var ERROR_MSG = {
    empty: 'has not been entered',
    byteTen: 'only alow characters [0-9] and have 10 bytes',
    byteTwelve: 'input <= 12 bytes',
    byteFourThousands: 'input <= 4000 bytes',
    azNumberCharacterOnly: 'only allow characters [A-Z],[a-z],[0-9]',
    numberCharacterOnly: 'only alow characters [0-9] and have 10 bytes',
    dateFormat: 'entered value have format yyyy/mm/dd hh:mm:ss',
  };

  var response = {
    error: 'false',
  };

  if (utils.countBytes(input.p_partNum) === 0) {
    utils.groupByError('partNum', response, ERROR_MSG.empty);
  }
  if (utils.countBytes(input.p_partNum) > 12) {
    utils.groupByError('partNum', response, ERROR_MSG.byteTwelve);
  }
  if (!utils.isValidString(input.p_partNum)) {
    utils.groupByError('partNum', response, ERROR_MSG.azNumberCharacterOnly);
  }

  if (utils.countBytes(input.p_modelUser) > 4000) {
    utils.groupByError('modelUser', response, ERROR_MSG.byteFourThousands);
  }

  if (utils.countBytes(input.p_rank) > 10) {
    utils.groupByError('rank', response, ERROR_MSG.byteTen);
  }
  if (!utils.isValidNumber(input.p_rank)) {
    utils.groupByError('rank', response, ERROR_MSG.numberCharacterOnly);
  }

  if (utils.countBytes(input.p_quantity) > 10) {
    utils.groupByError('quantity', response, ERROR_MSG.byteTen);
  }
  if (!utils.isValidNumber(input.p_quantity)) {
    utils.groupByError('quantity', response, ERROR_MSG.numberCharacterOnly);
  }

  if (!utils.isValidDate(input.p_boxStartDt)) {
    utils.groupByError('boxStartDt', response, ERROR_MSG.dateFormat);
  }

  if (!utils.isValidDate(input.p_boxEndDt)) {
    utils.groupByError('boxEndDt', response, ERROR_MSG.dateFormat);
  }

  if (utils.countBytes(input.p_boxType) > 4000) {
    utils.groupByError('boxType', response, ERROR_MSG.byteFourThousands);
  }

  return response;
}

var utils = {
  isEmpty: function (text) {
    return (
      text === null || text === undefined || text === '' || text.length === 0
    );
  },

  countBytes: function (text) {
    if (utils.isEmpty(text)) {
      return 0;
    }
    return unescape(encodeURIComponent(text)).length;
  },

  isValidJapanese: function (text) {
    var regex = new RegExp(
      /^([\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\uff10-\uff19])+$/
    );
    return regex.test(text);
  },

  isValidDate: function (dateString) {
    var formatRegex = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/;
    if (!formatRegex.test(dateString)) {
      return false;
    }

    var parts = dateString.split(' ');
    var dateComponents = parts[0].split('/');
    var timeComponents = parts[1].split(':');

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

  isValidString: function (text) {
    return /^[a-zA-Z0-9]+$/.test(text);
  },

  isValidNumber: function (numberString) {
    if (!String.prototype.replaceAll) {
      String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
      };
    }
    var regex = /^[0-9]+$/;
    var parsedNum = numberString.replaceAll(',', '');
    var parts = parsedNum.split('.');
    if (parts.length > 2) {
      return false;
    }
    if (!regex.test(parts[0])) {
      return false;
    }
    if (parts.length === 2 && !regex.test(parts[1])) {
      return false;
    }
    return true;
  },

  groupByError: function (col, group, val) {
    group.error = 'true';
    if (!group[col]) {
      group[col] = [];
    }
    group[col].push(val);
  },
};

module.exports = {
  run: run,
  utils: utils,
};
