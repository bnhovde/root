'use strict';

angular.module('rootApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngAnimate',
    'ngTouch'

])
    .config(function($animateProvider) {
        console.log('init');
    })

    // Setup constants from WordPress data
    .constant('WPCONF', {
        'dir': BlogInfo.url,
        'site': BlogInfo.site,
        'api': AppAPI.url,
        'user': userInfo,
        'nonce': BlogInfo.nonce
    });