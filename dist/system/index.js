System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalResources('./modal');
    aurelia.globalResources('./modal-header');
    aurelia.globalResources('./modal-body');
    aurelia.globalResources('./modal-footer');
    aurelia.globalResources('./au-button');
  }

  return {
    setters: [],
    execute: function () {}
  };
});