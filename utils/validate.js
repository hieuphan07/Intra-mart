/* -------------------------------
-- sf_nimvn1142_bm001_dev32
----------------------------------*/
function run(input) {
  const ERROR_MSG = {
    machine_name: "Machine name has not been entered",
  };
  if (utils.isEmpty(input.machine_name)) {
    return {
      error: true,
      errorMsg: ERROR_MSG.machine_name,
    };
  }
  return {
    error: false,
    errorMsg: null,
  };
}
let utils = {
  isEmpty: function (text) {
    if (
      text === null ||
      text === undefined ||
      text === "" ||
      text.length === 0
    ) {
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
};
