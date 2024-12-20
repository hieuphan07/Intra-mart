// Create order number
var length = $variable.t_response.records.length;

if (length > 1) {
  for (var i = 0; i < length; i++) {
    $variable.t_response.records[i].no = i + 1;
  }
}
