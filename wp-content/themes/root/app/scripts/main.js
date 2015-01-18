/*!
 * TMD - How Brakes Work
 * Brakes In Action
 *
 * @author CDD / Bård N Hovde
 * @version 1.1.0
 * Copyright 2014.  licensed.
 */

 /*jshint indent:4 */

// Global namespace
var app = app || {};


(function($, window, document, undefined) {

    'use strict';

    if (!window.console) {
        window.console = {
            log: function() {}
        };
    }


    // Constructor  ---------------------------------------------------

    var RootApp = function() {

        // App config and variables 
        var self = this;

        this.settings = {
            screenWidth: 0,
            screenHeight: 0
        };

        this.domElements = {
            body: $('body'),
            menuBtn: $('[ui-menu-btn]')
        };

        var d = this.d = this.domElements;
        var s = this.s = this.settings;


        /**
         * Initialisation
         * @No parameters
         */

        this.init = function() {

            console.log('%c Initialising', 'color: green');

            self.screenSizeChanged();

            if (s.screenWidth < 768) {
                s.screenSize = 'tabletDown';
            } else {
                s.screenSize = 'tabletUp';
            }

            d.body.attr('ui-initialized', 'true');

            self.attachEventListeners();

        };
        /**
         * Screensize has changed
         * @No parameters
         */

        this.screenSizeChanged = function() {

            console.log('resizing to ' + s.screenHeight);

            // Setup screen and device settings
            s.screenWidth = $(window).width();
            s.screenHeight = $(window).height();

        };

        /**
         * Attach all event listeners
         * @No parameters
         */

        this.attachEventListeners = function() {

            $(document).click(function(e) {

                var target = e.target;

                // Menu Clicked
                if (d.menuBtn.is(target) || d.menuBtn.has(target).length > 0) {
                    self.toggleMenu(e);
                    return;
                }

            });
        };


        /** 
         * CLICK EVENT - Togglemenu function
         * @event
         */

        this.toggleMenu = function(e) {

            e.preventDefault();

            var current = d.body.attr('ui-menu-state');

            if (current === 'is-open') {
                d.body.attr('ui-menu-state', 'is-closing');
                setTimeout(function() {
                    d.body.attr('ui-menu-state', '');
                }, 500);
            } else {
                d.body.attr('ui-menu-state', 'is-open');
            }

        };

        /** 
         * IE Detector
         * @version number (int), @comparison (string)
         * Usage: isIE(8,'lte')
         */

        this.isIE = function(version, comparison) {
            var cc = 'IE',
                b = document.createElement('B'),
                docElem = document.documentElement,
                isIE;

            if (version) {
                cc += ' ' + version;
                if (comparison) {
                    cc = comparison + ' ' + cc;
                }
            }

            b.innerHTML = '<!--[if ' + cc + ']><b id="iecctest"></b><![endif]-->';
            docElem.appendChild(b);
            isIE = !!document.getElementById('iecctest');
            docElem.removeChild(b);
            return isIE;
        };

    };



    // Document.ready ------------------------------------

    $(document).ready(function() {

        app = new RootApp();
        app.init();

        // Setup variables
        var resizeCooldown;

        // Window resize listener (limit to 100ms to avoid multiple calls)
        $(window).resize(function() {
            clearTimeout(resizeCooldown);
            resizeCooldown = setTimeout(app.screenSizeChanged, 200);
        });

    });


})(jQuery, window, document);