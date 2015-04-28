angular.module('app', [
  // dependencies
  'ui.router',
  'app.menu',
  'app.game'
]);
// the reason for using ui.router is so that each module will be responsible
// for building their own route dependencies
