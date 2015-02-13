'use strict';

angular.module('rootApp')

    // -------------------------------------
    //   Common API calls
    // -------------------------------------

    .factory('API', function($resource, WPCONF) {
        return $resource( WPCONF.api + ':query' + '/?:selector', {}, {
            getHomeIcons:       {method: 'GET', params: {query: 'posts', selector: 'type=front_page_icon&nopaging=true'}, isArray: true},
            getScreendump:      {method: 'GET', params: {query: 'posts', selector: 'type=screendump_post&filter[posts_per_page]=-1'}, isArray: true},
            getScreendumpTags:  {method: 'GET', params: {query: 'taxonomies%2Fpost_tag%2Fterms', selector: ''}, isArray: true},
            getDevices:         {method: 'GET', params: {query: 'posts', selector: 'type=device_post&filter[posts_per_page]=-1'}, isArray: true},
            createPost:         {method: 'POST', params: {query: 'posts', selector: '_wp_json_nonce=' + WPCONF.nonce }, isArray: false},
            createMedia:        {method: 'POST', params: {query: 'media', selector: '_wp_json_nonce=' + WPCONF.nonce }, isArray: false}
        });
    })

    // -------------------------------------
    //   Ad-hoc http request service
    // -------------------------------------

    .factory('USERS', function($resource, WPCONF) {
        return $resource( WPCONF.api + 'users' + '/:id' , {}, {
            get: { method: 'GET', params: { id: 'id', _wp_json_nonce: WPCONF.nonce } }
        });
    })

    .factory('AUTH', function($resource, WPCONF) {
        return $resource( WPCONF.api + ':selector1' + '/:selector2', {}, {
            getMe:  {method: 'GET', params: { selector1: '?json=user/get_logged_in_user', selector2: '60' } }
        });
    })

    .factory('HTTP', function($resource, WPCONF) {
        return $resource(
            WPCONF.api + ':param1/:param2/:param3/:param4/:param5/:param6/:param7/',
            {
                _wp_json_nonce: WPCONF.nonce
            }
        );
    })