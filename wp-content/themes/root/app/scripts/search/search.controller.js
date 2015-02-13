'use strict';

angular.module('rootApp')
    .controller('searchCtrl', function($scope, $rootScope, $q, API) {

        console.log('loading search controller');

        // load posts from the WordPress API
        // var getHomeIconsPromise = API.getHomeIcons();

        // $q.all([
        //     getHomeIconsPromise.$promise
        // ]).then(function() {

        //     var postData = getHomeIconsPromise;

        //     // Format the data to be more usable in the view
        //     angular.forEach(postData, function(value) {
        //         var weight = parseInt( value.custom_fields.weight );

        //         $scope.homePageIcons.push({
        //             'id'        : value.id,
        //             'title'     : value.title,
        //             'icon'      : value.custom_fields.icon_image,
        //             'enabled'   : value.custom_fields.enabled,
        //             'link'      : value.custom_fields.link,
        //             'sortWeight': weight
        //         });
        //     });

        // }).catch(function(err) {
        //     err = err.data;
        //     $scope.errors.other = err.message;
        // });

    });