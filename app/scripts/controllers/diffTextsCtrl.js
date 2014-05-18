'use strict';

angular.module('DiffOnlineApp')
  .controller('DiffTextsCtrl',['$scope', 'DiffService', function ($scope, DiffService) {

    $scope.diffTexts = function() {
      DiffService.doDiff($scope.txtSrc, $scope.txtNew);
    };


  }]);
