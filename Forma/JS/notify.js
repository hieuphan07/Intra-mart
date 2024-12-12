var duration = duration || 2000;
imuiShowSuccessMessage('Save success.', [], true, duration);

setTimeout(() => {
  window.Apl002.registDataBySys(
    null,
    'http://150.230.202.111/imsl/forma/normal/view/regist_application_view/sf_nimvn_apl001_<employee_code>',
  );
}, 2000);
