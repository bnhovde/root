'use strict';

angular.module('rootApp')
    .controller('searchCtrl', function($scope, $rootScope, $q, SEARCH) {

        console.log('loading search controller');

        $scope.tags = [];
        $scope.itemsLimit = 50;

        // load tags from the WordPress API
        var tagPromise = SEARCH.query();

        $q.all([
            tagPromise.$promise
        ]).then(function() {

            var postData = tagPromise;
            $scope.tags = postData;

        }).catch(function(err) {
            err = err.data;
            $scope.errors.other = err.message;
        });

    });