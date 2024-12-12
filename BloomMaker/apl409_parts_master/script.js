// Check file_type
if ($variable.upload_file.file_type !== 'csv' && $variable.upload_file.file_type !== 'xlsx') {
  return true;
}

// Check chosen file
if (
  $variable.upload_file.file_name === null ||
  $variable.upload_file.file_name === '' ||
  $variable.upload_file.file_name === undefined
) {
  return true;
}
