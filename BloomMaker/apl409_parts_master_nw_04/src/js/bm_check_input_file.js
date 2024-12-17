// Reset error flag
$variable.error.no_file = false;
$variable.error.no_csv_excel_file = false;

// Check input file
if (!$variable.upload_file.p_file_name && !$variable.upload_file.p_key) {
  $variable.error.no_file = true;
} else {
  $variable.upload_file.p_file_type =
    $variable.upload_file.p_file_name.split('.')[$variable.upload_file.p_file_name.split('.').length - 1];
  if ($variable.upload_file.p_file_type !== 'csv' && $variable.upload_file.p_file_type !== 'xlsx') {
    $variable.error.no_csv_excel_file = true;
  }
}

