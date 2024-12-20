// Summary error validations (if any)
/**
 * convertArrayToString
 *
 * @param col<string[]>
 * @return <string>
 */
function convertArrayToString(col) {
  return `Column ${
    $constant.t_header[col]
  } ${$variable.insert_response.validation[col].join(", ")}`;
}

const _keys = Object.keys($im.resolve("$variable.insert_response.validation"));
for (const key of _keys) {
  if ($variable.insert_response.validation[key].length > 0 && key !== "error") {
    $variable.messages.error_validation =
      $variable.messages.error_validation + convertArrayToString(key) + "\n";
  } else {
    $variable.messages.error_validation;
  }
}
