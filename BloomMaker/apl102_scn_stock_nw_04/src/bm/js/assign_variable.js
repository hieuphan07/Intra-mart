// Assign $variable.t_response.records to $variable.insert_request.records
var records = $im.resolve('$variable.t_response.records');
$variable.insert_request.records = [];

var keys = Object.keys($im.resolve('$variable.t_response.records[0]'));
records.forEach((record, i) => {
  var newRecord = {};
  for (var key of keys) {
    newRecord[`p_${key}`] = record[key];
  }
  $variable.insert_request.records.push(newRecord);
});
