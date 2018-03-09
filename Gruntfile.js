(function () {
   'use strict';
   
   module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      clean: {
        build: ['dist/']
      },

      copy: {
        main: {
          files: [ {
            expand: true,
            flatten: true,
            src: 'src/app/templates/**/*.hbs',
            dest: 'dist/templates'
          }, {
            expand: true,
            flatten: true,
            src: 'src/index.html',
            dest: 'dist/'
          }, {
            src: 'src/css/style.css',
            dest: 'dist/<%= pkg.name %>.css'
          }, {
            expand: true,
            flatten: true,
            src: ['src/app/data/**'],
            dest: 'dist/data/',
            filter: 'isFile'
          }, {
            expand: true,
            flatten: true,
            src: [
              'node_modules/jquery/dist/jquery.min.js',
              'node_modules/popper.js/dist/umd/popper.min.js',
              'node_modules/bootstrap/dist/js/bootstrap.min.js',
              'node_modules/handlebars/dist/handlebars.min.js'
            ],
            dest: 'dist/lib/js',
          }, {
            expand: true,
            flatten: true,
            src: [
              'node_modules/bootstrap/dist/css/bootstrap.min.css',
              'node_modules/weather-icons/css/weather-icons.min.css'
            ],
            dest: 'dist/lib/css',
          } ],
        },
      },

      concat: {
        options: {
          separator: '\n',
        },
        dist: {
          src: [
            'src/app/js/plugins.jquery.js',
            'src/app/js/constants.js',
            'src/app/js/formulas.js',
            'src/app/js/helpers.js',
            'src/app/js/classes/*.js',
            'src/app/js/Application.js'
          ],
          dest: 'dist/<%= pkg.name %>.js',
        },
      },

      jshint: {
        options: {
          jshintrc : '.jshintrc'
        },
        beforeconcat : [ 'Gruntfile.js' ], // Ignore: 'src/**/*.js'
        afterconcat : [ 'dist/<%= pkg.name %>.js' ]
      },

      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        my_target: {
          files: {
            'dist/<%= pkg.name %>.min.js': [ 'dist/<%= pkg.name %>.js' ]
          }
        }
      }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    // Tasks
    grunt.registerTask('default', [ 'clean', 'copy', 'jshint:beforeconcat' ]);
    grunt.registerTask('deploy', [ 'default', 'concat', 'jshint:afterconcat', 'uglify' ]);
  };

}());
