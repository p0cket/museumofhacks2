'use strict';

var app = angular.module('museumOfHacks', ['firebase', 'ui.router']);

app.constant('FURL', 'https://museumofhacks.firebaseio.com/');
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var Main = {
    name: 'main',
    url: '/',
    templateUrl: '../scripts/main/main.html',
    controller: 'mainCtrl'
  };

  $stateProvider.state(Main);
});
