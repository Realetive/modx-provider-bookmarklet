if (typeof jQuery=='undefined') {
  var script        = document.createElement('script')
    , script.src    = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'
    , script.onload = addProvider;
  document.body.appendChild(script);
}
else {
  addProvider();
}

function addProvider(){
  if (typeof MODx != 'undefined' && typeof MODx.load != 'undefined') {
    var action = (MODx.action) ? MODx.action['workspaces'] : 'workspaces';
    if (action == MODx.request.a) {
      var providerName = prompt('Пожалуйста, обязательно введите название поставщика пакетов (по умолчанию: Simple Dream)', 'Simple Dream')
        , providerURL  = prompt('Адрес магазина (тоже обязательно)', 'http://modstore.pro/extras/')
        , userName     = prompt('Имя пользователя', '')
        , userKey      = prompt('Ключ', '')
        , desc         = prompt('Описание', 'Магазин дополнений Simple Dream')
        , win          = MODx.load({xtype : 'modx-window-provider-create'
                                  , record: {name: providerName
                                            , description: desc
                                            , service_url: providerURL
                                            , username   : userName
                                            , api_key    : userKey
                                            }
                                  });
      if (providerName != null && providerURL != null) {
        win.show();
        win.submit();
      }
    } else {
    alert('Похоже, вы не открыли страницу «Управления пакетами». Это произойдёт самостоятельно; пожалуйста, запустите скрипт ещё раз');
    MODx.loadPage(action);
    }
  } else {
    alert('Пожалуйста, запустите этот скрипт в панели управления пакетами MODX вашего сайта');
  }
}
