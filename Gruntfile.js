module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        copy: {
            build: {
              cwd: 'src',
              src:[ '**', '!**/*.styl' ],
              dest: 'build',
              expand: true
            },
          },
        clean: {
            build: {
              src: [ 'build' ]
            },
            stylesheets: {
              src: [ 'build/**/*.css', '!build/application.css' ]
            },
            scripts: {
              src: [ 'build/**/*.js', '!build/application.js' ]
            },
          },
        stylus: {
            build: {
              options: {
                linenos: true,
                compress: false
              },
              files: [{
                expand: true,
                cwd: 'source',
                src: [ '**/*.styl' ],
                dest: 'build',
                ext: '.css'
              }]
            }
          },
        autoprefixer: {
            build: {
              expand: true,
              cwd: 'build',
              src: [ '**/*.css' ],
              dest: 'build'
            }
          },
        cssmin: {
            build: {
              files: {
                'build/application.css': [ 'build/**/*.css' ]
              }
            }
          },  
        uglify: {
            build: {
              options: {
                mangle: false
              },
              files: {
                'build/application.js': [ 'build/**/*.js' ]
              }
            }
          }      
        });
        
    // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  //Define tasks
  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'uglify', 'clean:scripts' ]
  );
  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'stylus', 'autoprefixer' ]
  );

  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'stylesheets']
  );
  grunt.registerTask(
    'default', 
    'Watches the project for changes, automatically builds them and runs a server.', 
    [ 'build' ]
  );

  
  };