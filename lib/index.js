/**
 * Module dependencies.
 */
var AcpStrategy = require('./strategy')
  , setup = require('./setup')

/**
 * Expose constructors.
 */
exports.AcpStrategy = AcpStrategy;

/**
 * Export configuration functions.
 */
exports.disco = function(fn) {
  setup.discovery(fn);
}

exports.config = function(fn) {
  setup.configuration(fn);
}

exports.register = function(fn) {
  setup.registration(fn);
}

/**
 * Expose discovery mechanisms.
 */
exports.discovery = {};
exports.discovery.webfinger = require('./discovery/webfinger');
exports.discovery.lrdd = require('./discovery/lrdd');

/**
 * Expose registration mechanisms.
 */
exports.registration = require('./registration');


exports.disco(require('./discovery/webfinger')());
