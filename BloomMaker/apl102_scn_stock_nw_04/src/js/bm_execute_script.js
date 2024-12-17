// Create order number
const length = $variable.t_response.records.length;

if (length > 1) {
  for (let i = 0; i < length; i++) {
    $variable.t_response.records[i].no = i + 1;
  }
}

// Reset error validation messages
$variable.messages.error_validation = '';

// Assign $variable.t_response.records to $variable.insert_request.records
const records = $im.resolve('$variable.t_response.records');
const emptyRequestRecord = $im.resolve('$variable.insert_request.records[0]');
$variable.insert_request.records = [];

const keys = Object.keys($im.resolve('$variable.t_response.records[0]'));
records.forEach((record, i) => {
  const newRecord = {};
  for (const key of keys) {
    newRecord[`p_${key}`] = $variable.t_response.records[i][key];
  }
  $variable.insert_request.records.push(newRecord);
});

// Summary error validations (if any)
/**
 * convertArrayToString
 *
 * @param col<string[]>
 * @return <string>
 */
function convertArrayToString(col) {
  return `Column ${$constant.t_header[col]} ${$variable.insert_response.validation[col].join(', ')}`;
}

const _keys = Object.keys($im.resolve('$variable.insert_response.validation'));
for (const key of _keys) {
  if ($variable.insert_response.validation[key].length > 0 && key !== 'error') {
    $variable.messages.error_validation = $variable.messages.error_validation + convertArrayToString(key) + '\n';
  } else {
    $variable.messages.error_validation;
  }
}

