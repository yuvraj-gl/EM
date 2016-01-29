'use strict';

/* App Module */

var eMApp = angular.module('ExpenseManagerApp', [
  'ngRoute'
]);

eMApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html'
      }).
      when('/expense', {
        templateUrl: 'expense/expense.html',
         controller: 'ExpenseCtrl'
      }).
      when('/income', {
        templateUrl: 'income/income.html',
       // controller: 'IncomeCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);
