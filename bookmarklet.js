if (typeof jQuery=='undefined') {
  var script    = document.createElement('script');
  script.src    = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
  script.onload = addProvider;
  document.body.appendChild(script);
}
else {
  addProvider();
}

function addProvider(){
  if (typeof MODx != 'undefined' && typeof MODx.load != 'undefined') {
    var action = (MODx.action) ? MODx.action['workspaces'] : 'workspaces';
    if (action == MODx.request.a) {
      var providerName = prompt(_('provider_add') + '. ' + _('field_required') + '. ' + _('tv_default') + ': modstore.pro)', 'modstore.pro')
        , providerURL  = prompt(_('provider_url') + '. ' + _('field_required') + '.', 'http://modstore.pro/extras/')
        , userName     = prompt(_('username'), '')
        , userKey      = prompt(_('api_key'), '')
        , desc         = prompt(_('description'), 'Магазин дополнений modstore.pro')
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