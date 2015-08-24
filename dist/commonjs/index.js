'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

function configure(aurelia) {
  aurelia.globalResources('./modal');
  aurelia.globalResources('./modal-header');
  aurelia.globalResources('./modal-body');
  aurelia.globalResources('./modal-footer');
  aurelia.globalResources('./au-button');
}