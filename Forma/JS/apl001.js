var Apl001 = (function () {
  let isEmpty = function (value) {
    return value === undefined || value === null || value === '' || value.length === 0;
  };

  let addToolbarButton = function (name, callback, active_flg) {
    var button = '';
    if (active_flg == undefined) {
      active_flg = true;
    }
    if (!active_flg) {
      button =
        "<li><span class='CC' style='padding: 0.5em 10px 0.45em 10px; display: block;'>" +
        "<font color='gray'>" +
        name +
        '</font></span></li>';
    } else {
      button =
        "<li><a onclick='" +
        callback +
        "' target='_self' class='imui-toolbar-icon'><span class='CC'>" +
        "<font color='#000000'>" +
        name +
        '</font></span></a></li>';
    }

    $('ul[class="imui-list-toolbar"]').append(button);
  };

  let moveTo = function (appId) {
    let param = {};
    param.appId = appId;
    param.target = '_blank';

    openForm(param);
  };

  let selectRowId = function (item) {
    let rowId = $(item).closest('tr[role="row"]').attr('id'),
      rowSelected = formaItems.product_80_gridtable.getItemData.gt1(rowId, ['gt1_insert_id']),
      gt1_insert_id = rowSelected[0].gt1_insert_id;

    let param = {};
    param.appId = 'sf_nimvn_apl002_nw_04';
    param.target = '_blank';
    param.insert_id = gt1_insert_id;

    openForm(param);
  };

  let editRow = () => {
    $('tr[role="row"]').on('click', function () {
      const rowId = $(this).attr('id');
      if (rowId) {
        selectRowId(rowId);
      }
    });

    console.log('function triggered!');
  };

  let openForm = function (param) {
    let href = $('base').attr('href'),
      baseUrl = href ? href : '/';

    if (!param) {
      return;
    }

    let path = `forma/normal/view/regist_application_view/${param.appId}?`;
    if (!isEmpty(param.insert_id)) {
      path = path + `?insert_id=${param.insert_id}`;
    }

    let target = param.target || '_self';

    let f = $('<form/>', { method: 'post', action: baseUrl + path, target: target });
    f.appendTo(document.body);
    f.submit();
    f.remove();
  };

  let getUrlParam = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    var value = decodeURIComponent(results[2].replace(/\+/g, ' '));
    if (value == undefined) {
      value = '';
    }
    return value;
  };

  return {
    init: function () {
      //Set browser title
      document.title = $('.imui-title h1').text();

      let param = {};
      param.appId = 'sf_nimvn_apl002_nw_04';
      param.target = '_blank';

      addToolbarButton('Register', 'Apl001.moveTo("sf_nimvn_apl002_nw_04")');
    },

    isEmpty: isEmpty,
    getUrlParam: getUrlParam,
    moveTo: moveTo,
    openForm: openForm,
    selectRowId: selectRowId,
    editRow: editRow,
  };
})();

window.Apl001 = Apl001;

