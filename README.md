# root.

root. is a wordpress theme for food bloggers.

  - Custom recipe post types
  - Recipes are SEO optimised
  - Sharing functionaltity
  - Magic

I'm building this theme for my wife's food blog, but once it is finished feel free to rebrand and use it in any way you want.

### Version
0.1

### Developer notes

root. is built on [html5blank] by Todd Motto, and wired up with a modified [generator-gulp-webapp] with the following helpers:

* rubySass - Yup..
* jshint - No sloppy js!
* imagemin - Image optimiser
* livereload - N/A if running xamp/mamp/lamp/wamp

The sass architecture is a custom setup we use at [cdd], documented loosely [here].

### Build commands

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

When developing:
```sh
$ gulp watch
```

When building and deploying:
```sh
$ gulp build
```


### Coming up

 - I want to include Angular to utilise the WP-REST-API in some way.
 - Add some funky UI animations for mobile/tablet users
 - Actually finish this thing

License
----

MIT


[html5blank]:http://html5blank.com/
[cdd]:http://twitter.com/cddnation
[here]:https://github.com/cddlimited/FED-Guidelines
[generator-gulp-webapp]:https://github.com/yeoman/generator-gulp-webapp
