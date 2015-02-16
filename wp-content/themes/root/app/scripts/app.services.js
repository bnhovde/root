'use strict';

angular.module('rootApp')

    // -------------------------------------
    //   Common API calls
    // -------------------------------------

    .factory('SEARCH', function($resource, WPCONF) {
        return $resource(
            WPCONF.api + 'taxonomies/post_tag/terms',
            {
                _wp_json_nonce: WPCONF.nonce
            }
        );
    })

    .factory('HTTP', function($resource, WPCONF) {
        return $resource(
            WPCONF.api + ':param1/:param2/:param3/:param4/:param5/:param6/:param7/',
            {
                _wp_json_nonce: WPCONF.nonce
            }
        );
    })