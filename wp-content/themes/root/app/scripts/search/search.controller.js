
angular.module('rootApp')
    .controller('searchCtrl', function($scope, $rootScope, $q, TAGS, POSTS) {
    
        'use strict';

        console.log('loading search controller');

        $scope.tags = [];
        $scope.itemsLimit = 50;

        // load tags from the WordPress API
        var tagPromise = TAGS.query();
        var articlePromise = POSTS.query();

        $q.all([
            tagPromise.$promise,
            articlePromise.$promise
        ]).then(function() {

            var tagData = tagPromise;
            var postData = articlePromise;
            $scope.tags = tagData;
            $scope.articles = postData;

        }).catch(function(err) {
            err = err.data;
            $scope.errors.other = err.message;
        });

    });