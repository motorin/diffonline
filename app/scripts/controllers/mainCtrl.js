'use strict';

angular.module('DiffOnlineApp')
  .controller('MainCtrl', ['$scope', '$location','$http','DiffService', function ($scope, $location, $http, DiffService) {
    var searchObject = $location.search();
    var loadedSources = 0;
    var srcOld = '';
    var srcNew = '';
    $scope.srcOldName = 'Old Source';
    $scope.srcNewName = 'New Source';
    $scope.showResult = false;

    var checkLoaded = function() {
      if( loadedSources === 2) {
        $scope.txtSrc = srcOld;
        $scope.txtNew = srcNew;
        DiffService.setNames( $scope.srcOldName, $scope.srcNewName);
        DiffService.doDiff($scope.txtSrc, $scope.txtNew);
      }
    };

    if( typeof searchObject.s !== 'undefined' && typeof searchObject.d !== 'undefined') {

      $scope.srcOldName = 'Base: ' + searchObject.s;
      $scope.srcNewName = 'New: ' + searchObject.d;

      // Load Base Source
      $http({method: 'GET', url: searchObject.s}).
        success( function(data, status, headers, config) {
          loadedSources++;
          srcOld = data;
          checkLoaded();
        }).
        error( function(data, status, headers, config) {
          console.log('error loading ' + searchObject.s);
        });

      // Load New Source
      $http({method: 'GET', url: searchObject.d}).
        success( function(data, status, headers, config) {
          loadedSources++;
          srcNew = data;
          checkLoaded();
        }).
        error( function(data, status, headers, config) {
          console.log('error loading ' + searchObject.d);
        });

      $scope.showResult = true;

    }

  }]);
