var Apl002 = (function () {
  let isEmpty = function (value) {
    return value === undefined || value === null || value === '' || value.length === 0;
  };
  /**
   * Call save IM data
   * @param {*} param
   * @param {*} nextPageUrl
   */

  let registDataBySys = function (param, nextPageUrl) {
    document.forms.imfr_next_form.action = nextPageUrl || window.location;

    var page_param = param || {};
    var upp_page_param = JSON.stringify(page_param);

    $('#imfr-next-form').append($("<input type='hidden' name='upp_page_param'></input>").val(upp_page_param));

    sendRegistData();
  };

  let openForm = function (params) {
    let href = $('base').attr('href'),
      baseUrl = href ? href : '/';

    if (!params) {
      return;
    }

    let path = `forma/normal/view/regist_application_view/${params.appId}?`;

    let target = params.target || '_self';

    let f = $('<form/>', { method: 'post', action: baseUrl + path, target: target });
    f.appendTo(document.body);
    f.submit();
    f.remove();
  };

  return {
    init: function () {
      //Set browser title
      document.title = $('.imui-title h1').text();
    },

    isEmpty: isEmpty,
    registDataBySys: registDataBySys,
    openForm: openForm,
  };
})();

window.Apl002 = Apl002;

