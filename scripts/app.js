'use strict';

var app = angular.module('museumOfHacks', ['firebase', 'ui.router']);

app.constant('FURL', 'https://https://museumofhacks.firebaseio.com/');
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var Main = {
    name: 'mainCtrl',
    url: '/',
    templateUrl: '../scripts/main/main.html'
  };

  $stateProvider.state(Main);
});
