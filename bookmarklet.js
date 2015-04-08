var locale = 'en',
    bmLexicon = {
      ru: {
        redirect: 'Похоже, вы не открыли страницу «Управления пакетами». ' +
                  'Это произойдёт автоматически; пожалуйста, запустите ' +
                  'скрипт ещё раз'
      , msgError: 'Пожалуйста, запустите этот скрипт в панели управления ' +
                  'пакетами MODX вашего сайта'
      , provider: 'Магазин дополнений modstore.pro'
      },
      en: {
        redirect: 'You don\'t seem to be viewing the Package Management page. ' +
                  'When you click OK, we will take you there. Please run the ' +
                  'bookmarklet again once the Package Management page has loaded'
      , msgError: 'Please run this script from MODX Package Manager on your site'
      , provider: 'Extras repository modstore.pro'
      }
}

function getLexicon(langKey, locale) {
  var locale = typeof locale !== 'undefined' ? locale : 'en'
    , langValue = bmLexicon[locale].langKey
                ? bmLexicon[locale].langKey
                : bmLexicon['en'].langKey
  return langValue;
}

function addProvider() {
  if ( typeof MODx != 'undefined' && typeof MODx.load != 'undefined' ) {
    var action = ( MODx.action ) ? MODx.action[ 'workspaces' ] : 'workspaces',
        locale = MODx.config.manager_language == 'ru' ? 'ru' : 'en';

    if ( action == MODx.request.a ) {
      var providerName = prompt( _( 'provider_add' ) + '. ' + _( 'field_required' ) +
                                 _( 'tv_default' ) + ': modstore.pro)'
                                , 'modstore.pro' )
        , providerURL  = prompt( _( 'provider_url' ) + '. ' + _( 'field_required' )
                                , 'http://modstore.pro/extras/' )
        , userName     = prompt( _( 'username' ), '' )
        , userKey      = prompt( _( 'api_key' ), '' )
        , desc         = prompt( _( 'description' ), bmLexicon[locale].provider )
        , win          = MODx.load( { 
                                      xtype : 'modx-window-provider-create'
                                    , record: { 
                                                name       : providerName
                                              , description: desc
                                              , service_url: providerURL
                                              , username   : userName
                                              , api_key    : userKey
                                              } } );

      if ( providerName != null && providerURL != null ) {
        win.show();
        win.submit();
        MODx.loadPage( action );
      }
    } else {
      alert( bmLexicon[locale].redirect );
      MODx.loadPage( action );
    }
  } else {
    alert( bmLexicon[locale].msgError );
  }
}

addProvider();