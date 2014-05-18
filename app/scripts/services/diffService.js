'use strict';

angular.module('DiffOnlineApp')
  .factory('DiffService', ['$rootScope', function ($rootScope) {
    return {
      parseCount: 0,
      oldSrcParsed: '',
      newSrcParsed: '',
      sequenceMatched: null,
      opCodes: null,
      contextSize: null,
      baseTextName: 'Base text',
      newTextName: 'New text',

      setNames: function( baseTextName, newTextName ){
        this.baseTextName = baseTextName;
        this.newTextName = newTextName;
      },

      doDiff: function(oldSrc, newSrc, contextSize) {
        this.oldSrcParsed    = difflib.stringAsLines(oldSrc);
        this.newSrcParsed    = difflib.stringAsLines(newSrc);
        this.sequenceMatched = new difflib.SequenceMatcher( this.oldSrcParsed, this.newSrcParsed);

        this.opCodes = this.sequenceMatched.get_opcodes();
        this.contextSize = contextSize || null;

        this.parseCount++;
      },
    };
  }]);
