/*
---------------
-- apl102_validation_check_nw_04
---------------
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
  isDateValid: function (dateStr) {
    var date = new Date(dateStr);
    var parsedDay = date.getDate().toString().split('.')[0];
    var parsedMonth = (date.getMonth() + 1).toString().split('.')[0];
    var parsedYear = date.getFullYear().toString().split('.')[0];
    if (parsedDay.length === 1) {
      parsedDay = '0' + parsedDay;
    }
    if (parsedMonth.length === 1) {
      parsedMonth = '0' + parsedMonth;
    }
    var inputDay = dateStr.split('/')[2];
    var inputMonth = dateStr.split('/')[1];
    var inputYear = dateStr.split('/')[0];
    return parsedDay === inputDay && parsedMonth === inputMonth && parsedYear === inputYear;
  },
  validateString: function (str) {
    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(str);
  },
  validateNumber: function (num) {
    var regex = /^[0-9]+$/;
    return regex.test(num);
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

