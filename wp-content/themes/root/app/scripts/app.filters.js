'use strict';

angular.module('rootApp')
    .filter('objectToArray', function() {
        return function(input) {
            return _.toArray(input);
        };
    })
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    })
    .filter('striphtml', function() {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    })
    .filter('offset', function() {
        return function(input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
        };
    });