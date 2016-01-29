/**
 * @desc Controller for the expenses
 * @namespace ExpenseCtrl
 */

(function () {
  'use strict';
  eMApp.controller('ExpenseCtrl', ['$scope',
    function ($scope ) {

      /**
       * @desc Array of expenses object
       * @memberOf ExpenseCtrl
       */
      $scope.expenses = [{
          id : 0,
          payer: 'Yuvi',
          payee: 'Hemant',
          category: 'Rent',
          subCategory: 'sub',
          amount: '1000',
          date: '28/01/16',
          modeOfPayment: 'cash',
          contenteditable: true
        }, {
          id : 1,
          payer: 'Kailas',
          payee: 'Ankit',
          category: 'Rent',
          subCategory: 'sub',
          amount: '2000',
          date: '28/01/16',
          modeOfPayment: 'cash',
        contenteditable: false
        }, {
          id : 2,
          payer: 'Akshay',
          payee: 'Amey',
          category: 'Rent',
          subCategory: 'sub',
          amount: '3000',
          date: '28/01/16',
          modeOfPayment: 'cash',
          contenteditable: false
        }
      ];

      $scope.composeData = {};
      $scope.editable = false;

      $scope.compose = function(transaction){
        $scope.editable = true;
        $scope.composeData = transaction;
      };
  
      $scope.saveComposition = function () {
        $scope.editable = false;
      }

    }]);
})();