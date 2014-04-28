module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['public/_dist'],

    cacheBust: {
      files: {
        src: ['public/index.html']
      }
    },

    concat: {
      options: {
        stripBanners: true
      },
      dist: {
        src: ['public/js/config.js', 'public/js/lib/*.js', 'public/js/helpers/*.js', 'public/js/directives/*.js', 'public/js/index.js'],
        dest: 'public/_dist/scripts.js'
      }
    },

    stylus: {
      compile: {
        options: {
          define: {
            importAll: require('stylus-import-tree')
          }
        },
        files: {
          'public/_dist/styles.css': 'public/styles/main.styl'
        }
      }
    },

    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= concat.dist.dest %>'
      }
    },

    watch: {
      stylus: {
        files: ['public/styles/*.styl', 'public/styles/**/*.styl'],
        tasks: ['stylus', 'cacheBust']
      },

      js: {
        files: '<%= concat.dist.src %>',
        tasks: ['concat', 'cacheBust']
      }
    }
  });
  
  // load all grunt packages
  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('default', ['development', 'watch']);
  grunt.registerTask('build', ['clean', 'concat', 'stylus']);
  grunt.registerTask('development', ['build', 'cacheBust']);
  grunt.registerTask('production', ['build', 'uglify', 'cacheBust']);
};
