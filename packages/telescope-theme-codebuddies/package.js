Package.describe({
  summary: 'Telescope codebuddies theme',
  version: '0.1.0',
  name: 'telescope-theme-codebuddies'
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss'              // SCSS compilation package
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);

  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.addFiles([
    'lib/both.js',
    'lib/routes.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/template.html',
    'lib/client/templates/template.js',
    'lib/client/scss/package.scss'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/publications.js'
  ], ['server']);    

  // i18n languages (must come last)

  api.addFiles([
    'i18n/de.i18n.json',
    'i18n/en.i18n.json',
    'i18n/es.i18n.json',
    'i18n/fr.i18n.json',
    'i18n/it.i18n.json',
    'i18n/zh-CN.i18n.json'
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------

});