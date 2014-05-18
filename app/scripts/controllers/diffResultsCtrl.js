'use strict';

angular.module('DiffOnlineApp')
  .controller('DiffTextsCtrl',['$scope', 'DiffService', function ($scope, DiffService) {

    $scope.diffTexts = function() {

      DiffService.doDiff($scope.txtSrc, $scope.txtNew);
    };

    $scope.$on('diff.update', function() {
      console.log('show it! Ctrl');
    });


  }]);
