'use strict';

angular.module('DiffOnlineApp')
  .directive('diffResults', function() {
    return {
      restrict: 'A',
      controller: ['$scope', 'DiffService', function($scope, DiffService) {
        $scope.diffService = DiffService;
      }],
      link: function($scope, elem) {
        var diffDOMContainer = null;

        var showDiff = function() {

          diffDOMContainer = diffview.buildView({
              baseTextLines: $scope.diffService.oldSrcParsed,
              newTextLines: $scope.diffService.newSrcParsed,
              opcodes: $scope.diffService.opCodes,
              baseTextName: $scope.diffService.baseTextName,
              newTextName: $scope.diffService.newTextName,
              contextSize: $scope.diffService.contextSize,
              viewType: elem
            });

          elem[0].appendChild(diffDOMContainer);
        };

        $scope.$watch('diffService.parseCount', function() {
          if( $scope.diffService.parseCount > 0 ){
            showDiff();
          }
        });
      }
    };
  });