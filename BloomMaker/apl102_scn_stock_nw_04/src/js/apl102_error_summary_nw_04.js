/*
----------------
-- apl102_error_summary_nw_04
----------------
*/
/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {
  const response = {};
  response.error = utils.getErrorElement(input.p_error);
  response.partNum = utils.getUniqueElements(input.p_partNum);
  response.modelUser = utils.getUniqueElements(input.p_modelUser);
  response.rank = utils.getUniqueElements(input.p_rank);
  response.quantity = utils.getUniqueElements(input.p_quantity);
  response.salesPlan = utils.getUniqueElements(input.p_salesPlan);
  response.boxStartDt = utils.getUniqueElements(input.p_boxStartDt);
  response.boxEndDt = utils.getUniqueElements(input.p_boxEndDt);
  response.boxType = utils.getUniqueElements(input.p_boxType);
  return response;
}

let utils = {
  getUniqueElements: function (arr) {
    var uniqueElements = [];
    for (var j = 0; j < arr.length; j++) {
      if (uniqueElements.indexOf(arr[j]) === -1) {
        uniqueElements.push(arr[j]);
      }
    }
    return uniqueElements;
  },
  getErrorElement: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'true') {
        return ['true'];
      }
    }
    return ['false'];
  },
};

