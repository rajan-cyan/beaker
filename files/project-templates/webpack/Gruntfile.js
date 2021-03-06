/**
 * @file Gruntfile.js
 * @author {{ author }}
 * @copyright {{ year }} {{ company }}. All rights reserved.
*/

'use strict';

var beaker = require('beaker');

module.exports = function (grunt) {

    // pour all the initial configs from beaker into grunt
    beaker.pour(grunt);

    // If you want to override part of the grunt config, you can do so by uncommenting/editing below
    // grunt.config.data.eslint.options.config = '.custom-eslintrc';

    // You can also add custom grunt tasks here if you want
    /*
    grunt.registerTask('say hi', 'says hi', function () {
        grunt.log.writeln('Hello!');
    });
    */
};
